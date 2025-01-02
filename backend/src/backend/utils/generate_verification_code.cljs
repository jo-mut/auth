(ns backend.utils.generate-verification-code
  (:require [backend.utils.number :as number]))


(defn generate-code []
  (str (-> (.random number/math)
           (* 900000)
           (+ 100000)
           (.floor number/math)))) 