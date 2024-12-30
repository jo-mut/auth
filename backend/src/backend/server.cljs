(ns backend.server
  (:require ["express" :as express]))

(def app (express))

;; Define a simple route for GET requests to '/'
(defn setup-routes []
  (.get app "/" (fn [req res]
                  (.send res "Hello, world!"))))

(defn listening []
  (setup-routes)
  (-> app
      (.listen 3000
               (fn [] (js/console.log "Server listening on port 3000")))))