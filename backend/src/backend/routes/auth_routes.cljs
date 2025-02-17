(ns backend.routes.auth-routes
  (:require ["express" :as express]
            ["bcryptjs" :as bcryptjs]
            ["jsonwebtoken" :as jwt]
            [promesa.core :as p]
            [backend.models.user-models :as models]
            [backend.controllers.auth-controllers :as controllers]))

(def router (.Router express))

(defn setup-routes []
  (.post router "/signup" (controllers/sign-up))
  (.post router "/login" (controllers/login))
  (.post router "/logout" (controllers/logout))
  (.post router "/verify-email" (controllers/verify-email))
  router)