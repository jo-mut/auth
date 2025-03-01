(ns backend.routes.auth-routes
  (:require ["express" :as express]
            [backend.controllers.auth-controllers :as controllers]))

(def router (.Router express))

(defn setup-routes []
  (.post router "/signup" (controllers/sign-up))
  (.post router "/login" (controllers/login))
  (.post router "/logout" (controllers/logout))
  (.post router "/forgot-password" (controllers/forgot-password))
  (.post router "/verify-email" (controllers/verify-email))
  (.post router "/reset-password:token" (controllers/reset-password))
  router)