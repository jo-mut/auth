(ns backend.db.connect-db
  (:require
   ["mongoose" :as mongoose]
   [promesa.core :as p]))

(def connection-string "mongodb+srv://jo_ngei:2078j.el@cluster0.l5plc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

(defn get-env []
  (aget js/process.env "MONGO_URI"))

(defn connect []
  (-> mongoose (.connect connection-string)
      (p/then (fn [conn]
                (js/console.log "Database connection established")))
      (p/catch (fn [err]
                 (js/console.log "Database connection failed" err)
                 (js/process.exit)))))



