goog.provide('backend.server');
backend.server.app = shadow.js.shim.module$express();
backend.server.app.use(shadow.js.shim.module$cors(({"origin": "http://localhost:5173", "methods": "GET,POST,PUT,DELETE", "credentials": true})));
backend.server.app.use(shadow.js.shim.module$express.json());
backend.server.app.use(shadow.js.shim.module$cookie_parser());
backend.server.app.use("/api/auth",backend.routes.auth_routes.setup_routes());
backend.server.listening = (function backend$server$listening(){
return backend.server.app.listen((3000),(function (){
backend.db.connect_db.connect();

return console.log("Server listening on port 3000");
}));
});

//# sourceMappingURL=backend.server.js.map
