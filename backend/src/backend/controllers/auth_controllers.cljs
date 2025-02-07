(ns backend.controllers.auth-controllers
  (:require
   ["bcryptjs" :as bcryptjs]
   ["jsonwebtoken" :as jwt]
   [promesa.core :as p]
   [backend.mailtrap.emails :as emails]
   [backend.models.user-models :as models]))

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

(defn send-email
  [email verification-token]
  (emails/send-verification-email email verification-token))

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
                      (js/console.log "saved user: " saved-user)
                      (set! (.-password saved-user) nil)
                      (generate-token-and-set-cookies res (:_id (js->clj saved-user)) "mysecret")
                      (send-email "johnmutuku628@gmail.com" verification-token)
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
  (fn [req, res]
    (-> res (.send "log in route"))))

(defn logout []
  (fn [req, res]
    (-> res (.send "log out route"))))