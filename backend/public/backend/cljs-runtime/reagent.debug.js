goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__17089__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17090__i = 0, G__17090__a = new Array(arguments.length -  0);
while (G__17090__i < G__17090__a.length) {G__17090__a[G__17090__i] = arguments[G__17090__i + 0]; ++G__17090__i;}
  args = new cljs.core.IndexedSeq(G__17090__a,0,null);
} 
return G__17089__delegate.call(this,args);};
G__17089.cljs$lang$maxFixedArity = 0;
G__17089.cljs$lang$applyTo = (function (arglist__17091){
var args = cljs.core.seq(arglist__17091);
return G__17089__delegate(args);
});
G__17089.cljs$core$IFn$_invoke$arity$variadic = G__17089__delegate;
return G__17089;
})()
);

(o.error = (function() { 
var G__17092__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__17092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17093__i = 0, G__17093__a = new Array(arguments.length -  0);
while (G__17093__i < G__17093__a.length) {G__17093__a[G__17093__i] = arguments[G__17093__i + 0]; ++G__17093__i;}
  args = new cljs.core.IndexedSeq(G__17093__a,0,null);
} 
return G__17092__delegate.call(this,args);};
G__17092.cljs$lang$maxFixedArity = 0;
G__17092.cljs$lang$applyTo = (function (arglist__17094){
var args = cljs.core.seq(arglist__17094);
return G__17092__delegate(args);
});
G__17092.cljs$core$IFn$_invoke$arity$variadic = G__17092__delegate;
return G__17092;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
