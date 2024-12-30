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
var G__22414__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22415__i = 0, G__22415__a = new Array(arguments.length -  0);
while (G__22415__i < G__22415__a.length) {G__22415__a[G__22415__i] = arguments[G__22415__i + 0]; ++G__22415__i;}
  args = new cljs.core.IndexedSeq(G__22415__a,0,null);
} 
return G__22414__delegate.call(this,args);};
G__22414.cljs$lang$maxFixedArity = 0;
G__22414.cljs$lang$applyTo = (function (arglist__22416){
var args = cljs.core.seq(arglist__22416);
return G__22414__delegate(args);
});
G__22414.cljs$core$IFn$_invoke$arity$variadic = G__22414__delegate;
return G__22414;
})()
);

(o.error = (function() { 
var G__22418__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22420__i = 0, G__22420__a = new Array(arguments.length -  0);
while (G__22420__i < G__22420__a.length) {G__22420__a[G__22420__i] = arguments[G__22420__i + 0]; ++G__22420__i;}
  args = new cljs.core.IndexedSeq(G__22420__a,0,null);
} 
return G__22418__delegate.call(this,args);};
G__22418.cljs$lang$maxFixedArity = 0;
G__22418.cljs$lang$applyTo = (function (arglist__22421){
var args = cljs.core.seq(arglist__22421);
return G__22418__delegate(args);
});
G__22418.cljs$core$IFn$_invoke$arity$variadic = G__22418__delegate;
return G__22418;
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
