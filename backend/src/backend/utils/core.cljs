(ns backend.utils.core)

(def date js/Date)

(def error js/Error)

(defn get-env [key]
  (aget js/process.env key))

(def math js/Math)

(defn generate-code []
  (str (+ 100000 (.floor math (* 900000 (.random math)))))) 
