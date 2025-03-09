goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17786,p__17787){
var map__17791 = p__17786;
var map__17791__$1 = cljs.core.__destructure_map(map__17791);
var svc = map__17791__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17791__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17791__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17791__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17793 = p__17787;
var map__17793__$1 = cljs.core.__destructure_map(map__17793);
var msg = map__17793__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17793__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17793__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17793__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17793__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17800,p__17801){
var map__17802 = p__17800;
var map__17802__$1 = cljs.core.__destructure_map(map__17802);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17802__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17803 = p__17801;
var map__17803__$1 = cljs.core.__destructure_map(map__17803);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17806,p__17807){
var map__17808 = p__17806;
var map__17808__$1 = cljs.core.__destructure_map(map__17808);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17808__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17809 = p__17807;
var map__17809__$1 = cljs.core.__destructure_map(map__17809);
var msg = map__17809__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17809__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17812,tid){
var map__17815 = p__17812;
var map__17815__$1 = cljs.core.__destructure_map(map__17815);
var svc = map__17815__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17815__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17823 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17824 = null;
var count__17825 = (0);
var i__17826 = (0);
while(true){
if((i__17826 < count__17825)){
var vec__17835 = chunk__17824.cljs$core$IIndexed$_nth$arity$2(null, i__17826);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17847 = seq__17823;
var G__17848 = chunk__17824;
var G__17849 = count__17825;
var G__17850 = (i__17826 + (1));
seq__17823 = G__17847;
chunk__17824 = G__17848;
count__17825 = G__17849;
i__17826 = G__17850;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17823);
if(temp__5804__auto__){
var seq__17823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17823__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17823__$1);
var G__17851 = cljs.core.chunk_rest(seq__17823__$1);
var G__17852 = c__5525__auto__;
var G__17853 = cljs.core.count(c__5525__auto__);
var G__17854 = (0);
seq__17823 = G__17851;
chunk__17824 = G__17852;
count__17825 = G__17853;
i__17826 = G__17854;
continue;
} else {
var vec__17839 = cljs.core.first(seq__17823__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17839,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17858 = cljs.core.next(seq__17823__$1);
var G__17859 = null;
var G__17860 = (0);
var G__17861 = (0);
seq__17823 = G__17858;
chunk__17824 = G__17859;
count__17825 = G__17860;
i__17826 = G__17861;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17817_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17817_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17818_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17818_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17819_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17819_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17820_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17820_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17845){
var map__17846 = p__17845;
var map__17846__$1 = cljs.core.__destructure_map(map__17846);
var svc = map__17846__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17846__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
