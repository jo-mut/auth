(ns frontend.subs
  (:require 
   [re-frame.core :as rf]))

(rf/reg-sub
 :get-auth-data
 (fn [db _]
   (:auth db)))