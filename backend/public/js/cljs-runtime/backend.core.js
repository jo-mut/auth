goog.provide('backend.core');
backend.core.start = (function backend$core$start(){
return console.log("stop");
});
backend.core.init = (function backend$core$init(){
return backend.core.start();
});
goog.exportSymbol('backend.core.init', backend.core.init);
backend.core.stop = (function backend$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=backend.core.js.map
