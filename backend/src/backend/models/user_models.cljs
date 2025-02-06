(ns backend.models.user-models
  (:require ["mongoose" :as mongoose]))


(def user-schema
  (-> mongoose (.Schema #js {:email #js {:type     js/String
                                         :required true
                                         :unique   true}
                             :password #js {:type     js/String
                                            :required true}
                             :name #js {:type     js/String
                                        :required true}
                             :lastLogin #js {:type    js/Date
                                             :default js/Date.now}
                             :isVerified #js {:type    js/Boolean
                                              :default false}
                             :resetPasswordToken         #js {:type     js/String}
                             :resetPasswordExpiredAt     #js {:type     js/Date}
                             :verificationToken          #js {:type     js/String}
                             :verificationTokenExpiredAt #js {:type     js/Date}}
                        #js {:timestamps true})))

(def user (-> mongoose (.model "User" user-schema)))