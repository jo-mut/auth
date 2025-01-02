(ns backend.controllers.auth-controllers
  (:require
   ["bcryptjs" :as bcryptjs]
   ["jwt" :as jsonwebtoken]
   [backend.models.user-models :as models]))

(defn get-env [key]
  (aget js/process.env key))

(defn generate-token []
  (str (-> (.random js/Math)
           (* 900000)
           (+ 100000)
           (.floor js/Math))))

(defn generate-token-and-set-cookies
  [res payload secret]
  (let [options #js {:expiresIn "7d"}
        {:keys [user-id]} payload
        token ((.sign jwt) user-id secret options)]
    (-> ((.cookie res) "auth" token #js {:httpOnly true
                                         :secure  (= (get-env "NODE_ENV") "production")
                                         :sameSite "strict"
                                         :maxAge  (* 7 24 60 60 1000)}))
    token))

(defn handle-sign-up
  [res {:keys [email password name]}]
  (let [hashed-password    (-> bcryptjs (.hash  password 10))
        token-expires-at   (* (+ js/Date 24) 60 60 1000)
        verification-token (generate-token)
        user               (models/user. #js {:email              email
                                              :password           hashed-password
                                              :name               name
                                              :token-expires-at   token-expires-at
                                              :verification-token verification-token})
        new-user (assoc user :password nil)]
    (.save user)
    (generate-token-and-set-cookies res, {:user-id (.-_id user)} (get-env "JWT_SECRET"))
    (-> res
        (.status 201)
        (.json #js {:success true
                    :message "User created successfully"
                    :user    new-user}))))

(defn sign-up []
  (fn [req, res]
    (let [{:keys [email password name]} req]
      (try
        (when-not (or email password name)
          (throw js/Error "All fields are required"))

        (let [user-exist? (.findOne models/user email)]
          (if user-exist?
            (println "User already exists")
            (handle-sign-up res {:email    email
                                 :password password
                                 :name     name})))
        (catch :default e
          (-> res
              (.status 404)
              (.json  #js {:success false
                           :message (.-message e)})))))))


(defn login []
  (fn [req, res]
    (-> res (.send "log in route"))))

(defn logout []
  (fn [req, res]
    (-> res (.send "log out route"))))