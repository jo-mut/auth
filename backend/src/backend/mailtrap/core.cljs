(ns backend.mailtrap.core
  (:require
   ["dotenv" :as dotenv]
   ["mailtrap" :refer [MailtrapClient]]))

(.config dotenv)
(def TOKEN (.-MAILTRAP_TOKEN js/process.env))

(defn initialize-client []
  (let [client (MailtrapClient. #js {:token TOKEN})
        sender #js {:email "hello@demomailtrap.com"
                    :name "JMN"}
        recipients #js [ #js {:email "johnmutuku628@gmail.com"}]]
    (->
     (.send client #js {:from    sender
                        :to      recipients
                        :subject "You are awesome!"
                        :text    "Congrats for sending test email with Mailtrap!"
                        :category "Integration Test"})
     (.then (fn [res]
              (js/console.log "Email sent succefully" res)))
     (.catch (fn [err]
               (js/console.log "Failed to send email" err))))))

(initialize-client)