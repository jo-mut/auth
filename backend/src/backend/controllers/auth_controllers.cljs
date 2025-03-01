(ns backend.controllers.auth-controllers
  (:require
   ["bcryptjs" :as bcryptjs]
   ["crypto" :as crypto]
   ["jsonwebtoken" :as jwt]
   [promesa.core :as p]
   [backend.mailtrap.emails :as emails]
   [backend.db.models.user-models :as models]))

(defn get-env [key]
  (aget js/process.env key))

(defn generate-token []
  (str (-> (js/Math.random)
           (* 900000)
           (+ 100000)
           (js/Math.floor))))

(defn generate-token-and-set-cookies
  [res user-id]
  (let [secret "mysecret"
        options #js {:expiresIn "7d"}
        token (.sign jwt (clj->js {:user-id user-id}) secret options)]
    (-> (.cookie res "auth" token #js {:httpOnly true
                                       :secure   false
                                       :sameSite "strict"
                                       :maxAge   (* 7 24 60 60 1000)}))
    token))

(defn handle-sign-up
  [res {:keys [email password name]}]
  (let [token-expires-at   (+ (* 24 60 60 1000) (.now js/Date))
        verification-token (generate-token)]
    (-> (bcryptjs/hash password 10)
        (.then (fn [hashed-password]
                 (let [user (models/user. #js {:email                      email
                                               :password                   hashed-password
                                               :name                       name
                                               :verificationTokenExpiredAt token-expires-at
                                               :verificationToken          verification-token})]
                   (->
                    (p/let [saved-user (.save user)]
                      (set! (.-password saved-user) nil)
                      (generate-token-and-set-cookies res (:_id (js->clj saved-user)))
                      (emails/send-verification-email (get-env "EMAIL") verification-token)
                      (-> res
                          (.status 201)
                          (.json #js {:success true
                                      :message "User created successfully"
                                      :user    (js->clj saved-user)})))
                    (p/catch (fn [err]
                               (-> res
                                   (.status 500)
                                   (.json #js {:success false
                                               :message "Error saving user"
                                               :error   (.-message err)}))))))))
        (.catch (fn [err]
                  (-> res
                      (.status 500)
                      (.json #js {:success false
                                  :message "Error hashing password"
                                  :error   (.-message err)})))))))


(defn sign-up []
  (fn [req res]
    (let [body (js->clj (.-body req) :keywordize-keys true)
          {:keys [email password name]} body]
      (println res)
      (p/let [user-exist? (.findOne models/user #js {:email email})]
        (if user-exist?
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message "User already exists"}))
          (try
            ;; (when-not (or email password name)
            ;;   (throw (js/Error. "All fields are required")))
            (handle-sign-up res {:email    email
                                 :password password
                                 :name     name})
            (catch :default e
              (-> res
                  (.status 500)
                  (.json #js {:success false
                              :message (.-message e)})))))))))


(defn isPasswordValid [res password user]
  (->
   (bcryptjs/compare password (.-password user))
   (p/then
    (fn [isPasswordValid]
      (when-not isPasswordValid
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
       (p/let [user (.findOne models/user #js {:email email})]
         (if user
           (do
             (isPasswordValid res password user)
             (generate-token-and-set-cookies res (.-_id user))
             (set! (.-lastLogin user) (js/Date.))

             (->
              (.save user)
              (p/then
               (fn [_]
                 (set! (.-password user) nil)
                 (-> res
                     (.status 200)
                     (.json #js {:success true
                                 :message "Logged in successfully"
                                 :user    user}))))))

           (->
            res
            (.status 400)
            (.json #js {:subject false
                        :message "Invalid credentials"}))))

       (p/catch
        (fn [e]
          (-> res
              (.status 200)
              (.json #js {:success true
                          :message (.-message e)}))))))))

(defn logout []
  (fn [req res]
    (.clearCookie res "token")
    (-> res
        (.status 200)
        (.json #js {:success true
                    :message "Logged out successfully"}))))


(defn verify-email []
  (fn [req res]
    (let [body (.-body req)
          code (.-code body)]
      (->
       (p/let [user (.findOne models/user #js {:verificationToken code
                                               :verificationTokenExpiredAt #js {:$gt (js/Date.now)}})]

         (when-not user
           (-> res
               (.status 400)
               (.json #js {:subject false
                           :message "Invalid or expired verification code"})))

         (set! (.-isVerified user) true)
         (set! (.-verificationToken user) nil)
         (set! (.-verificationTokenExpiredAt user) nil)

         (->
          (.save user)
          (p/then (fn [_]
                    (emails/send-welcome-email (.-email user) (.-name user))
                    (set! (.-password user) nil)
                    (-> res
                        (.status 200)
                        (.json #js {:subject true
                                    :message "Email verified successfully"
                                    :user    user}))))))
       (p/catch (fn [e]
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
          reset-url (str (get-env "CLIENT_URL") "/reset-password/" token)]
      (->
       (p/let [user (.findOne models/user #js {:email email})]

         (when-not user
           (-> res
               (.status 400)
               (.json #js {:subject false
                           :message "User not found"})))
         (set! (.-resetPasswordToken user) token)
         (set! (.-resetPasswordExpiredAt user) expire-at)

         (->
          (.save user)
          (p/then (fn []
                    (emails/send-password-reset-email (.-email user) reset-url)))))
       (p/catch
        (fn [e]
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message (.-message e)}))))))))

(defn reset-password []
  (fn [req res]
    (let [token (-> req (.-params) (.-token))
          password (-> req (.-body) (.-password))
          hashed-password (-> (bcryptjs/hash password 10))]
            (js/console.log " reset url ***** " password)

      (->
       (p/let [user (.findOne models/user #js {:resetPasswordToken         token
                                               :resetPasswordExpiredAt #js {:&gt (js/Date.now)}})]
         (when-not user
           (-> res
               (.status 400)
               (.json #js {:subject false
                           :message "User not found"})))

         (set! (.-password user) hashed-password)
         (set! (.-resetPasswordToken user) nil)
         (set! (.-resetPasswordExpiredAt user) nil)

         (->
          (.save user)
          (p/then
           (fn []
             (emails/send-reset-password-success-email (.-email user))))))
       (p/catch
        (fn [e]
          (-> res
              (.status 400)
              (.json #js {:success false
                          :message (.-message e)}))))))))