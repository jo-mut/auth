(ns frontend.pages.reset-password
  (:require
   ["framer-motion" :refer [motion]]
   ["react" :as react]
   ["lucide-react" :refer [Lock Loader]]
   ["react-router-dom" :refer [useNavigate useParams]]
   [re-frame.core :as rf]
   [frontend.api.core :as api]
   [frontend.components.input :as input]))

(defn handle-reset-password
  [password]
  (let [navigate (useNavigate)
        params    (useParams)]
    (->
     (api/reset-passwrod (:token params) password)
     (.then
      (fn []
        (navigate "/reset-password"))))))

(defn- f-view [props]
  (let [[password set-password] (react/useState "")
        [confirm-password set-confirm-password] (react/useState "")
        [confirm-password-error set-confirm-password-error] (react/useState "")
        {:keys [error loading?]} @(rf/subscribe [:get-auth-data])]
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
       "Reset Password"]
      [:form {:on-submit (fn []
                           (if (not= password confirm-password)
                             (set-confirm-password-error "Password does not match")
                             (handle-reset-password password)))}
       [input/view
        {:icon        Lock
         :type        "text"
         :placeholder "Password"
         :value       password
         :sub-type     :default
         :class-name  "w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg 
                       border border-gray-700 focus:border-orange-500 focus:ring-2 
                       focus:ring-orange-500 text-white placeholder-gray-400 transition duration-200"
         :on-change    (fn [e]
                         (set-password (-> e .-target .-value)))}]
       [input/view
        {:icon        Lock
         :type        "text"
         :placeholder "Confirm new password"
         :value       confirm-password
         :sub-type     :default
         :class-name  "w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg 
                              border border-gray-700 focus:border-orange-500 focus:ring-2 
                              focus:ring-orange-500 text-white placeholder-gray-400 transition duration-200"
         :on-change    (fn [e]
                         (set-confirm-password (-> e .-target .-value)))}]

       (when (or error confirm-password-error)
         [:p {:className "text-red-500 font-semibold mb-2"}
          (or error confirm-password-error)])

       [:> motion.button
        {:className "mt-3 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white 
                           font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none 
                           focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition 
                           duration-200"
         :whileHover {:scale 1.02}
         :whileTop   {:scale 0.98}
         :type       "submit"}
        (if loading?
          "Resetting ..."
          "Set New Password")]]]]))
(defn view [props]
  [:f> f-view props])