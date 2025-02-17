(ns backend.mailtrap.core
  (:require
   ["dotenv" :as dotenv]
   ["mailtrap" :refer [MailtrapClient]]))

(.config dotenv)
(def TOKEN (.-MAILTRAP_TOKEN js/process.env))

(def sender
  #js {:email "hello@demomailtrap.com"
       :name "JMN"})

(def mailtrap-client
  (MailtrapClient. #js {:token TOKEN}))


