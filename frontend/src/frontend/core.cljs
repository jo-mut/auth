(ns frontend.core
  (:require
   ["react" :as react]
   ["react-router-dom" :refer [BrowserRouter Route Routes Navigate]]
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [frontend.pages.login :as login]
   [frontend.pages.sign-up :as signup]
   [frontend.pages.home :as home]
   [frontend.pages.email-verification :as email-verification]
   [frontend.components.floating-shape :as floating-shape]
   [frontend.pages.forgot-password :as forgot-password]
   [frontend.pages.reset-password :as reset-password]
   [frontend.api.core :as api]
   frontend.subs
   frontend.events))

(defn floating-shapes []
  [:div
   [floating-shape/view
    {:size  "w-64 h-64"
     :color  "bg-orange-500"
     :top    "-5%"
     :left   "10%"
     :delay   0}]
   [floating-shape/view
    {:size  "w-48 h-48"
     :color  "bg-emerald-500"
     :top    "70%"
     :left   "80%"
     :delay   0}]
   [floating-shape/view
    {:size  "w-32 h-32"
     :color  "bg-yellow-500"
     :top    "40%"
     :left   "-10%"
     :delay   0}]])

(defn checking-auth []
  (->
   (api/check-auth)
   (.then
    (fn [auth-state]
      (js/console.log "is user authenticated" auth-state)))))

(defn redirect-authenticated-user
  [children]
  (let [{:keys [authenticated? user]} @(rf/subscribe [:get-auth-data])]
    (if (and authenticated? (:is-verified user))
      (r/as-element [:> Navigate {:to "/"
                                  :replace replace}])
      children)))

(defn protected-routes
  [children]
  (let [{:keys [authenticated? user]} @(rf/subscribe [:get-auth-data])]
    (cond
      ;; (not authenticated?) 
      ;; (r/as-element [:> Navigate {:to "/login"
      ;;                             :replace replace}])
      ;; (not (:is-verified user))
      ;; (r/as-element [:> Navigate {:to "/verify-email"
      ;;                             :replace replace}])
      :else children)))

(defn app-routes []
  [:> Routes
   [:> Route {:path "/" :element (protected-routes
                                  (r/as-element [home/view]))}]
   [:> Route {:path "/signup" :element (redirect-authenticated-user
                                        (r/as-element [signup/view]))}]
   [:> Route {:path "/verify-email" :element (r/as-element [email-verification/view])}]
   [:> Route {:path "/forgot-password" :element (r/as-element [forgot-password/view])}]
   [:> Route {:path "/reset-password" :element (r/as-element [reset-password/view])}]
   [:> Route {:path "/login" :element (redirect-authenticated-user
                                       (r/as-element [login/view]))}]])

(defn app []

  ;; TODO check auth status when the site is loaded

  ;; (react/useEffect
  ;;  (fn []
  ;;    (checking-auth))
  ;;  [])

  ;; TODO add a loading spinner
  ;; (when checking-auth
  ;;   [loading-spinner])

  [:> BrowserRouter
   [:div {:className "min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-emerald-900 
                      flex items-center justify-center relative overflow-hidden"}
    [floating-shapes]
    [app-routes]]])

(defn ^:export init []
  (rf/dispatch [:init-app-db])
  (rdom/render [app] (.getElementById js/document "root")))
