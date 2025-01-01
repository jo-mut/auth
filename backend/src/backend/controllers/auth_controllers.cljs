(ns backend.controllers.auth-controllers)

(defn sign-up []
  (fn [req, res]
    (-> res (.send "sign up route"))))

(defn login []
  (fn [req, res]
    (-> res (.send "log in route"))))

(defn logout []
  (fn [req, res]
    (-> res (.send "log out route"))))