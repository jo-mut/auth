(ns frontend.pages.login
  (:require
   ["framer-motion" :refer [motion]]
   ["react" :as react]
   ["lucide-react" :refer [Mail Lock Loader]]
   ["react-router-dom" :refer [Link]]
   [frontend.components.input :as input]))

(defn handle-login [])

(defn- f-view [props]
  (let [[email set-email] (react/useState "")
        [password set-password] (react/useState "")
        [loading? set-loading?] (react/useState false)]
    [:> motion.div
     {:initial {:opacity 0
                :y       20}
      :animate {:opacity 1
                :y       0}
      :transition {:duration 0.5}
      :className "max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter 
                    backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"}
     [:div {:className "p-8"}
      [:h2 {:className "text-3xl mb-6 font-bold text-center bg-gradient-to-r from-orange-400 
                          to-emerald-500 text-transparent bg-clip-text"}
       "Welcome back"]
      [:form {:on-submit (handle-login)}
       [input/view
        {:icon        Mail
         :type        "text"
         :placeholder "Emaill address"
         :value       email
         :on-change    (fn [e]
                         (set-email (-> e .-target .-value)))}]
       [input/view
        {:icon        Lock
         :type        "text"
         :placeholder "Password"
         :value       password
         :on-change    (fn [e]
                         (set-password (-> e .-target .-value)))}]]
      
      [:div {:className "flex"}
       [:p {:className "text-sm text-gray-400"}
        [:> Link {:to "/login"
                  :className "text-green-400 hover:underline"}
         "Forgot your password"]]]
      
      [:> motion.button
       {:className "mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white 
                    font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none 
                    focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition 
                    duration-200"
        :whileHover {:scale 1.02}
        :whileTop   {:scale 0.98}
        :type       "submit"}
       (if loading? 
         [:> Loader {:className "w-6 h-6 animate-spin mx-auto"}]
         "Login")]]
       
       [:div {:className "px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center"}
        [:p {:className "text-sm text-gray-400"}
         "Don't have an account? " [:> Link {:to "/signup"
                                               :className "text-green-400 hover:underline"}
                                      "Sign up"]]]]))
(defn view [props]
  [:f> f-view props])