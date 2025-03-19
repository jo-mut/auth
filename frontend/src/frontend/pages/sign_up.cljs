(ns frontend.pages.sign-up
  (:require
   ["framer-motion" :refer [motion]]
   ["react" :as react]
   ["lucide-react" :refer [User Mail Lock Loader]]
   ["react-router-dom" :refer [Link useNavigate]]
   [re-frame.core :as rf]
   [frontend.api.core :as api]
   [frontend.components.password-meter :as password-meter]
   [frontend.components.input :as input]))

(defn handle-sign-up
  [name email password event]
  (.preventDefault event)
  (->
   (api/sign-up name email password)
   (.then
    (fn []
      (let [navigate (useNavigate)]
        (navigate "/verify-email"))))
   (.catch
    (fn [err]
      (js/console.log err)))))

(defn- f-view [props]
  (let [[name set-name]             (react/useState "")
        [email set-email]           (react/useState "")
        [password set-password]     (react/useState "")
        {:keys [error loading?]}  (rf/subscribe [:get-auth-data])]
    [:> motion.div
     {:initial {:opacity 0
                :y       20}
      :animate {:opacity 1
                :y       0}
      :transition {:duration 0.5}
      :className "max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter 
                    backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"}
     [:div {:className "p-8"}
      [:h2 {:className "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 
                          to-emerald-500 text-transparent bg-clip-text"}
       "Create Account"]
      [:form {:on-submit #(handle-sign-up name email password %)}
       [input/view
        {:icon        User
         :type        "text"
         :placeholder "Full name"
         :value       name
         :sub-type    :default
         :on-change    (fn [e]
                         (set-name (-> e .-target .-value)))}]
       [input/view
        {:icon        Mail
         :type        "text"
         :placeholder "Emaill address"
         :value       email
         :sub-type    :default
         :on-change    (fn [e]
                         (set-email (-> e .-target .-value)))}]
       [input/view
        {:icon        Lock
         :type        "text"
         :placeholder "Password"
         :value       password
         :sub-type    :default
         :on-change    (fn [e]
                         (set-password (-> e .-target .-value)))}]
       [:> motion.button
        {:className "mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white font-bold rounded-lg 
                           shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-orange-500 
                           focus:fing-offset-2 focus:ring-offset-gray-900 transition duration-200"
         :whileHover {:scale 1.02}
         :whileTop   {:scale 0.98}
         :type       "submit"
         :disabled   loading?}
        (if loading?
          [:> Loader
           {:className "animate-spin mx-auto"
            :size      24}]
          "Sign Up")]]

      (when error
        [:p {:className "text-red-500 font-semibold mt-2"} error])
      
      [password-meter/view password]]

     [:div {:className "px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center"}
      [:p {:className "text-sm text-gray-400"}
       "Already have an account? " [:> Link {:to "/login"
                                             :className "text-green-400 hover:underline"}
                                    "Login"]]]]))
(defn view [props]
  [:f> f-view props])