(ns backend.core
  (:require
   [reagent.core :as reagent]
   [backend.server :as server]))


(defn start [] 
  (println "Server listening")
  (server/init-server))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
