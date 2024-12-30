goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16049){
var map__16050 = p__16049;
var map__16050__$1 = cljs.core.__destructure_map(map__16050);
var runtime = map__16050__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16050__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_16379 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_16379)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__16060 = runtime;
var G__16061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_16379);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__16060,G__16061) : shadow.remote.runtime.shared.process.call(null, G__16060,G__16061));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16068,res){
var map__16069 = p__16068;
var map__16069__$1 = cljs.core.__destructure_map(map__16069);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16069__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16069__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16070 = res;
var G__16070__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16070,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16070);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16070__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16070__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16086 = arguments.length;
switch (G__16086) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16094,msg,handlers,timeout_after_ms){
var map__16096 = p__16094;
var map__16096__$1 = cljs.core.__destructure_map(map__16096);
var runtime = map__16096__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___16395 = arguments.length;
var i__5727__auto___16399 = (0);
while(true){
if((i__5727__auto___16399 < len__5726__auto___16395)){
args__5732__auto__.push((arguments[i__5727__auto___16399]));

var G__16400 = (i__5727__auto___16399 + (1));
i__5727__auto___16399 = G__16400;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16107,ev,args){
var map__16108 = p__16107;
var map__16108__$1 = cljs.core.__destructure_map(map__16108);
var runtime = map__16108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16109 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16112 = null;
var count__16113 = (0);
var i__16114 = (0);
while(true){
if((i__16114 < count__16113)){
var ext = chunk__16112.cljs$core$IIndexed$_nth$arity$2(null, i__16114);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16404 = seq__16109;
var G__16405 = chunk__16112;
var G__16406 = count__16113;
var G__16407 = (i__16114 + (1));
seq__16109 = G__16404;
chunk__16112 = G__16405;
count__16113 = G__16406;
i__16114 = G__16407;
continue;
} else {
var G__16408 = seq__16109;
var G__16409 = chunk__16112;
var G__16410 = count__16113;
var G__16411 = (i__16114 + (1));
seq__16109 = G__16408;
chunk__16112 = G__16409;
count__16113 = G__16410;
i__16114 = G__16411;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16109);
if(temp__5804__auto__){
var seq__16109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16109__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16109__$1);
var G__16413 = cljs.core.chunk_rest(seq__16109__$1);
var G__16414 = c__5525__auto__;
var G__16415 = cljs.core.count(c__5525__auto__);
var G__16416 = (0);
seq__16109 = G__16413;
chunk__16112 = G__16414;
count__16113 = G__16415;
i__16114 = G__16416;
continue;
} else {
var ext = cljs.core.first(seq__16109__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16420 = cljs.core.next(seq__16109__$1);
var G__16421 = null;
var G__16422 = (0);
var G__16423 = (0);
seq__16109 = G__16420;
chunk__16112 = G__16421;
count__16113 = G__16422;
i__16114 = G__16423;
continue;
} else {
var G__16424 = cljs.core.next(seq__16109__$1);
var G__16425 = null;
var G__16426 = (0);
var G__16427 = (0);
seq__16109 = G__16424;
chunk__16112 = G__16425;
count__16113 = G__16426;
i__16114 = G__16427;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16097){
var G__16098 = cljs.core.first(seq16097);
var seq16097__$1 = cljs.core.next(seq16097);
var G__16099 = cljs.core.first(seq16097__$1);
var seq16097__$2 = cljs.core.next(seq16097__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16098,G__16099,seq16097__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16150,p__16151){
var map__16152 = p__16150;
var map__16152__$1 = cljs.core.__destructure_map(map__16152);
var runtime = map__16152__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16152__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16153 = p__16151;
var map__16153__$1 = cljs.core.__destructure_map(map__16153);
var msg = map__16153__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16153__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__16154 = cljs.core.deref(state_ref);
var map__16154__$1 = cljs.core.__destructure_map(map__16154);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16154__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16154__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16162,msg){
var map__16163 = p__16162;
var map__16163__$1 = cljs.core.__destructure_map(map__16163);
var runtime = map__16163__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16163__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16174,key,p__16175){
var map__16181 = p__16174;
var map__16181__$1 = cljs.core.__destructure_map(map__16181);
var state = map__16181__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16181__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16182 = p__16175;
var map__16182__$1 = cljs.core.__destructure_map(map__16182);
var spec = map__16182__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16198,key,spec){
var map__16199 = p__16198;
var map__16199__$1 = cljs.core.__destructure_map(map__16199);
var runtime = map__16199__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16199__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16447 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16447 == null)){
} else {
var on_welcome_16448 = temp__5808__auto___16447;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16448.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16448.cljs$core$IFn$_invoke$arity$0() : on_welcome_16448.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16205_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16205_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16209_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16209_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16214_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16214_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16215_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16215_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16217_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16217_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16248,key){
var map__16250 = p__16248;
var map__16250__$1 = cljs.core.__destructure_map(map__16250);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16250__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16251,msg){
var map__16253 = p__16251;
var map__16253__$1 = cljs.core.__destructure_map(map__16253);
var runtime = map__16253__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16253__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16277,p__16278){
var map__16280 = p__16277;
var map__16280__$1 = cljs.core.__destructure_map(map__16280);
var runtime = map__16280__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16280__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16281 = p__16278;
var map__16281__$1 = cljs.core.__destructure_map(map__16281);
var msg = map__16281__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__16286 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16288 = null;
var count__16289 = (0);
var i__16290 = (0);
while(true){
if((i__16290 < count__16289)){
var map__16319 = chunk__16288.cljs$core$IIndexed$_nth$arity$2(null, i__16290);
var map__16319__$1 = cljs.core.__destructure_map(map__16319);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16319__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16449 = seq__16286;
var G__16450 = chunk__16288;
var G__16451 = count__16289;
var G__16452 = (i__16290 + (1));
seq__16286 = G__16449;
chunk__16288 = G__16450;
count__16289 = G__16451;
i__16290 = G__16452;
continue;
} else {
var G__16453 = seq__16286;
var G__16454 = chunk__16288;
var G__16455 = count__16289;
var G__16456 = (i__16290 + (1));
seq__16286 = G__16453;
chunk__16288 = G__16454;
count__16289 = G__16455;
i__16290 = G__16456;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16286);
if(temp__5804__auto__){
var seq__16286__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16286__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16286__$1);
var G__16457 = cljs.core.chunk_rest(seq__16286__$1);
var G__16458 = c__5525__auto__;
var G__16459 = cljs.core.count(c__5525__auto__);
var G__16460 = (0);
seq__16286 = G__16457;
chunk__16288 = G__16458;
count__16289 = G__16459;
i__16290 = G__16460;
continue;
} else {
var map__16324 = cljs.core.first(seq__16286__$1);
var map__16324__$1 = cljs.core.__destructure_map(map__16324);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16324__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16461 = cljs.core.next(seq__16286__$1);
var G__16462 = null;
var G__16463 = (0);
var G__16464 = (0);
seq__16286 = G__16461;
chunk__16288 = G__16462;
count__16289 = G__16463;
i__16290 = G__16464;
continue;
} else {
var G__16465 = cljs.core.next(seq__16286__$1);
var G__16466 = null;
var G__16467 = (0);
var G__16468 = (0);
seq__16286 = G__16465;
chunk__16288 = G__16466;
count__16289 = G__16467;
i__16290 = G__16468;
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
