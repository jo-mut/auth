(ns backend.routes.auth-route
  (:require ["express" :as express]
            [backend.controllers.auth-controllers :as controllers]))

(def router (.Router express))

(defn setup-routes []
  (.get router "/" (fn [req res]
                     (.send res "Home!")))
  (.get router "/signup" (controllers/sign-up))
  (.get router "/login" (controllers/login))
  (.get router "/logout" (controllers/logout))
  router)