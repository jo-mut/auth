(ns backend.models.user-models
  (:require ["mongoose" :as mongoose]))

(def user-schema
  (-> mongoose (.Schema #js {:email {:type "String"
                          :required true
                          :unique true}
                  :password {:type "String"
                             :required true}
                  :name {:type "String"
                         :required true}
                  :lastLogin {:type js/Date
                              :default (fn []
                                         (js/Date.now))}
                  :isVerified {:type "Boolean"
                               :default false}
                  :resetPasswordToken "String"
                  :resetPasswordExpiredAt js/Date
                  :verificationToken "String"
                  :verificationTokenExpiredAt js/Date}
             #js {:timestamps true})))

(def user (-> mongoose (.model "User" user-schema)))