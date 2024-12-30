goog.provide('backend.server');
backend.server.app = shadow.js.shim.module$express();
backend.server.setup_routes = (function backend$server$setup_routes(){
return backend.server.app.get("/",(function (req,res){
return res.send("Hello, world!");
}));
});
backend.server.listening = (function backend$server$listening(){
backend.server.setup_routes();

return backend.server.app.listen((3000),(function (){
return console.log("Server listening on port 3000");
}));
});

//# sourceMappingURL=backend.server.js.map
