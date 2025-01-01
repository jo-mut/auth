goog.provide('backend.server');
backend.server.app = shadow.js.shim.module$express();
backend.server.app.use("/api/auth",backend.routes.auth_route.setup_routes());
backend.server.init_server = (function backend$server$init_server(){
return backend.server.app.listen((3000),(function (){
backend.db.connect_db.connect();

return console.log("Server listening on port 3000");
}));
});

//# sourceMappingURL=backend.server.js.map
