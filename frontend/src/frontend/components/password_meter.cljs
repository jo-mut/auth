(ns frontend.components.password-meter
  (:require
   [reagent.core :as r]
   ["lucide-react" :refer [Check X]]))

(defn creteria [password]
  [{:label "At least 6 characters"
    :met   (>= (count password) 6)}
   {:label "Contains uppercase letter"
    :met   (re-find #"/A-Z/" password)}
   {:label "Contains lowercase letter"
    :met   (re-find #"/a-z/" password)}
   {:label "Contains a number"
    :met   (re-find #"/\d/" password)}
   {:label "Contains special character"
    :met   (re-find #"/^A-Za-z0-9/" password)}])

(defn strength-meter [password]
  (let [password-strength (count password)
        strength (r/atom 0)]
    (cond
      (> password-strength 6)
      (reset! strength inc)

      (and (re-matches #"/a-z/" password) (re-matches #"/A-Z/" password))
      (reset! strength inc)

      (re-matches #"/\d/" password)
      (reset! strength inc)

      (re-matches #"/^A-Za-z0-9/" password)
      (reset! strength inc))))

(defn strength-title [password]
  (cond
    (= (strength-meter password) 0)
    "Very weak"

    (= (strength-meter password) 1)
    "Weak"

    (= (strength-meter password) 2)
    "Fair"

    (= (strength-meter password) 3)
    "Good")
  "Strong")

(defn get-color [strength]
  (cond
    (= strength 0)
    "bg-red-500"

    (= strength 1)
    "bg-red-400"

    (= strength 2)
    "bg-yellow-500"

    (= strength 3)
    "bg-yellow-400")
  "bg-green-500")

(defn view [password]
  [:div {:className "mt-2"}
   [:div {:className "flex justify-between items-center mb-1"}
    [:span {:className "text-xs text-gray-400 "}
     "Password strength"]
    [:span {:className "text-xs text-gray-400"}
     (strength-title password)]]
   [:div {:className "flex space-x-1"}
    (map (fn [item]
           [:div {:key item
                  :className (str "h-1 w-1/4 rounded-full transition-colors
                                                                duration-300"
                                  (if (< item (strength-meter password))
                                    (get-color (strength-meter password))
                                    "bg-gray-600"))}])
         (range 4))]
   [:div {:className "mt-2 space-y-1"}
    (map (fn [item]
           [:div {:key (:label item)
                  :className "flex items-center text-xs"}
            (if (:met item)
              [:> Check {:className "size-4 text-orange-500 mr-2"}]
              [:> X {:className "size-4 text-gray-500 mr-2"}])
            [:span {:className (if (:met item) "text-orange-500" "text-gray-400")}
             (:label item)]])
         (creteria password))]])