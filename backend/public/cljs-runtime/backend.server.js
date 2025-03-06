goog.provide('backend.server');
backend.server.app = shadow.js.shim.module$express();
backend.server.port = (function (){var or__5002__auto__ = backend.utils.core.get_env("PORT");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (3000);
}
})();
backend.server.dirname = shadow.js.shim.module$path.resolve();
backend.server.app.use(shadow.js.shim.module$cors(({"origin": "http://localhost:5173", "methods": "GET,POST,PUT,DELETE", "credentials": true})));
backend.server.app.use(shadow.js.shim.module$express.json());
backend.server.app.use(shadow.js.shim.module$cookie_parser());
backend.server.app.use("/api/auth",backend.routes.auth_routes.setup_routes());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(backend.utils.core.get_env("NODE_ENV"),"production")){
backend.server.app.use(shadow.js.shim.module$express.json(shadow.js.shim.module$path.join(backend.server.dirname,"/frontend/dist")));

backend.server.app.get("*",(function (req,res){
return res.sendFile(shadow.js.shim.module$path.resolve("frontend","dist","index.html"));
}));
} else {
}
backend.server.listening = (function backend$server$listening(){
return backend.server.app.listen(backend.server.port,(function (){
backend.db.connect_db.connect();

return console.log("Server listening on port 3000");
}));
});

//# sourceMappingURL=backend.server.js.map
