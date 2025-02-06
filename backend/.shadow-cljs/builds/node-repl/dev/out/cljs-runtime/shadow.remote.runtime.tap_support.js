goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17392,p__17393){
var map__17394 = p__17392;
var map__17394__$1 = cljs.core.__destructure_map(map__17394);
var svc = map__17394__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17395 = p__17393;
var map__17395__$1 = cljs.core.__destructure_map(map__17395);
var msg = map__17395__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17395__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17395__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17395__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17395__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17401,p__17402){
var map__17404 = p__17401;
var map__17404__$1 = cljs.core.__destructure_map(map__17404);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17405 = p__17402;
var map__17405__$1 = cljs.core.__destructure_map(map__17405);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17405__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17413,p__17414){
var map__17415 = p__17413;
var map__17415__$1 = cljs.core.__destructure_map(map__17415);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17416 = p__17414;
var map__17416__$1 = cljs.core.__destructure_map(map__17416);
var msg = map__17416__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17416__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17420,tid){
var map__17421 = p__17420;
var map__17421__$1 = cljs.core.__destructure_map(map__17421);
var svc = map__17421__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17421__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17430 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17431 = null;
var count__17432 = (0);
var i__17433 = (0);
while(true){
if((i__17433 < count__17432)){
var vec__17444 = chunk__17431.cljs$core$IIndexed$_nth$arity$2(null, i__17433);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17444,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17444,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17458 = seq__17430;
var G__17459 = chunk__17431;
var G__17460 = count__17432;
var G__17461 = (i__17433 + (1));
seq__17430 = G__17458;
chunk__17431 = G__17459;
count__17432 = G__17460;
i__17433 = G__17461;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17430);
if(temp__5804__auto__){
var seq__17430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17430__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17430__$1);
var G__17462 = cljs.core.chunk_rest(seq__17430__$1);
var G__17463 = c__5525__auto__;
var G__17464 = cljs.core.count(c__5525__auto__);
var G__17465 = (0);
seq__17430 = G__17462;
chunk__17431 = G__17463;
count__17432 = G__17464;
i__17433 = G__17465;
continue;
} else {
var vec__17449 = cljs.core.first(seq__17430__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17449,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17449,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17471 = cljs.core.next(seq__17430__$1);
var G__17472 = null;
var G__17473 = (0);
var G__17474 = (0);
seq__17430 = G__17471;
chunk__17431 = G__17472;
count__17432 = G__17473;
i__17433 = G__17474;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17422_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17422_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17423_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17423_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17424_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17424_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17425_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17425_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17452){
var map__17453 = p__17452;
var map__17453__$1 = cljs.core.__destructure_map(map__17453);
var svc = map__17453__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17453__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
