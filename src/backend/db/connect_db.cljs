(ns backend.db.connect-db
  (:require
   ["mongoose" :as mongoose]))

(def connection-string "mongodb+srv://jo_ngei:2078j.el@cluster0.l5plc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

(defn connect []
  (-> mongoose (.connect connection-string)
      (.then (fn [conn]
               (js/console.log "Database connection established " conn)))
      (.catch (fn [err]
                (js/console.log "Database connection failed " err)
                (js/process.exit)))))



