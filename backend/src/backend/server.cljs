(ns backend.server
  (:require
   ["express" :as express]
   ["cookie-parser" :as cookie-parser]
   ["cors" :as cors]
   ["path" :as path]
   [backend.utils.core :as utils]
   [backend.db.connect-db :as connect-db]
   [backend.routes.auth-routes :as routes]))

(def app (express))
(def port (or (utils/get-env "PORT") 3000))
(def dirname (.resolve path))

(.use app (cors #js {:origin      "http://localhost:5173"
                     :methods     "GET,POST,PUT,DELETE"
                     :credentials true}))

(.use app (.json express)) ;; allows us to parse incoming requests:req.body
(.use app (cookie-parser)) ;; allows us to parse incoming cookies

(.use app "/api/auth" (routes/setup-routes))

(when (= (utils/get-env "NODE_ENV") "production")
  (.use app (.json express (.join path dirname "/frontend/dist")))
  (.get app "*" (fn [req res]
                  (->
                   res
                   (.sendFile (.resolve path "frontend" "dist" "index.html"))))))

(defn listening []
  (-> app
      (.listen port
               (fn []
                 (connect-db/connect)
                 (js/console.log "Server listening on port 3000"))))) 