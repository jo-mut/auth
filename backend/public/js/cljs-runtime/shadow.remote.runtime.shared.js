goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18417){
var map__18418 = p__18417;
var map__18418__$1 = cljs.core.__destructure_map(map__18418);
var runtime = map__18418__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18418__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18700 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18700)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18423 = runtime;
var G__18424 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18700);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18423,G__18424) : shadow.remote.runtime.shared.process.call(null, G__18423,G__18424));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18431,res){
var map__18432 = p__18431;
var map__18432__$1 = cljs.core.__destructure_map(map__18432);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18433 = res;
var G__18433__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18433,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18433);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18433__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18433__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18440 = arguments.length;
switch (G__18440) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18458,msg,handlers,timeout_after_ms){
var map__18459 = p__18458;
var map__18459__$1 = cljs.core.__destructure_map(map__18459);
var runtime = map__18459__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18459__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___18704 = arguments.length;
var i__5727__auto___18705 = (0);
while(true){
if((i__5727__auto___18705 < len__5726__auto___18704)){
args__5732__auto__.push((arguments[i__5727__auto___18705]));

var G__18706 = (i__5727__auto___18705 + (1));
i__5727__auto___18705 = G__18706;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18467,ev,args){
var map__18468 = p__18467;
var map__18468__$1 = cljs.core.__destructure_map(map__18468);
var runtime = map__18468__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18468__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18469 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18472 = null;
var count__18473 = (0);
var i__18474 = (0);
while(true){
if((i__18474 < count__18473)){
var ext = chunk__18472.cljs$core$IIndexed$_nth$arity$2(null, i__18474);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18710 = seq__18469;
var G__18711 = chunk__18472;
var G__18712 = count__18473;
var G__18713 = (i__18474 + (1));
seq__18469 = G__18710;
chunk__18472 = G__18711;
count__18473 = G__18712;
i__18474 = G__18713;
continue;
} else {
var G__18714 = seq__18469;
var G__18715 = chunk__18472;
var G__18716 = count__18473;
var G__18717 = (i__18474 + (1));
seq__18469 = G__18714;
chunk__18472 = G__18715;
count__18473 = G__18716;
i__18474 = G__18717;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18469);
if(temp__5804__auto__){
var seq__18469__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18469__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18469__$1);
var G__18718 = cljs.core.chunk_rest(seq__18469__$1);
var G__18719 = c__5525__auto__;
var G__18720 = cljs.core.count(c__5525__auto__);
var G__18721 = (0);
seq__18469 = G__18718;
chunk__18472 = G__18719;
count__18473 = G__18720;
i__18474 = G__18721;
continue;
} else {
var ext = cljs.core.first(seq__18469__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18722 = cljs.core.next(seq__18469__$1);
var G__18723 = null;
var G__18724 = (0);
var G__18725 = (0);
seq__18469 = G__18722;
chunk__18472 = G__18723;
count__18473 = G__18724;
i__18474 = G__18725;
continue;
} else {
var G__18726 = cljs.core.next(seq__18469__$1);
var G__18727 = null;
var G__18728 = (0);
var G__18729 = (0);
seq__18469 = G__18726;
chunk__18472 = G__18727;
count__18473 = G__18728;
i__18474 = G__18729;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18464){
var G__18465 = cljs.core.first(seq18464);
var seq18464__$1 = cljs.core.next(seq18464);
var G__18466 = cljs.core.first(seq18464__$1);
var seq18464__$2 = cljs.core.next(seq18464__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18465,G__18466,seq18464__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18477,p__18478){
var map__18479 = p__18477;
var map__18479__$1 = cljs.core.__destructure_map(map__18479);
var runtime = map__18479__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18479__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18480 = p__18478;
var map__18480__$1 = cljs.core.__destructure_map(map__18480);
var msg = map__18480__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18480__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18481 = cljs.core.deref(state_ref);
var map__18481__$1 = cljs.core.__destructure_map(map__18481);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18599,msg){
var map__18600 = p__18599;
var map__18600__$1 = cljs.core.__destructure_map(map__18600);
var runtime = map__18600__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18600__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18622,key,p__18623){
var map__18625 = p__18622;
var map__18625__$1 = cljs.core.__destructure_map(map__18625);
var state = map__18625__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18625__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18626 = p__18623;
var map__18626__$1 = cljs.core.__destructure_map(map__18626);
var spec = map__18626__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18642,key,spec){
var map__18646 = p__18642;
var map__18646__$1 = cljs.core.__destructure_map(map__18646);
var runtime = map__18646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18730 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18730 == null)){
} else {
var on_welcome_18731 = temp__5808__auto___18730;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18731.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18731.cljs$core$IFn$_invoke$arity$0() : on_welcome_18731.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18656_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18656_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18657_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18657_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18658_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18658_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18659_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18659_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18660_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18660_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18671,key){
var map__18673 = p__18671;
var map__18673__$1 = cljs.core.__destructure_map(map__18673);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18674,msg){
var map__18675 = p__18674;
var map__18675__$1 = cljs.core.__destructure_map(map__18675);
var runtime = map__18675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18676,p__18677){
var map__18678 = p__18676;
var map__18678__$1 = cljs.core.__destructure_map(map__18678);
var runtime = map__18678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18679 = p__18677;
var map__18679__$1 = cljs.core.__destructure_map(map__18679);
var msg = map__18679__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__18680 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18682 = null;
var count__18683 = (0);
var i__18684 = (0);
while(true){
if((i__18684 < count__18683)){
var map__18689 = chunk__18682.cljs$core$IIndexed$_nth$arity$2(null, i__18684);
var map__18689__$1 = cljs.core.__destructure_map(map__18689);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18733 = seq__18680;
var G__18734 = chunk__18682;
var G__18735 = count__18683;
var G__18736 = (i__18684 + (1));
seq__18680 = G__18733;
chunk__18682 = G__18734;
count__18683 = G__18735;
i__18684 = G__18736;
continue;
} else {
var G__18737 = seq__18680;
var G__18738 = chunk__18682;
var G__18739 = count__18683;
var G__18740 = (i__18684 + (1));
seq__18680 = G__18737;
chunk__18682 = G__18738;
count__18683 = G__18739;
i__18684 = G__18740;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18680);
if(temp__5804__auto__){
var seq__18680__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18680__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18680__$1);
var G__18741 = cljs.core.chunk_rest(seq__18680__$1);
var G__18742 = c__5525__auto__;
var G__18743 = cljs.core.count(c__5525__auto__);
var G__18744 = (0);
seq__18680 = G__18741;
chunk__18682 = G__18742;
count__18683 = G__18743;
i__18684 = G__18744;
continue;
} else {
var map__18694 = cljs.core.first(seq__18680__$1);
var map__18694__$1 = cljs.core.__destructure_map(map__18694);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18694__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18745 = cljs.core.next(seq__18680__$1);
var G__18746 = null;
var G__18747 = (0);
var G__18748 = (0);
seq__18680 = G__18745;
chunk__18682 = G__18746;
count__18683 = G__18747;
i__18684 = G__18748;
continue;
} else {
var G__18749 = cljs.core.next(seq__18680__$1);
var G__18750 = null;
var G__18751 = (0);
var G__18752 = (0);
seq__18680 = G__18749;
chunk__18682 = G__18750;
count__18683 = G__18751;
i__18684 = G__18752;
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
