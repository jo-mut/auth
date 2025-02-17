(ns backend.controllers.auth-controllers
  (:require
   ["bcryptjs" :as bcryptjs]
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
  [res user-id secret]
  (let [options #js {:expiresIn "7d"}
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
                      (generate-token-and-set-cookies res (:_id (js->clj saved-user)) "mysecret")
                      (emails/send-verification-email "johnmutuku628@gmail.com" verification-token)
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
      (p/let [user-exist? (-> (.findOne models/user #js {:email email}) (p/promise))]
        (if user-exist?
          (do
            (-> res
                (.status 400)
                (.json #js {:success false
                            :message "User already exists"})))
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



(defn login []
  (fn [req res]
    (-> res (.send "log in route"))))

(defn logout []
  (fn [req res]
    (-> res (.send "log out route"))))

(defn verify-email []
  (fn [req res]
    (let [{:keys [code]} (:body (js->clj req))]
      (js/console.log "code -===== " req)
      (->
       (p/let [user (-> (.findOne models/user #js {:verificationToken "497655"
                                                   :verificationTokenExpiredAt #js {:$gt (js/Date.now)}})
                        (p/then (fn [user]
                                  (let [user-map (js->clj user)]
                                    user-map)))
                        (p/catch (fn [e]
                                   (js/console.log "user not found " e))))]

         (when-not user
           (-> res
               (.status 400)
               (.json #js {:subject false
                           :message "Invalid or expired verification code"})))

         (assoc user :isVerified true :verificationToken nil :verificationTokenExpiredAt nil)
         (js/console.log "user ===== " user)

        ;;  (set! (.-isVerified user) true)
        ;;  (set! (.-verificationToken user) nil)
        ;;  (set! (.-verificationTokenExpiredAt user) nil))

         (->
          (.save (clj->js user))
          (.then (fn []
                   (emails/send-welcome-email (:email user) (:name user))
                   (js/console.log "saved user ")))
          (.catch (fn [e]
                    (js/console.log "Failed to save user"))))

         (let [passwordless-user (clj->js (assoc user :password nil))]
           (-> res
               (.status 200)
               (.json #js {:subject true
                           :message "Email verified successfully"
                           :user    passwordless-user})))


         (p/catch (fn [e]
                    (-> res
                        (.status 500)
                        (.json #js {:success false
                                    :message (.-message e)})))))))))