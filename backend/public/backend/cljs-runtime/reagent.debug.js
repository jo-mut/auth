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
var G__10629__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10630__i = 0, G__10630__a = new Array(arguments.length -  0);
while (G__10630__i < G__10630__a.length) {G__10630__a[G__10630__i] = arguments[G__10630__i + 0]; ++G__10630__i;}
  args = new cljs.core.IndexedSeq(G__10630__a,0,null);
} 
return G__10629__delegate.call(this,args);};
G__10629.cljs$lang$maxFixedArity = 0;
G__10629.cljs$lang$applyTo = (function (arglist__10631){
var args = cljs.core.seq(arglist__10631);
return G__10629__delegate(args);
});
G__10629.cljs$core$IFn$_invoke$arity$variadic = G__10629__delegate;
return G__10629;
})()
);

(o.error = (function() { 
var G__10632__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10633__i = 0, G__10633__a = new Array(arguments.length -  0);
while (G__10633__i < G__10633__a.length) {G__10633__a[G__10633__i] = arguments[G__10633__i + 0]; ++G__10633__i;}
  args = new cljs.core.IndexedSeq(G__10633__a,0,null);
} 
return G__10632__delegate.call(this,args);};
G__10632.cljs$lang$maxFixedArity = 0;
G__10632.cljs$lang$applyTo = (function (arglist__10634){
var args = cljs.core.seq(arglist__10634);
return G__10632__delegate(args);
});
G__10632.cljs$core$IFn$_invoke$arity$variadic = G__10632__delegate;
return G__10632;
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
