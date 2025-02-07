(ns backend.mailtrap.emails
  (:require [promesa.core :as p]
            [backend.mailtrap.core :as m-client]))

(defn send-verification-email
  [email verification-token] 
  (let [recipients #js [#js {:email email}]]
    (->
     (m-client/send recipients verification-token)
     (p/catch (fn [err]
                (js/console.log "failed to send email" err))))))