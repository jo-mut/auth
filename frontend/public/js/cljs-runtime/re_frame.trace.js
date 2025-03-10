goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22696){
var map__22697 = p__22696;
var map__22697__$1 = cljs.core.__destructure_map(map__22697);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22697__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22699_22730 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22700_22731 = null;
var count__22701_22732 = (0);
var i__22702_22733 = (0);
while(true){
if((i__22702_22733 < count__22701_22732)){
var vec__22713_22734 = chunk__22700_22731.cljs$core$IIndexed$_nth$arity$2(null, i__22702_22733);
var k_22735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713_22734,(0),null);
var cb_22736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713_22734,(1),null);
try{var G__22717_22737 = cljs.core.deref(re_frame.trace.traces);
(cb_22736.cljs$core$IFn$_invoke$arity$1 ? cb_22736.cljs$core$IFn$_invoke$arity$1(G__22717_22737) : cb_22736.call(null, G__22717_22737));
}catch (e22716){var e_22738 = e22716;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22735,"while storing",cljs.core.deref(re_frame.trace.traces),e_22738], 0));
}

var G__22739 = seq__22699_22730;
var G__22740 = chunk__22700_22731;
var G__22741 = count__22701_22732;
var G__22742 = (i__22702_22733 + (1));
seq__22699_22730 = G__22739;
chunk__22700_22731 = G__22740;
count__22701_22732 = G__22741;
i__22702_22733 = G__22742;
continue;
} else {
var temp__5804__auto___22743 = cljs.core.seq(seq__22699_22730);
if(temp__5804__auto___22743){
var seq__22699_22744__$1 = temp__5804__auto___22743;
if(cljs.core.chunked_seq_QMARK_(seq__22699_22744__$1)){
var c__5525__auto___22745 = cljs.core.chunk_first(seq__22699_22744__$1);
var G__22746 = cljs.core.chunk_rest(seq__22699_22744__$1);
var G__22747 = c__5525__auto___22745;
var G__22748 = cljs.core.count(c__5525__auto___22745);
var G__22749 = (0);
seq__22699_22730 = G__22746;
chunk__22700_22731 = G__22747;
count__22701_22732 = G__22748;
i__22702_22733 = G__22749;
continue;
} else {
var vec__22719_22750 = cljs.core.first(seq__22699_22744__$1);
var k_22751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22719_22750,(0),null);
var cb_22752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22719_22750,(1),null);
try{var G__22724_22753 = cljs.core.deref(re_frame.trace.traces);
(cb_22752.cljs$core$IFn$_invoke$arity$1 ? cb_22752.cljs$core$IFn$_invoke$arity$1(G__22724_22753) : cb_22752.call(null, G__22724_22753));
}catch (e22722){var e_22754 = e22722;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22751,"while storing",cljs.core.deref(re_frame.trace.traces),e_22754], 0));
}

var G__22755 = cljs.core.next(seq__22699_22744__$1);
var G__22756 = null;
var G__22757 = (0);
var G__22758 = (0);
seq__22699_22730 = G__22755;
chunk__22700_22731 = G__22756;
count__22701_22732 = G__22757;
i__22702_22733 = G__22758;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
