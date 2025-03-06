(ns frontend.utils.core)

(defn format-date [date-string]
  (let [date (js/Date. date-string)]
    (when-not (.getTime date)
      "Invalid date")

    (.toLocaleDateString
     date "en-US"
     #js {:year "numeric"
          :month "short"
          :day   "numeric"
          :hour  "2-digit"
          :minute "2-digit"
          :hour12  true})))