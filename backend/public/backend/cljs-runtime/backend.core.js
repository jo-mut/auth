goog.provide('backend.core');
backend.core.get_env = (function backend$core$get_env(){
return (process.env["MONGO_URI"]);
});
backend.core.start = (function backend$core$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Server listening"], 0));

return backend.server.listening();
});
backend.core.init = (function backend$core$init(){
console.log("enviroment variables",backend.core.get_env());

return backend.core.start();
});
goog.exportSymbol('backend.core.init', backend.core.init);
backend.core.stop = (function backend$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=backend.core.js.map
