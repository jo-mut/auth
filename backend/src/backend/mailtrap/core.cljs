(ns backend.mailtrap.core
  (:require
   ["dotenv" :as dotenv]
   ["mailtrap" :refer [MailtrapClient]]
   [backend.mailtrap.email-templates :as templates]))

(.config dotenv)
(def TOKEN (.-MAILTRAP_TOKEN js/process.env))

(def sender
  #js {:email "hello@demomailtrap.com"
       :name "JMN"})

(def mailtrap-client
  (MailtrapClient. #js {:token TOKEN}))


(defn send [recipients verification-token]
  (js/console.log "called: " recipients verification-token)
  (->
   (.send mailtrap-client #js {:from    sender
                               :to      recipients
                               :subject "Verify your email!"
                               :html    (templates/verification-email-template verification-token)
                               :category "Email verification"})
   (.then (fn [res]
            (js/console.log "Email sent succefully" res)))
   (.catch (fn [err]
             (js/console.log "Failed to send email" err)))))

