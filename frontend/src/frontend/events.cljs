(ns frontend.events
  (:require [re-frame.core :as rf]))

(def app-db {:auth {:user            nil
                    :authenticated?  false
                    :error           nil
                    :loading?        false
                    :checking-auth?  true}})

(rf/reg-event-fx
 :init-app-db
 (fn []
   {:db app-db}))

(rf/reg-event-fx
 :save-auth-response
 (fn [{:keys [db]} [_ auth-object]]
   {:db (update-in db [:auth] merge auth-object)}))

(rf/reg-event-fx
 :authentication-error
 (fn [{:keys [db]} [_ error]]
   {:db (update-in db [:auth :error] error)}))

(rf/reg-event-fx
 :checking-auth
 (fn [{:keys [db]} [_ error]]
   {:db (update-in db [:auth :checking-auth?] error)}))

(rf/reg-event-fx
 :update-loading-state
 (fn [{:keys [db]} [_ loading?]]
   {:db (update-in db [:auth :loading?] loading?)}))