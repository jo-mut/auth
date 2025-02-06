goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15941){
var map__15942 = p__15941;
var map__15942__$1 = cljs.core.__destructure_map(map__15942);
var runtime = map__15942__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15942__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_16105 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_16105)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__15943 = runtime;
var G__15944 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_16105);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__15943,G__15944) : shadow.remote.runtime.shared.process.call(null, G__15943,G__15944));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15947,res){
var map__15948 = p__15947;
var map__15948__$1 = cljs.core.__destructure_map(map__15948);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15948__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15948__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15953 = res;
var G__15953__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15953,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15953);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15953__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15953__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15960 = arguments.length;
switch (G__15960) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15962,msg,handlers,timeout_after_ms){
var map__15963 = p__15962;
var map__15963__$1 = cljs.core.__destructure_map(map__15963);
var runtime = map__15963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___16120 = arguments.length;
var i__5727__auto___16121 = (0);
while(true){
if((i__5727__auto___16121 < len__5726__auto___16120)){
args__5732__auto__.push((arguments[i__5727__auto___16121]));

var G__16123 = (i__5727__auto___16121 + (1));
i__5727__auto___16121 = G__16123;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15974,ev,args){
var map__15975 = p__15974;
var map__15975__$1 = cljs.core.__destructure_map(map__15975);
var runtime = map__15975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15976 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15979 = null;
var count__15980 = (0);
var i__15981 = (0);
while(true){
if((i__15981 < count__15980)){
var ext = chunk__15979.cljs$core$IIndexed$_nth$arity$2(null, i__15981);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16125 = seq__15976;
var G__16126 = chunk__15979;
var G__16127 = count__15980;
var G__16128 = (i__15981 + (1));
seq__15976 = G__16125;
chunk__15979 = G__16126;
count__15980 = G__16127;
i__15981 = G__16128;
continue;
} else {
var G__16129 = seq__15976;
var G__16130 = chunk__15979;
var G__16131 = count__15980;
var G__16132 = (i__15981 + (1));
seq__15976 = G__16129;
chunk__15979 = G__16130;
count__15980 = G__16131;
i__15981 = G__16132;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15976);
if(temp__5804__auto__){
var seq__15976__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15976__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15976__$1);
var G__16133 = cljs.core.chunk_rest(seq__15976__$1);
var G__16134 = c__5525__auto__;
var G__16135 = cljs.core.count(c__5525__auto__);
var G__16136 = (0);
seq__15976 = G__16133;
chunk__15979 = G__16134;
count__15980 = G__16135;
i__15981 = G__16136;
continue;
} else {
var ext = cljs.core.first(seq__15976__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16137 = cljs.core.next(seq__15976__$1);
var G__16138 = null;
var G__16139 = (0);
var G__16140 = (0);
seq__15976 = G__16137;
chunk__15979 = G__16138;
count__15980 = G__16139;
i__15981 = G__16140;
continue;
} else {
var G__16141 = cljs.core.next(seq__15976__$1);
var G__16142 = null;
var G__16143 = (0);
var G__16144 = (0);
seq__15976 = G__16141;
chunk__15979 = G__16142;
count__15980 = G__16143;
i__15981 = G__16144;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15970){
var G__15971 = cljs.core.first(seq15970);
var seq15970__$1 = cljs.core.next(seq15970);
var G__15972 = cljs.core.first(seq15970__$1);
var seq15970__$2 = cljs.core.next(seq15970__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15971,G__15972,seq15970__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15985,p__15986){
var map__15987 = p__15985;
var map__15987__$1 = cljs.core.__destructure_map(map__15987);
var runtime = map__15987__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15987__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15988 = p__15986;
var map__15988__$1 = cljs.core.__destructure_map(map__15988);
var msg = map__15988__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15988__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__15989 = cljs.core.deref(state_ref);
var map__15989__$1 = cljs.core.__destructure_map(map__15989);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15989__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15989__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15990,msg){
var map__15991 = p__15990;
var map__15991__$1 = cljs.core.__destructure_map(map__15991);
var runtime = map__15991__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__15992,key,p__15993){
var map__15994 = p__15992;
var map__15994__$1 = cljs.core.__destructure_map(map__15994);
var state = map__15994__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15994__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__15995 = p__15993;
var map__15995__$1 = cljs.core.__destructure_map(map__15995);
var spec = map__15995__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15995__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15995__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16000,key,spec){
var map__16001 = p__16000;
var map__16001__$1 = cljs.core.__destructure_map(map__16001);
var runtime = map__16001__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16001__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___16159 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___16159 == null)){
} else {
var on_welcome_16160 = temp__5808__auto___16159;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_16160.cljs$core$IFn$_invoke$arity$0 ? on_welcome_16160.cljs$core$IFn$_invoke$arity$0() : on_welcome_16160.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16002_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16002_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16005_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16005_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16006_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16006_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16007_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16007_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16008_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16008_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16026,key){
var map__16030 = p__16026;
var map__16030__$1 = cljs.core.__destructure_map(map__16030);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16030__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16047,msg){
var map__16048 = p__16047;
var map__16048__$1 = cljs.core.__destructure_map(map__16048);
var runtime = map__16048__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16048__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16065,p__16066){
var map__16067 = p__16065;
var map__16067__$1 = cljs.core.__destructure_map(map__16067);
var runtime = map__16067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16068 = p__16066;
var map__16068__$1 = cljs.core.__destructure_map(map__16068);
var msg = map__16068__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__16077 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16079 = null;
var count__16080 = (0);
var i__16081 = (0);
while(true){
if((i__16081 < count__16080)){
var map__16093 = chunk__16079.cljs$core$IIndexed$_nth$arity$2(null, i__16081);
var map__16093__$1 = cljs.core.__destructure_map(map__16093);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16093__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16163 = seq__16077;
var G__16164 = chunk__16079;
var G__16165 = count__16080;
var G__16166 = (i__16081 + (1));
seq__16077 = G__16163;
chunk__16079 = G__16164;
count__16080 = G__16165;
i__16081 = G__16166;
continue;
} else {
var G__16167 = seq__16077;
var G__16168 = chunk__16079;
var G__16169 = count__16080;
var G__16170 = (i__16081 + (1));
seq__16077 = G__16167;
chunk__16079 = G__16168;
count__16080 = G__16169;
i__16081 = G__16170;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16077);
if(temp__5804__auto__){
var seq__16077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16077__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16077__$1);
var G__16171 = cljs.core.chunk_rest(seq__16077__$1);
var G__16172 = c__5525__auto__;
var G__16173 = cljs.core.count(c__5525__auto__);
var G__16174 = (0);
seq__16077 = G__16171;
chunk__16079 = G__16172;
count__16080 = G__16173;
i__16081 = G__16174;
continue;
} else {
var map__16094 = cljs.core.first(seq__16077__$1);
var map__16094__$1 = cljs.core.__destructure_map(map__16094);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16094__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__16175 = cljs.core.next(seq__16077__$1);
var G__16176 = null;
var G__16177 = (0);
var G__16178 = (0);
seq__16077 = G__16175;
chunk__16079 = G__16176;
count__16080 = G__16177;
i__16081 = G__16178;
continue;
} else {
var G__16179 = cljs.core.next(seq__16077__$1);
var G__16180 = null;
var G__16181 = (0);
var G__16182 = (0);
seq__16077 = G__16179;
chunk__16079 = G__16180;
count__16080 = G__16181;
i__16081 = G__16182;
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
