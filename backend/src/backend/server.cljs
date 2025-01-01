(ns backend.server
  (:require ["express" :as express]
            [backend.db.connect-db :as connect-db]
            [backend.routes.auth-route :as routes]))

(def app (express))

(.use app "/api/auth" (routes/setup-routes))

(defn init-server []
  (-> app
      (.listen 3000
               (fn []
                 (connect-db/connect)
                 (js/console.log "Server listening on port 3000"))))) 