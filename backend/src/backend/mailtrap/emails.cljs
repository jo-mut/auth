(ns backend.mailtrap.emails
  (:require
   [backend.mailtrap.email-templates :as templates]
   [backend.mailtrap.core :as m-client]))

(defn send-verification-email
  [email verification-token]
  (let [recipients #js [#js {:email email}]]
    (->
     (.send m-client/mailtrap-client #js {:from    m-client/sender
                                          :to      recipients
                                          :subject "Verify your email!"
                                          :html    (templates/verification-email-template verification-token)
                                          :category "Email verification"})
     (.then (fn [res]
              (js/console.log "Email sent successfully" res)))
     (.catch (fn [err]
               (js/console.log "Failed to send email" err))))))

(defn send-welcome-email
  [email user-name]
  (let [recipients #js [#js {:email email}]]
    (->
     (.send m-client/mailtrap-client #js {:from               m-client/sender
                                          :to                 recipients
                                          :subject            "Verify your email!"
                                          :template-uuid      "b31b68ef-cabb-4506-9b77-bc56a8b2fde3"
                                          :template_variables #js {:company_info_name "Auth",
                                                                   :name user-name}
                                          :category           "Welcome email verification"})
     (.then (fn [res]
              (js/console.log "Welcome email sent succefully" res)))
     (.catch (fn [err]
               (js/console.log "Failed to send welcome email" err))))))