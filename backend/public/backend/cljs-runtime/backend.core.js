goog.provide('backend.core');
backend.core.start = (function backend$core$start(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Server listening"], 0));

return backend.server.init_server();
});
backend.core.init = (function backend$core$init(){
return backend.core.start();
});
goog.exportSymbol('backend.core.init', backend.core.init);
backend.core.stop = (function backend$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=backend.core.js.map
