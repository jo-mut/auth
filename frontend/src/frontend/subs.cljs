(ns frontend.subs
  (:require 
   [re-frame.core :as rf]))

(rf/reg-sub
 :messages
 (fn [db _]
   (:messages db)))