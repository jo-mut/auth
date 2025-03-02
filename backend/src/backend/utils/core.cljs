(ns backend.utils.core)

(def math js/Math)

(def date js/Date)

(def error js/Error)

(defn get-env [key]
  (aget js/process.env key))

(defn generate-code []
  (str (-> (.random math)
           (* 900000)
           (+ 100000)
           (.floor math)))) 