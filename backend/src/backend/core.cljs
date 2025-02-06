(ns backend.core
  (:require
   [reagent.core :as reagent]
   [backend.server :as server]))

(defn get-env []
  (aget js/process.env "MONGO_URI"))

(defn start []
  (println "Server listening")
  (server/listening))

(defn ^:export init []
  (js/console.log  "enviroment variables" (get-env))
  (start))

(defn stop []
  (js/console.log "stop"))
