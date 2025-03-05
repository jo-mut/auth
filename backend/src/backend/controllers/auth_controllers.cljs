(ns backend.controllers.auth-controllers
  (:require
   ["bcryptjs" :as bcryptjs]
   ["crypto" :as crypto]
   ["jsonwebtoken" :as jwt]
   [backend.mailtrap.emails :as emails]
   [backend.utils.core :as utils]
   [backend.db.models.user-models :as models]))

(defn generate-token-and-set-cookies
  [res user-id]
  (let [secret "mysecret"
        options #js {:expiresIn "7d"}
        token (.sign jwt #js {:user-id user-id} secret options)]
    (-> (.cookie ^js res "auth" token #js {:httpOnly true
                                           :secure   false
                                           :sameSite "strict"
                                           :maxAge   (* 7 24 60 60 1000)}))
    token))

(defn check-auth []
  (fn [req res]
    (->
     (.findById models/user (.-userId ^js req))
     (.then
      (fn [user]
        (if user
          (do
            (set! (.-password ^js user) nil)
            (->
             res
             (.status 200)
             (.json   {:success true
                       :user    ^js user})))
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message "Invalid password"})))))
     (.catch
      (fn [e]
        (-> res
            (.status 400)
            (.json #js {:success false
                        :message (.-message e)})))))))

(defn handle-sign-up
  [res {:keys [email password name]}]
  (let [token-expires-at   (+ (* 24 60 60 1000) (.now js/Date))
        verification-token (utils/generate-code)]
    (-> (bcryptjs/hash password 10)
        (.then
         (fn [hashed-password]
           (let [user (models/user. #js {:email                      email
                                         :password                   hashed-password
                                         :name                       name
                                         :verificationTokenExpiredAt token-expires-at
                                         :verificationToken          verification-token})]

             (.save ^js user))))
        (.then
         (fn [user]
           (set! (.-password user) nil)
           (generate-token-and-set-cookies res (.-_id ^js user))
           (emails/send-verification-email (utils/get-env "EMAIL") verification-token)
           (-> res
               (.status 201)
               (.json #js {:success true
                           :message "User created successfully"
                           :user    (js->clj user)}))))
        (.catch
         (fn [err]
           (-> res
               (.status 500)
               (.json #js {:success false
                           :message "Error saving user"
                           :error   (.-message err)})))))))


(defn sign-up []
  (fn [req res]
    (let [body (js->clj (.-body req) :keywordize-keys true)
          {:keys [email password name]} body]
      (->
       (.findOne models/user #js {:email email})
       (.then
        (fn [user]
          (if user
            (-> res
                (.status 400)
                (.json #js {:success false
                            :message "User already exists"}))
            (->
             (handle-sign-up res {:email    email
                                  :password password
                                  :name     name})
             (.catch
              (fn [err]
                (-> res
                    (.status 500)
                    (.json #js {:success false
                                :message (.-message err)}))))))))
       (.catch
        (fn [err]
          (-> res
              (.status 500)
              (.json #js {:success false
                          :message (.-message err)}))))))))


(defn isPasswordValid [res password user]
  (->
   (bcryptjs/compare password (.-password user))
   (.then
    (fn [valid-password?]
      (when-not valid-password?
        (-> res
            (.status 400)
            (.json #js {:success false
                        :message "Invalid password"})))))))

(defn login []
  (fn [req res]
    (let [body (.-body req)
          email (.-email body)
          password (.-password body)]
      (->
       (.findOne models/user #js {:email email})
       (.then
        (fn [user]
          (when-not user
            (->
             res
             (.status 400)
             (.json #js {:subject false
                         :message "Invalid credentials"})))

          (isPasswordValid res password ^js user)
          (generate-token-and-set-cookies res (.-_id ^js user))
          (set! (.-lastLogin ^js user) (js/Date.))

          (->
           (.save user)
           (.then
            (fn [_]
              (set! (.-password user) nil)
              (-> res
                  (.status 200)
                  (.json #js {:success true
                              :message "Logged in successfully"
                              :user    ^js user})))))))

       (.catch
        (fn [e]
          (-> res
              (.status 200)
              (.json #js {:success true
                          :message (.-message e)}))))))))

(defn logout []
  (fn [req res]
    (.clearCookie  ^js res "token")
    (-> res
        (.status 200)
        (.json #js {:success true
                    :message "Logged out successfully"}))))


(defn verify-email []
  (fn [req res]
    (let [body (.-body req)
          code (.-code body)]
      (->
       (.findOne models/user #js {:verificationToken code
                                  :verificationTokenExpiredAt #js {:$gt (js/Date.now)}})
       (.then
        (fn [user]
          (when-not ^js user
            (-> res
                (.status 400)
                (.json #js {:subject false
                            :message "Invalid or expired verification code"})))

          (set! (.-isVerified ^js user) true)
          (set! (.-verificationToken ^js user) nil)
          (set! (.-verificationTokenExpiredAt ^js user) nil)

          (->
           (.save user)
           (.then
            (fn [_]
              (emails/send-welcome-email (.-email ^js user) (.-name ^js user))
              (set! (.-password user) nil)
              (-> res
                  (.status 200)
                  (.json #js {:subject true
                              :message "Email verified successfully"
                              :user    user})))))))
       (.catch
        (fn [e]
          (-> res
              (.status 500)
              (.json #js {:success false
                          :message (.-message e)}))))))))




(defn forgot-password []
  (fn [req res]
    (let [body (.-body req)
          email (.-email body)
          token (.toString (.randomBytes crypto 20) "hex")
          expire-at (+ (* 1 60 60 1000) (.now js/Date))
          reset-url (str (utils/get-env "CLIENT_URL") "/reset-password/" token)]
      (->
       (.findOne models/user #js {:email email})
       (.then
        (fn [user]
          (when-not ^js user
            (-> res
                (.status 400)
                (.json #js {:subject false
                            :message "User not found"})))
          (set! (.-resetPasswordToken ^js user) token)
          (set! (.-resetPasswordExpiredAt ^js user) expire-at)

          (->
           (.save user)
           (.then
            (fn []
              (emails/send-password-reset-email (.-email user) reset-url))))))
       (.catch
        (fn [e]
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message (.-message e)}))))))))

(defn reset-password []
  (fn [req res]
    (let [body  (.-body ^js req)
          params (.-params ^js req)
          token (.-token ^js params)
          password (.-password ^js body)
          hashed-password (bcryptjs/hash password 10)]

      (->
       (.findOne models/user #js {:resetPasswordToken         token
                                  :resetPasswordExpiredAt #js {:$gt (js/Date.now)}})
       (.then
        (fn [user]
          (when-not user
            (-> res
                (.status 400)
                (.json #js {:subject false
                            :message "User not found"})))

          (set! (.-password ^js user) hashed-password)
          (set! (.-resetPasswordToken ^js user) nil)
          (set! (.-resetPasswordExpiredAt ^js user) nil)

          (->
           (.save user)
           (.then
            (fn []
              (emails/send-reset-password-success-email (.-email user)))))))

       (.catch
        (fn [e]
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message (.-message e)}))))))))