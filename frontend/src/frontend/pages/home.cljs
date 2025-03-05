(ns frontend.pages.home
  (:require
   ["framer-motion" :refer [motion]]
   [re-frame.core :as rf]))

(defn view []
  (let [{:keys [user]} @(rf/subscribe [:get-auth-data])]
    [:> motion.div
     {:initial {:opacity 0
                :y       20}
      :animate {:opacity 1
                :y       0}
      :transition {:duration 0.5}
      :className "max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter 
                          backdrop-blur-lg rounded-xl border border-gray-800"}
     [:h2 :className "text-3xl font-bold mb-6 text-center bg-graditent-to-r from-green-400 to-emerald-600
                        text-transparent bg-clip-text"
      "Dashboard"]

     [:div {:className "space-y-6"}]
     [:> motion.div
      :className "p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
      :initial    {:opacity 0
                   :y       20}
      :animate    {:opacity  1
                   :y        0}
      :transition {:delay  0.2}]
     [:h3  {:className "text-xl font-semibold text-green-400 mb-3"}
      "Profile Information"]
     [:p {:className "text-gray-300"}
      (str (:name user) "Name")]
     [:p {:className "text-gray-300"}
      (str (:email user) "Email")]]))