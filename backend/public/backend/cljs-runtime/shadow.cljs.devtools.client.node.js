goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__18779){
var map__18780 = p__18779;
var map__18780__$1 = cljs.core.__destructure_map(map__18780);
var msg = map__18780__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18780__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18780__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__18804){
var map__18806 = p__18804;
var map__18806__$1 = cljs.core.__destructure_map(map__18806);
var msg = map__18806__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18806__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18806__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__18807 = info;
var map__18807__$1 = cljs.core.__destructure_map(map__18807);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18807__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18807__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18807__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__18808){
var map__18809 = p__18808;
var map__18809__$1 = cljs.core.__destructure_map(map__18809);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18810){
var map__18811 = p__18810;
var map__18811__$1 = cljs.core.__destructure_map(map__18811);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18811__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__18812 = cljs.core.seq(files_to_require);
var chunk__18813 = null;
var count__18814 = (0);
var i__18815 = (0);
while(true){
if((i__18815 < count__18814)){
var src = chunk__18813.cljs$core$IIndexed$_nth$arity$2(null, i__18815);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__18871 = seq__18812;
var G__18872 = chunk__18813;
var G__18873 = count__18814;
var G__18874 = (i__18815 + (1));
seq__18812 = G__18871;
chunk__18813 = G__18872;
count__18814 = G__18873;
i__18815 = G__18874;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18812);
if(temp__5804__auto__){
var seq__18812__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18812__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18812__$1);
var G__18875 = cljs.core.chunk_rest(seq__18812__$1);
var G__18876 = c__5525__auto__;
var G__18877 = cljs.core.count(c__5525__auto__);
var G__18878 = (0);
seq__18812 = G__18875;
chunk__18813 = G__18876;
count__18814 = G__18877;
i__18815 = G__18878;
continue;
} else {
var src = cljs.core.first(seq__18812__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__18879 = cljs.core.next(seq__18812__$1);
var G__18880 = null;
var G__18881 = (0);
var G__18882 = (0);
seq__18812 = G__18879;
chunk__18813 = G__18880;
count__18814 = G__18881;
i__18815 = G__18882;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__18819,msg){
var map__18820 = p__18819;
var map__18820__$1 = cljs.core.__destructure_map(map__18820);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18820__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__18821){
var map__18822 = p__18821;
var map__18822__$1 = cljs.core.__destructure_map(map__18822);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18822__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18823,done,error){
var map__18824 = p__18823;
var map__18824__$1 = cljs.core.__destructure_map(map__18824);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__18828_18883 = cljs.core.seq(repl_sources);
var chunk__18830_18884 = null;
var count__18831_18885 = (0);
var i__18832_18886 = (0);
while(true){
if((i__18832_18886 < count__18831_18885)){
var map__18839_18887 = chunk__18830_18884.cljs$core$IIndexed$_nth$arity$2(null, i__18832_18886);
var map__18839_18888__$1 = cljs.core.__destructure_map(map__18839_18887);
var src_18889 = map__18839_18888__$1;
var output_name_18890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18839_18888__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18890)))){
shadow.cljs.devtools.client.node.closure_import(output_name_18890);


var G__18891 = seq__18828_18883;
var G__18892 = chunk__18830_18884;
var G__18893 = count__18831_18885;
var G__18894 = (i__18832_18886 + (1));
seq__18828_18883 = G__18891;
chunk__18830_18884 = G__18892;
count__18831_18885 = G__18893;
i__18832_18886 = G__18894;
continue;
} else {
var G__18895 = seq__18828_18883;
var G__18896 = chunk__18830_18884;
var G__18897 = count__18831_18885;
var G__18898 = (i__18832_18886 + (1));
seq__18828_18883 = G__18895;
chunk__18830_18884 = G__18896;
count__18831_18885 = G__18897;
i__18832_18886 = G__18898;
continue;
}
} else {
var temp__5804__auto___18899 = cljs.core.seq(seq__18828_18883);
if(temp__5804__auto___18899){
var seq__18828_18900__$1 = temp__5804__auto___18899;
if(cljs.core.chunked_seq_QMARK_(seq__18828_18900__$1)){
var c__5525__auto___18901 = cljs.core.chunk_first(seq__18828_18900__$1);
var G__18902 = cljs.core.chunk_rest(seq__18828_18900__$1);
var G__18903 = c__5525__auto___18901;
var G__18904 = cljs.core.count(c__5525__auto___18901);
var G__18905 = (0);
seq__18828_18883 = G__18902;
chunk__18830_18884 = G__18903;
count__18831_18885 = G__18904;
i__18832_18886 = G__18905;
continue;
} else {
var map__18841_18906 = cljs.core.first(seq__18828_18900__$1);
var map__18841_18907__$1 = cljs.core.__destructure_map(map__18841_18906);
var src_18908 = map__18841_18907__$1;
var output_name_18909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18841_18907__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18909)))){
shadow.cljs.devtools.client.node.closure_import(output_name_18909);


var G__18910 = cljs.core.next(seq__18828_18900__$1);
var G__18911 = null;
var G__18912 = (0);
var G__18913 = (0);
seq__18828_18883 = G__18910;
chunk__18830_18884 = G__18911;
count__18831_18885 = G__18912;
i__18832_18886 = G__18913;
continue;
} else {
var G__18914 = cljs.core.next(seq__18828_18900__$1);
var G__18915 = null;
var G__18916 = (0);
var G__18917 = (0);
seq__18828_18883 = G__18914;
chunk__18830_18884 = G__18915;
count__18831_18885 = G__18916;
i__18832_18886 = G__18917;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e18827){var e = e18827;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__18842,done,error){
var map__18843 = p__18842;
var map__18843__$1 = cljs.core.__destructure_map(map__18843);
var msg = map__18843__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__18845_18918 = cljs.core.seq(sources);
var chunk__18846_18919 = null;
var count__18847_18920 = (0);
var i__18848_18921 = (0);
while(true){
if((i__18848_18921 < count__18847_18920)){
var map__18853_18922 = chunk__18846_18919.cljs$core$IIndexed$_nth$arity$2(null, i__18848_18921);
var map__18853_18923__$1 = cljs.core.__destructure_map(map__18853_18922);
var src_18924 = map__18853_18923__$1;
var provides_18925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853_18923__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_18926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18853_18923__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18926)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_18925);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_18926);
} else {
}


