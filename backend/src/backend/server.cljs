(ns backend.server
  (:require ["express" :as express]
            [backend.db.connect-db :as connect-db]))

(def app (express))

;; Define a simple route for GET requests to '/'
(defn setup-routes []
  (.get app "/" (fn [req res]
                  (.send res "Hello, world!"))))

(defn init-server []
  (setup-routes)
  (-> app
      (.listen 3000
               (fn [] 
                 (connect-db/connect)
                 (js/console.log "Server listening on port 3000"))))) 