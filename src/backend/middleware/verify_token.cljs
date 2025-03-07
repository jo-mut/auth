(ns backend.middleware.verify-token
  (:require
   [backend.utils.core :as utils]
   ["jsonwebtoken" :as jwt]))

(defn verify-token []
  (fn [req res next]
    (let [token (-> ^js req .-cookies .-token)]
      (try
        (when-not token
          (-> res
              (.status 401)
              (.json   #js {:success false
                            :message "Unauthorised - no token provided"})))
        (let [decoded (.verify jwt token (utils/get-env "JWT_SECRET"))]
          (when-not decoded
            (-> res
                (.status 401)
                (.json   #js {:success false
                              :message "Unauthorised - no token provided"})))
          (set! (.-userId ^js req) (.-userId ^js decoded))
          (next))
        (catch :default e
         (-> res
             (.status 500)
             (.json   #js {:success false
                           :message "Server error"})))))))