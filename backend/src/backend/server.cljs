(ns backend.server
  (:require
   ["express" :as express]
   ["cookie-parser" :as cookie-parser]
   [backend.db.connect-db :as connect-db]
   [backend.routes.auth-routes :as routes]))

(def app (express))

(.use app (.json express)) ;; allows us to parse incoming requests:req.body
(.use app (cookie-parser)) ;; allows us to parse incoming cookies

(.use app "/api/auth" (routes/setup-routes))

(defn listening []
  (-> app
      (.listen 3000
               (fn []
                 (connect-db/connect)
                 (js/console.log "Server listening on port 3000"))))) 