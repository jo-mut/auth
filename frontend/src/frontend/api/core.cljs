(ns frontend.api.core
  (:require [re-frame.core :as rf]))

(def url "http://localhost:3000/api/auth")

(defn sign-up [name email password]
  (rf/dispatch [:update-loading-state true])
  (-> (js/fetch (str url "/signup")
                #js {:method  "POST"
                     :headers #js {"Content-Type" "application/json"
                                   "Accept"       "application/json"}
                     :body    (js/JSON.stringify #js {:email    email
                                                      :password password
                                                      :name     name})})
      (.then
       (fn [response]
         (js/console.log response)
         (if (.-ok response)
           (.json response)
           (throw (js/Error "Failed to fetch sign up data")))))
      (.then
       (fn [data]
         (js/console.log  "sign up response data " data)
         (.-message data)
         (let [auth  {:user           (js->clj (.-user ^js data) :keywordize-keys true)
                      :authenticated? true
                      :loading?       false}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch data"))))))

(defn login [email password]
  (rf/dispatch [:update-loading-state true])
  (-> (js/fetch (str url "/login")
                #js {:method  "POST"
                     :headers #js {"Content-Type" "application/json"
                                   "Accept"       "application/json"}
                     :body    (js/JSON.stringify #js {:email    email
                                                      :password password})})
      (.then
       (fn [response]
         (js/console.log response)
         (if (.-ok response)
           (.json response)
           (throw (js/Error "Failed to fetch login data")))))
      (.then
       (fn [data]
         (.-message data)
         (let [auth  {:user           (js->clj (.-user ^js data) :keywordize-keys true)
                      :authenticated? true
                      :loading?       false}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch login data"))))))


(defn logout []
  (rf/dispatch [:update-loading-state true])
  (-> (js/fetch (str url "/logout"))
      (.then
       (fn [response]
         (js/console.log response)
         (if (.-ok response)
           (.json response)
           (throw (js/Error "Failed to fetch logout data")))))
      (.then
       (fn [data]
         (.-message data)
         (let [auth  {:user           nil
                      :authenticated? false
                      :loading?       false}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch login data"))))))



(defn forgot-password [email]
  (rf/dispatch [:save-auth-response {:loading? true :error nil}])
  (-> (js/fetch (str url "/forgot-password")
                #js {:method  "POST"
                     :headers #js {"Content-Type" "application/json"
                                   "Accept"       "application/json"}
                     :body    (js/JSON.stringify #js {:email    email})})
      (.then
       (fn [response]
         (js/console.log response)
         (if (.-ok response)
           (.json response)
           (throw (js/Error "Failed to fetch forgot password data")))))
      (.then
       (fn [data]
         (.-message data)
         (let [auth  {:loading?         false
                      :reset-link-sent? true}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch forgot password data"))))))

(defn reset-password [token password]
  (rf/dispatch [:save-auth-response {:loading? true :error nil :password-reset? false}])
  (-> (js/fetch (str url "/forgot-password" token)
                #js {:method  "POST"
                     :headers #js {"Content-Type" "application/json"
                                   "Accept"       "application/json"}
                     :body    (js/JSON.stringify
                               #js {:password  password})})
      (.then
       (fn [response]
         (js/console.log response)
         (if (.-ok response)
           (.json response)
           (throw (js/Error "Failed to fetch forgot password data")))))
      (.then
       (fn [data]
         (.-message data)
         (let [auth  {:loading?         false
                      :password-reset?   true}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch forgot password data"))))))


(defn verify-email [verification-code]
  (rf/dispatch [:authentication-error])
  (->
   (js/fetch (str url "/verify-email")
             #js {:method  "POST"
                  :headers #js {"Content-Type" "application/json"
                                "Accept"       "application/json"}
                  :body    (js/JSON.stringify #js {:code    verification-code})})
   (.then
    (fn [response]
      (if (.-ok response)
        (.json response)
        (throw (js/Error "Failed to fetch verification data")))))
   (.then
    (fn [data]
      (.-message data)
      (let [auth  {:user           (js->clj (.-user ^js data) :keywordize-keys true)
                   :authenticated? true
                   :loading?       false}]
        (rf/dispatch [:save-auth-response auth]))))
   (.catch
    (fn [error]
      (rf/dispatch [:authentication-error error])
      (throw (js/Error "Failed to fetch data"))))))


(defn check-auth []
  (rf/dispatch [:checking-auth])
  (->
   (js/fetch (str url "/check-auth"))
   (.then
    (fn [response]
      (if (.-ok response)
        (.json response)
        (throw (js/Error "Failed to fetch auth status")))))
   (.then
    (fn [data]
      (.-message data)
      (let [auth  {:user           (js->clj (.-user ^js data) :keywordize-keys true)
                   :authenticated? true
                   :checking-auth  false
                   :loading?       false}]
        (rf/dispatch [:save-auth-response auth]))))
   (.catch
    (fn [error]
      (throw (js/Error "Failed to fetch data" error))))))