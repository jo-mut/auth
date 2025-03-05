(ns frontend.events
  (:require [re-frame.core :as rf]))

(def app-db {:auth {:user            nil
                    :authenticated?  false
                    :error           nil
                    :loading?        false
                    :checkingAuth?   true}})

(rf/reg-event-fx
 :init-app-db
 (fn []
   {:db app-db}))

(rf/reg-event-fx
 :save-auth-response
 (fn [{:keys [db]} [_ auth-object]]
   {:db (-> db
            (assoc-in [:auth :user] (:user auth-object))
            (assoc-in [:auth :loading?] (:loading? auth-object))
            (assoc-in [:auth :authenticated?] (:authenticated? auth-object)))}))

(rf/reg-event-fx
 :authentication-error
 (fn [{:keys [db]} [_ error]]
   {:db (assoc-in db [:auth :error] error)}))

(rf/reg-event-fx
 :update-loading-state
 (fn [{:keys [db]} [_ loading?]]
   {:db (assoc-in db [:auth :loading?] loading?)}))