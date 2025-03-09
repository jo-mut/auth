goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__17989){
var map__17990 = p__17989;
var map__17990__$1 = cljs.core.__destructure_map(map__17990);
var msg = map__17990__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17990__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17990__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__17991){
var map__17992 = p__17991;
var map__17992__$1 = cljs.core.__destructure_map(map__17992);
var msg = map__17992__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17992__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17992__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__17993 = info;
var map__17993__$1 = cljs.core.__destructure_map(map__17993);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17993__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17995){
var map__17996 = p__17995;
var map__17996__$1 = cljs.core.__destructure_map(map__17996);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17996__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__17997){
var map__17998 = p__17997;
var map__17998__$1 = cljs.core.__destructure_map(map__17998);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17998__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__17999 = cljs.core.seq(files_to_require);
var chunk__18000 = null;
var count__18001 = (0);
var i__18002 = (0);
while(true){
if((i__18002 < count__18001)){
var src = chunk__18000.cljs$core$IIndexed$_nth$arity$2(null, i__18002);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__18040 = seq__17999;
var G__18041 = chunk__18000;
var G__18042 = count__18001;
var G__18043 = (i__18002 + (1));
seq__17999 = G__18040;
chunk__18000 = G__18041;
count__18001 = G__18042;
i__18002 = G__18043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17999);
if(temp__5804__auto__){
var seq__17999__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17999__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17999__$1);
var G__18044 = cljs.core.chunk_rest(seq__17999__$1);
var G__18045 = c__5525__auto__;
var G__18046 = cljs.core.count(c__5525__auto__);
var G__18047 = (0);
seq__17999 = G__18044;
chunk__18000 = G__18045;
count__18001 = G__18046;
i__18002 = G__18047;
continue;
} else {
var src = cljs.core.first(seq__17999__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__18048 = cljs.core.next(seq__17999__$1);
var G__18049 = null;
var G__18050 = (0);
var G__18051 = (0);
seq__17999 = G__18048;
chunk__18000 = G__18049;
count__18001 = G__18050;
i__18002 = G__18051;
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
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__18004,msg){
var map__18005 = p__18004;
var map__18005__$1 = cljs.core.__destructure_map(map__18005);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__18006){
var map__18007 = p__18006;
var map__18007__$1 = cljs.core.__destructure_map(map__18007);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18007__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18007__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18010,done,error){
var map__18011 = p__18010;
var map__18011__$1 = cljs.core.__destructure_map(map__18011);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__18013_18052 = cljs.core.seq(repl_sources);
var chunk__18015_18053 = null;
var count__18016_18054 = (0);
var i__18017_18055 = (0);
while(true){
if((i__18017_18055 < count__18016_18054)){
var map__18021_18056 = chunk__18015_18053.cljs$core$IIndexed$_nth$arity$2(null, i__18017_18055);
var map__18021_18057__$1 = cljs.core.__destructure_map(map__18021_18056);
var src_18058 = map__18021_18057__$1;
var output_name_18059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18021_18057__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18059)))){
shadow.cljs.devtools.client.node.closure_import(output_name_18059);


var G__18060 = seq__18013_18052;
var G__18061 = chunk__18015_18053;
var G__18062 = count__18016_18054;
var G__18063 = (i__18017_18055 + (1));
seq__18013_18052 = G__18060;
chunk__18015_18053 = G__18061;
count__18016_18054 = G__18062;
i__18017_18055 = G__18063;
continue;
} else {
var G__18064 = seq__18013_18052;
var G__18065 = chunk__18015_18053;
var G__18066 = count__18016_18054;
var G__18067 = (i__18017_18055 + (1));
seq__18013_18052 = G__18064;
chunk__18015_18053 = G__18065;
count__18016_18054 = G__18066;
i__18017_18055 = G__18067;
continue;
}
} else {
var temp__5804__auto___18068 = cljs.core.seq(seq__18013_18052);
if(temp__5804__auto___18068){
var seq__18013_18069__$1 = temp__5804__auto___18068;
if(cljs.core.chunked_seq_QMARK_(seq__18013_18069__$1)){
var c__5525__auto___18070 = cljs.core.chunk_first(seq__18013_18069__$1);
var G__18071 = cljs.core.chunk_rest(seq__18013_18069__$1);
var G__18072 = c__5525__auto___18070;
var G__18073 = cljs.core.count(c__5525__auto___18070);
var G__18074 = (0);
seq__18013_18052 = G__18071;
chunk__18015_18053 = G__18072;
count__18016_18054 = G__18073;
i__18017_18055 = G__18074;
continue;
} else {
var map__18022_18075 = cljs.core.first(seq__18013_18069__$1);
var map__18022_18076__$1 = cljs.core.__destructure_map(map__18022_18075);
var src_18077 = map__18022_18076__$1;
var output_name_18078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18022_18076__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18078)))){
shadow.cljs.devtools.client.node.closure_import(output_name_18078);


var G__18079 = cljs.core.next(seq__18013_18069__$1);
var G__18080 = null;
var G__18081 = (0);
var G__18082 = (0);
seq__18013_18052 = G__18079;
chunk__18015_18053 = G__18080;
count__18016_18054 = G__18081;
i__18017_18055 = G__18082;
continue;
} else {
var G__18083 = cljs.core.next(seq__18013_18069__$1);
var G__18084 = null;
var G__18085 = (0);
var G__18086 = (0);
seq__18013_18052 = G__18083;
chunk__18015_18053 = G__18084;
count__18016_18054 = G__18085;
i__18017_18055 = G__18086;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e18012){var e = e18012;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__18023,done,error){
var map__18024 = p__18023;
var map__18024__$1 = cljs.core.__destructure_map(map__18024);
var msg = map__18024__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18024__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18024__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__18026_18087 = cljs.core.seq(sources);
var chunk__18027_18088 = null;
var count__18028_18089 = (0);
var i__18029_18090 = (0);
while(true){
if((i__18029_18090 < count__18028_18089)){
var map__18032_18091 = chunk__18027_18088.cljs$core$IIndexed$_nth$arity$2(null, i__18029_18090);
var map__18032_18092__$1 = cljs.core.__destructure_map(map__18032_18091);
var src_18093 = map__18032_18092__$1;
var provides_18094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032_18092__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_18095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032_18092__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18095)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_18094);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_18095);
} else {
}


