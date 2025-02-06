goog.provide('backend.routes.auth_routes');
backend.routes.auth_routes.router = shadow.js.shim.module$express.Router();
backend.routes.auth_routes.setup_routes = (function backend$routes$auth_routes$setup_routes(){
backend.routes.auth_routes.router.post("/signup",backend.controllers.auth_controllers.sign_up());

backend.routes.auth_routes.router.post("/login",backend.controllers.auth_controllers.login());

backend.routes.auth_routes.router.post("/logout",backend.controllers.auth_controllers.logout());

return backend.routes.auth_routes.router;
});

//# sourceMappingURL=backend.routes.auth_routes.js.map
