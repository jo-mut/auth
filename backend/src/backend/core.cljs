(ns backend.core
  (:require
   [reagent.core :as reagent]))


(defn start []
  (js/console.log "stop"))

(defn ^:export init []
  (start))

(defn stop []
  (js/console.log "stop"))
