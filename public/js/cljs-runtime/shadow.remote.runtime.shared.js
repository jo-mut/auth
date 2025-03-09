goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15665){
var map__15666 = p__15665;
var map__15666__$1 = cljs.core.__destructure_map(map__15666);
var runtime = map__15666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15878 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15878)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__15677 = runtime;
var G__15678 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15878);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__15677,G__15678) : shadow.remote.runtime.shared.process.call(null, G__15677,G__15678));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15681,res){
var map__15682 = p__15681;
var map__15682__$1 = cljs.core.__destructure_map(map__15682);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15682__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15682__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15687 = res;
var G__15687__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15687,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15687);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15687__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15687__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15692 = arguments.length;
switch (G__15692) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15698,msg,handlers,timeout_after_ms){
var map__15699 = p__15698;
var map__15699__$1 = cljs.core.__destructure_map(map__15699);
var runtime = map__15699__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15699__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15893 = arguments.length;
var i__5727__auto___15894 = (0);
while(true){
if((i__5727__auto___15894 < len__5726__auto___15893)){
args__5732__auto__.push((arguments[i__5727__auto___15894]));

var G__15895 = (i__5727__auto___15894 + (1));
i__5727__auto___15894 = G__15895;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15728,ev,args){
var map__15729 = p__15728;
var map__15729__$1 = cljs.core.__destructure_map(map__15729);
var runtime = map__15729__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15730 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15733 = null;
var count__15734 = (0);
var i__15735 = (0);
while(true){
if((i__15735 < count__15734)){
var ext = chunk__15733.cljs$core$IIndexed$_nth$arity$2(null, i__15735);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15904 = seq__15730;
var G__15905 = chunk__15733;
var G__15906 = count__15734;
var G__15907 = (i__15735 + (1));
seq__15730 = G__15904;
chunk__15733 = G__15905;
count__15734 = G__15906;
i__15735 = G__15907;
continue;
} else {
var G__15909 = seq__15730;
var G__15910 = chunk__15733;
var G__15911 = count__15734;
var G__15912 = (i__15735 + (1));
seq__15730 = G__15909;
chunk__15733 = G__15910;
count__15734 = G__15911;
i__15735 = G__15912;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15730);
if(temp__5804__auto__){
var seq__15730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15730__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15730__$1);
var G__15913 = cljs.core.chunk_rest(seq__15730__$1);
var G__15914 = c__5525__auto__;
var G__15915 = cljs.core.count(c__5525__auto__);
var G__15916 = (0);
seq__15730 = G__15913;
chunk__15733 = G__15914;
count__15734 = G__15915;
i__15735 = G__15916;
continue;
} else {
var ext = cljs.core.first(seq__15730__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15918 = cljs.core.next(seq__15730__$1);
var G__15919 = null;
var G__15920 = (0);
var G__15921 = (0);
seq__15730 = G__15918;
chunk__15733 = G__15919;
count__15734 = G__15920;
i__15735 = G__15921;
continue;
} else {
var G__15926 = cljs.core.next(seq__15730__$1);
var G__15927 = null;
var G__15928 = (0);
var G__15929 = (0);
seq__15730 = G__15926;
chunk__15733 = G__15927;
count__15734 = G__15928;
i__15735 = G__15929;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15714){
var G__15716 = cljs.core.first(seq15714);
var seq15714__$1 = cljs.core.next(seq15714);
var G__15717 = cljs.core.first(seq15714__$1);
var seq15714__$2 = cljs.core.next(seq15714__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15716,G__15717,seq15714__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15768,p__15769){
var map__15770 = p__15768;
var map__15770__$1 = cljs.core.__destructure_map(map__15770);
var runtime = map__15770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15771 = p__15769;
var map__15771__$1 = cljs.core.__destructure_map(map__15771);
var msg = map__15771__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15771__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15772 = cljs.core.deref(state_ref);
var map__15772__$1 = cljs.core.__destructure_map(map__15772);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15772__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15772__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15778,msg){
var map__15779 = p__15778;
var map__15779__$1 = cljs.core.__destructure_map(map__15779);
var runtime = map__15779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15787,key,p__15788){
var map__15790 = p__15787;
var map__15790__$1 = cljs.core.__destructure_map(map__15790);
var state = map__15790__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15790__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15791 = p__15788;
var map__15791__$1 = cljs.core.__destructure_map(map__15791);
var spec = map__15791__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15791__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15791__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15800,key,spec){
var map__15801 = p__15800;
var map__15801__$1 = cljs.core.__destructure_map(map__15801);
var runtime = map__15801__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16030 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16030 == null)){
} else {
var on_welcome_16031 = temp__5808__auto___16030;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16031.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16031.cljs$core$IFn$_invoke$arity$0() : on_welcome_16031.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15805_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15805_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15806_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15806_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15807_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15807_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15809_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15809_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15811_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15811_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15830,key){
var map__15831 = p__15830;
var map__15831__$1 = cljs.core.__destructure_map(map__15831);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15832,msg){
var map__15833 = p__15832;
var map__15833__$1 = cljs.core.__destructure_map(map__15833);
var runtime = map__15833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15835,p__15836){
var map__15837 = p__15835;
var map__15837__$1 = cljs.core.__destructure_map(map__15837);
var runtime = map__15837__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15838 = p__15836;
var map__15838__$1 = cljs.core.__destructure_map(map__15838);
var msg = map__15838__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15838__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15838__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15843 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15845 = null;
var count__15846 = (0);
var i__15847 = (0);
while(true){
if((i__15847 < count__15846)){
var map__15856 = chunk__15845.cljs$core$IIndexed$_nth$arity$2(null, i__15847);
var map__15856__$1 = cljs.core.__destructure_map(map__15856);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16039 = seq__15843;
var G__16040 = chunk__15845;
var G__16041 = count__15846;
var G__16042 = (i__15847 + (1));
seq__15843 = G__16039;
chunk__15845 = G__16040;
count__15846 = G__16041;
i__15847 = G__16042;
continue;
} else {
var G__16043 = seq__15843;
var G__16044 = chunk__15845;
var G__16045 = count__15846;
var G__16046 = (i__15847 + (1));
seq__15843 = G__16043;
chunk__15845 = G__16044;
count__15846 = G__16045;
i__15847 = G__16046;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15843);
if(temp__5804__auto__){
var seq__15843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15843__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15843__$1);
var G__16047 = cljs.core.chunk_rest(seq__15843__$1);
var G__16048 = c__5525__auto__;
var G__16049 = cljs.core.count(c__5525__auto__);
var G__16050 = (0);
seq__15843 = G__16047;
chunk__15845 = G__16048;
count__15846 = G__16049;
i__15847 = G__16050;
continue;
} else {
var map__15864 = cljs.core.first(seq__15843__$1);
var map__15864__$1 = cljs.core.__destructure_map(map__15864);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15864__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16051 = cljs.core.next(seq__15843__$1);
var G__16052 = null;
var G__16053 = (0);
var G__16054 = (0);
seq__15843 = G__16051;
chunk__15845 = G__16052;
count__15846 = G__16053;
i__15847 = G__16054;
continue;
} else {
var G__16055 = cljs.core.next(seq__15843__$1);
var G__16056 = null;
var G__16057 = (0);
var G__16058 = (0);
seq__15843 = G__16055;
chunk__15845 = G__16056;
count__15846 = G__16057;
i__15847 = G__16058;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
