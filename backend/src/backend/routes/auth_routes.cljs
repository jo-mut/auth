(ns backend.routes.auth-routes
  (:require
   ["express" :as express]
   [backend.middleware.verify-token :as middlewares]
   [backend.controllers.auth-controllers :as controllers]))

(def router (.Router express))

(defn setup-routes []
  (.get router "/check-auth" middlewares/verify-token (controllers/check-auth))
  (.post router "/signup" (controllers/sign-up))
  (.post router "/login" (controllers/login))
  (.post router "/logout" (controllers/logout))
  (.post router "/forgot-password" (controllers/forgot-password))
  (.post router "/verify-email" (controllers/verify-email))
  (.post router "/reset-password/:token" (controllers/reset-password))
  router)