goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22442,p__22443){
var map__22444 = p__22442;
var map__22444__$1 = cljs.core.__destructure_map(map__22444);
var svc = map__22444__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22444__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22444__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22444__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22445 = p__22443;
var map__22445__$1 = cljs.core.__destructure_map(map__22445);
var msg = map__22445__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22445__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22445__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22445__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22445__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22450,p__22451){
var map__22452 = p__22450;
var map__22452__$1 = cljs.core.__destructure_map(map__22452);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22452__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22453 = p__22451;
var map__22453__$1 = cljs.core.__destructure_map(map__22453);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22453__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22458,p__22459){
var map__22461 = p__22458;
var map__22461__$1 = cljs.core.__destructure_map(map__22461);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22462 = p__22459;
var map__22462__$1 = cljs.core.__destructure_map(map__22462);
var msg = map__22462__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22462__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22468,tid){
var map__22469 = p__22468;
var map__22469__$1 = cljs.core.__destructure_map(map__22469);
var svc = map__22469__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22469__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22483 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22485 = null;
var count__22486 = (0);
var i__22487 = (0);
while(true){
if((i__22487 < count__22486)){
var vec__22499 = chunk__22485.cljs$core$IIndexed$_nth$arity$2(null, i__22487);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22499,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22536 = seq__22483;
var G__22537 = chunk__22485;
var G__22538 = count__22486;
var G__22539 = (i__22487 + (1));
seq__22483 = G__22536;
chunk__22485 = G__22537;
count__22486 = G__22538;
i__22487 = G__22539;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22483);
if(temp__5804__auto__){
var seq__22483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22483__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22483__$1);
var G__22540 = cljs.core.chunk_rest(seq__22483__$1);
var G__22541 = c__5525__auto__;
var G__22542 = cljs.core.count(c__5525__auto__);
var G__22543 = (0);
seq__22483 = G__22540;
chunk__22485 = G__22541;
count__22486 = G__22542;
i__22487 = G__22543;
continue;
} else {
var vec__22509 = cljs.core.first(seq__22483__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22509,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22544 = cljs.core.next(seq__22483__$1);
var G__22545 = null;
var G__22546 = (0);
var G__22547 = (0);
seq__22483 = G__22544;
chunk__22485 = G__22545;
count__22486 = G__22546;
i__22487 = G__22547;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22475_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22475_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22477_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22477_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22478_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22478_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22479_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22479_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22516){
var map__22520 = p__22516;
var map__22520__$1 = cljs.core.__destructure_map(map__22520);
var svc = map__22520__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
