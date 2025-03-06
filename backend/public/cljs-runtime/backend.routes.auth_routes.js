goog.provide('backend.routes.auth_routes');
backend.routes.auth_routes.router = shadow.js.shim.module$express.Router();
backend.routes.auth_routes.setup_routes = (function backend$routes$auth_routes$setup_routes(){
backend.routes.auth_routes.router.get("/check-auth",backend.middleware.verify_token.verify_token,backend.controllers.auth_controllers.check_auth());

backend.routes.auth_routes.router.post("/signup",backend.controllers.auth_controllers.sign_up());

backend.routes.auth_routes.router.post("/login",backend.controllers.auth_controllers.login());

backend.routes.auth_routes.router.post("/logout",backend.controllers.auth_controllers.logout());

backend.routes.auth_routes.router.post("/forgot-password",backend.controllers.auth_controllers.forgot_password());

backend.routes.auth_routes.router.post("/verify-email",backend.controllers.auth_controllers.verify_email());

backend.routes.auth_routes.router.post("/reset-password/:token",backend.controllers.auth_controllers.reset_password());

return backend.routes.auth_routes.router;
});

//# sourceMappingURL=backend.routes.auth_routes.js.map
