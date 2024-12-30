goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__18537,p__18538){
var map__18539 = p__18537;
var map__18539__$1 = cljs.core.__destructure_map(map__18539);
var svc = map__18539__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18540 = p__18538;
var map__18540__$1 = cljs.core.__destructure_map(map__18540);
var msg = map__18540__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18540__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18540__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18540__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18540__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__18545,p__18546){
var map__18547 = p__18545;
var map__18547__$1 = cljs.core.__destructure_map(map__18547);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__18548 = p__18546;
var map__18548__$1 = cljs.core.__destructure_map(map__18548);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__18550,p__18551){
var map__18552 = p__18550;
var map__18552__$1 = cljs.core.__destructure_map(map__18552);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18552__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18553 = p__18551;
var map__18553__$1 = cljs.core.__destructure_map(map__18553);
var msg = map__18553__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18553__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__18557,tid){
var map__18558 = p__18557;
var map__18558__$1 = cljs.core.__destructure_map(map__18558);
var svc = map__18558__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18558__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__18564 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__18565 = null;
var count__18566 = (0);
var i__18567 = (0);
while(true){
if((i__18567 < count__18566)){
var vec__18574 = chunk__18565.cljs$core$IIndexed$_nth$arity$2(null, i__18567);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18574,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18588 = seq__18564;
var G__18589 = chunk__18565;
var G__18590 = count__18566;
var G__18591 = (i__18567 + (1));
seq__18564 = G__18588;
chunk__18565 = G__18589;
count__18566 = G__18590;
i__18567 = G__18591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18564);
if(temp__5804__auto__){
var seq__18564__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18564__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18564__$1);
var G__18593 = cljs.core.chunk_rest(seq__18564__$1);
var G__18594 = c__5525__auto__;
var G__18595 = cljs.core.count(c__5525__auto__);
var G__18596 = (0);
seq__18564 = G__18593;
chunk__18565 = G__18594;
count__18566 = G__18595;
i__18567 = G__18596;
continue;
} else {
var vec__18577 = cljs.core.first(seq__18564__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18577,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18598 = cljs.core.next(seq__18564__$1);
var G__18599 = null;
var G__18600 = (0);
var G__18601 = (0);
seq__18564 = G__18598;
chunk__18565 = G__18599;
count__18566 = G__18600;
i__18567 = G__18601;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__18560_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__18560_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__18561_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__18561_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__18562_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__18562_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__18563_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__18563_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__18584){
var map__18585 = p__18584;
var map__18585__$1 = cljs.core.__destructure_map(map__18585);
var svc = map__18585__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18585__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18585__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
