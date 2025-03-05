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
           (throw (js/Error "Failed to fetch data")))))
      (.then
       (fn [data]
         (.-message data)
         (let [auth  {:user           (.-user data)
                      :authenticated? true
                      :loading?       false}]
           (rf/dispatch [:save-auth-response auth]))))
      (.catch
       (fn [error]
         (rf/dispatch [:authentication-error error])
         (throw (js/Error "Failed to fetch data"))))))