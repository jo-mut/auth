(ns frontend.pages.home
  (:require
   ["framer-motion" :refer [motion]]
   ["lucide-react" :refer [Loader]]
   ["react-router-dom" :refer [useNavigate]]
   [re-frame.core :as rf]
   [frontend.api.core :as api]
   [frontend.utils.core :as utils]))

(defn handle-logout []
  (->
   (api/logout)
   (.then
    (fn []
      (js/console.log "user logged out")
      (let [navigate (useNavigate)]
        (navigate "/login"))))))

(defn view []
  (let [{:keys [user loading?]} @(rf/subscribe [:get-auth-data])]
    [:> motion.div
     {:initial {:opacity 0
                :y       20}
      :animate {:opacity 1
                :y       0}
      :transition {:duration 0.5}
      :className "max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter 
                  backdrop-blur-lg rounded-xl border border-gray-800"}
     [:h2 {:className "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600
                       text-transparent bg-clip-text"}
      "Dashboard"]

     [:div {:className "space-y-6"}
      [:> motion.div
       {:className "p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
        :initial    {:opacity 0
                     :y       20}
        :animate    {:opacity  1
                     :y        0}
        :transition {:delay  0.2}}
       [:h3  {:className "text-xl font-semibold text-green-400 mb-3"}
        "Profile Information"]
       [:p {:className "text-gray-300"}
        (str "Name: "  (:name user))]
       [:p {:className "text-gray-300"}
        (str "Email: " (:email user))]]
      [:> motion.div
       {:className "p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
        :initial    {:opacity 0
                     :y       20}
        :animate    {:opacity  1
                     :y        0}
        :transition {:delay  0.2}}
       [:h3  {:className "text-xl font-semibold text-green-400 mb-3"}
        "Activities"]
       [:p {:className "text-gray-300"}
        [:span {:className "font-bold"}
         (str "Joined: " (utils/format-date (:created-at user)))]]
       [:p {:className "text-gray-300"}
        [:span {:className "font-bold"} "Last Login: "]
        (if (:last-login user)
          (utils/format-date (:last-login user))
          "You just signed up")]]
      [:> motion.button
       {:className "mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white 
                          font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none 
                          focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition 
                          duration-200"
        :whileHover {:scale 1.02}
        :whileTop   {:scale 0.98}
        :type       "submit"
        :on-click    (fn []
                      (handle-logout))}
       (if loading?
         [:> Loader {:className "w-6 h-6 animate-spin mx-auto"}]
         "Login")]]]))