var G__18096 = seq__18026_18087;
var G__18097 = chunk__18027_18088;
var G__18098 = count__18028_18089;
var G__18099 = (i__18029_18090 + (1));
seq__18026_18087 = G__18096;
chunk__18027_18088 = G__18097;
count__18028_18089 = G__18098;
i__18029_18090 = G__18099;
continue;
} else {
var temp__5804__auto___18100 = cljs.core.seq(seq__18026_18087);
if(temp__5804__auto___18100){
var seq__18026_18101__$1 = temp__5804__auto___18100;
if(cljs.core.chunked_seq_QMARK_(seq__18026_18101__$1)){
var c__5525__auto___18102 = cljs.core.chunk_first(seq__18026_18101__$1);
var G__18103 = cljs.core.chunk_rest(seq__18026_18101__$1);
var G__18104 = c__5525__auto___18102;
var G__18105 = cljs.core.count(c__5525__auto___18102);
var G__18106 = (0);
seq__18026_18087 = G__18103;
chunk__18027_18088 = G__18104;
count__18028_18089 = G__18105;
i__18029_18090 = G__18106;
continue;
} else {
var map__18033_18107 = cljs.core.first(seq__18026_18101__$1);
var map__18033_18108__$1 = cljs.core.__destructure_map(map__18033_18107);
var src_18109 = map__18033_18108__$1;
var provides_18110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18033_18108__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_18111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18033_18108__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_18111)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_18110);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_18111);
} else {
}


var G__18112 = cljs.core.next(seq__18026_18101__$1);
var G__18113 = null;
var G__18114 = (0);
var G__18115 = (0);
seq__18026_18087 = G__18112;
chunk__18027_18088 = G__18113;
count__18028_18089 = G__18114;
i__18029_18090 = G__18115;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e18025){var e = e18025;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__18034){
var map__18035 = p__18034;
var map__18035__$1 = cljs.core.__destructure_map(map__18035);
var env = map__18035__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18035__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18036){
var map__18037 = p__18036;
var map__18037__$1 = cljs.core.__destructure_map(map__18037);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18037__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18037__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__18038){
var map__18039 = p__18038;
var map__18039__$1 = cljs.core.__destructure_map(map__18039);
var svc = map__18039__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
