(ns backend.core
  (:require
   [backend.utils.core :as utils]
   [backend.server :as server]))

(defn start []
  (println "Server listening")
  (server/listening))

(defn ^:export init []
  (js/console.log  "enviroment variables" (utils/get-env "MONGO_URI"))
  (start))

(defn stop []
  (js/console.log "stop"))