var G__18927 = seq__18845_18918;
var G__18928 = chunk__18846_18919;
var G__18929 = count__18847_18920;
var G__18930 = (i__18848_18921 + (1));
seq__18845_18918 = G__18927;
chunk__18846_18919 = G__18928;
count__18847_18920 = G__18929;
i__18848_18921 = G__18930;
continue;
} else {
var temp__5804__auto___18931 = cljs.core.seq(seq__18845_18918);
if(temp__5804__auto___18931){
var seq__18845_18932__$1 = temp__5804__auto___18931;
if(cljs.core.chunked_seq_QMARK_(seq__18845_18932__$1)){
var c__5525__auto___18933 = cljs.core.chunk_first(seq__18845_18932__$1);
var G__18934 = cljs.core.chunk_rest(seq__18845_18932__$1);
var G__18935 = c__5525__auto___18933;
var G__18936 = cljs.core.count(c__5525__auto___18933);
var G__18937 = (0);
seq__18845_18918 = G__18934;
chunk__18846_18919 = G__18935;
count__18847_18920 = G__18936;
i__18848_18921 = G__18937;
continue;
} else {
var map__18854_18938 = cljs.core.first(seq__18845_18932__$1);
var map__18854_18939__$1 = cljs.core.__destructure_map(map__18854_18938);
var src_18940 = map__18854_18939__$1;
var provides_18941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854_18939__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_18942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854_18939__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18942)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_18941);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_18942);
} else {
}


var G__18943 = cljs.core.next(seq__18845_18932__$1);
var G__18944 = null;
var G__18945 = (0);
var G__18946 = (0);
seq__18845_18918 = G__18943;
chunk__18846_18919 = G__18944;
count__18847_18920 = G__18945;
i__18848_18921 = G__18946;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e18844){var e = e18844;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__18857){
var map__18858 = p__18857;
var map__18858__$1 = cljs.core.__destructure_map(map__18858);
var env = map__18858__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18862){
var map__18863 = p__18862;
var map__18863__$1 = cljs.core.__destructure_map(map__18863);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18863__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18863__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__18864){
var map__18865 = p__18864;
var map__18865__$1 = cljs.core.__destructure_map(map__18865);
var svc = map__18865__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18865__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
