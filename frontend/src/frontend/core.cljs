(ns frontend.core
  (:require
   ["react-router-dom" :refer [BrowserRouter Route Switch Link]]
   [reagent.dom :as rdom]
   [frontend.components.floating-shape :as floating-shape]))

(defn floating-shapes []
  [:div
   [floating-shape/view
    {:size  "w-64 h-64"
     :color  "bg-green-500"
     :top    "-5%"
     :left   "10%"
     :delay   0}]
   [floating-shape/view
    {:size  "w-48 h-48"
     :color  "bg-emerald-500"
     :top    "-70%"
     :left   "80%"
     :delay   5}]
   [floating-shape/view
    {:size  "w-64"
     :color  "bg-lime-500"
     :top    "-40%"
     :left   "10%"
     :delay   2}]])

(defn app []
  [:> BrowserRouter
   [:div {:className "min-h-screen bg-gradient-to-br 
                      from-gray-900 via-teal-900 to-emerald-900 flex 
                      items-center justify-center relative overflow-hidden"}]
   [floating-shapes]])

(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "root")))
