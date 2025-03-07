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

(defn send-password-reset-email
  [email reset-url]
  (let [recipient #js [#js {:email email}]]
    (->
     (.send m-client/mailtrap-client #js {:from    m-client/sender
                                          :to      recipient
                                          :subject "Reset your password!"
                                          :html    (templates/password-reset-request-template reset-url)
                                          :category "Password Reset"})
     (.then (fn [res]
              (js/console.log "Password reset email sent successfully" res)))
     (.catch (fn [err]
               (js/console.log "Error sending password reset email" err))))))


(defn send-reset-password-success-email
  [email]
  (let [recipient #js [#js {:email email}]]
    (->
     (.send m-client/mailtrap-client #js {:from    m-client/sender
                                          :to      recipient
                                          :subject "Password Reset Successful"
                                          :html    (templates/password-reset-success-template)
                                          :category "Password Reset"})
     (.then (fn [res]
              (js/console.log "Password reset success email sent successfully" res)))
     (.catch (fn [err]
               (js/console.log "Error sending password reset success email" err))))))