goog.provide('backend.routes.auth_route');
backend.routes.auth_route.router = shadow.js.shim.module$express.Router();
backend.routes.auth_route.setup_routes = (function backend$routes$auth_route$setup_routes(){
backend.routes.auth_route.router.get("/",(function (req,res){
return res.send("Home!");
}));

backend.routes.auth_route.router.get("/signup",backend.controllers.auth_controllers.sign_up());

backend.routes.auth_route.router.get("/login",backend.controllers.auth_controllers.login());

backend.routes.auth_route.router.get("/logout",backend.controllers.auth_controllers.logout());

return backend.routes.auth_route.router;
});

//# sourceMappingURL=backend.routes.auth_route.js.map
