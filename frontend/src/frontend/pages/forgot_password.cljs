(ns frontend.pages.forgot-password
  (:require
   ["framer-motion" :refer [motion]]
   ["react" :as react]
   ["lucide-react" :refer [Mail Lock Loader]]
   ["react-router-dom" :refer [Link useNavigate]]
   [re-frame.core :as rf]
   [frontend.api.core :as api]
   [frontend.components.input :as input]))

(defn handle-forgot-password [email]
  (->
   (api/forgot-password email)
   (.then
    (fn []
      (let [navigate (useNavigate)]
        (navigate "/reset-password"))))))

(defn- f-view [props]
  (let [[email set-email] (react/useState "")
        {:keys [error reset-link-sent? loading?]} @(rf/subscribe [:get-auth-data])]
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
       "Forgot Password"]

      [:div {:className "flex mb-5"}
       [:p {:className "text-sm text-gray-400"}
        "Enter your email address and we will send you the reset link"]]

      (if reset-link-sent?
        [:div {:className "flex"}
         [:p {:className "text-sm text-gray-400"}
          (str "If an account exists for " email ", you will receive a password reset link shortly")]]
        [:form {:on-submit (fn []
                             (handle-forgot-password email))}
         [input/view
          {:icon        Mail
           :type        "text"
           :placeholder "Emaill address"
           :value       email
           :sub-type     :default
           :class-name  "w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg 
                               border border-gray-700 focus:border-orange-500 focus:ring-2 
                               focus:ring-orange-500 text-white placeholder-gray-400 transition duration-200"
           :on-change    (fn [e]
                           (set-email (-> e .-target .-value)))}]

         (when error
           [:p {:className "text-red-500 font-semibold mb-2"}
            error])

         [:> motion.button
          {:className "mt-3 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white 
                             font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none 
                             focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition 
                             duration-200"
           :whileHover {:scale 1.02}
           :whileTop   {:scale 0.98}
           :type       "submit"}
          (if loading?
            [:> Loader {:className "w-6 h-6 animate-spin mx-auto"}]
            "Send reset link")]])]
     [:div {:className "px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center"}
      [:p {:className "text-sm text-gray-400"}
       [:> Link {:to "/signup"
                 :className "text-green-400 hover:underline"}
        "Back to login? "]]]]))

(defn view [props]
  [:f> f-view props])