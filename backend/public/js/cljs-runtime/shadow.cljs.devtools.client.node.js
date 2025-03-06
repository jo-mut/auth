goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__10682){
var map__10683 = p__10682;
var map__10683__$1 = cljs.core.__destructure_map(map__10683);
var msg = map__10683__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10683__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10683__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__10723){
var map__10727 = p__10723;
var map__10727__$1 = cljs.core.__destructure_map(map__10727);
var msg = map__10727__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10727__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10727__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__10729 = info;
var map__10729__$1 = cljs.core.__destructure_map(map__10729);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10729__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10729__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10729__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10772){
var map__10774 = p__10772;
var map__10774__$1 = cljs.core.__destructure_map(map__10774);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__10810){
var map__10812 = p__10810;
var map__10812__$1 = cljs.core.__destructure_map(map__10812);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10812__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__10840 = cljs.core.seq(files_to_require);
var chunk__10841 = null;
var count__10842 = (0);
var i__10843 = (0);
while(true){
if((i__10843 < count__10842)){
var src = chunk__10841.cljs$core$IIndexed$_nth$arity$2(null, i__10843);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__11358 = seq__10840;
var G__11359 = chunk__10841;
var G__11360 = count__10842;
var G__11361 = (i__10843 + (1));
seq__10840 = G__11358;
chunk__10841 = G__11359;
count__10842 = G__11360;
i__10843 = G__11361;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10840);
if(temp__5804__auto__){
var seq__10840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10840__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10840__$1);
var G__11369 = cljs.core.chunk_rest(seq__10840__$1);
var G__11370 = c__5525__auto__;
var G__11371 = cljs.core.count(c__5525__auto__);
var G__11372 = (0);
seq__10840 = G__11369;
chunk__10841 = G__11370;
count__10842 = G__11371;
i__10843 = G__11372;
continue;
} else {
var src = cljs.core.first(seq__10840__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__11373 = cljs.core.next(seq__10840__$1);
var G__11374 = null;
var G__11375 = (0);
var G__11376 = (0);
seq__10840 = G__11373;
chunk__10841 = G__11374;
count__10842 = G__11375;
i__10843 = G__11376;
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
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__10922,msg){
var map__10924 = p__10922;
var map__10924__$1 = cljs.core.__destructure_map(map__10924);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10924__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__10933){
var map__10935 = p__10933;
var map__10935__$1 = cljs.core.__destructure_map(map__10935);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10935__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10935__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__10971,done,error){
var map__10975 = p__10971;
var map__10975__$1 = cljs.core.__destructure_map(map__10975);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10975__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__10984_11418 = cljs.core.seq(repl_sources);
var chunk__10986_11419 = null;
var count__10987_11420 = (0);
var i__10988_11421 = (0);
while(true){
if((i__10988_11421 < count__10987_11420)){
var map__11021_11423 = chunk__10986_11419.cljs$core$IIndexed$_nth$arity$2(null, i__10988_11421);
var map__11021_11424__$1 = cljs.core.__destructure_map(map__11021_11423);
var src_11425 = map__11021_11424__$1;
var output_name_11426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11021_11424__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_11426)))){
shadow.cljs.devtools.client.node.closure_import(output_name_11426);


var G__11428 = seq__10984_11418;
var G__11429 = chunk__10986_11419;
var G__11430 = count__10987_11420;
var G__11431 = (i__10988_11421 + (1));
seq__10984_11418 = G__11428;
chunk__10986_11419 = G__11429;
count__10987_11420 = G__11430;
i__10988_11421 = G__11431;
continue;
} else {
var G__11432 = seq__10984_11418;
var G__11433 = chunk__10986_11419;
var G__11434 = count__10987_11420;
var G__11435 = (i__10988_11421 + (1));
seq__10984_11418 = G__11432;
chunk__10986_11419 = G__11433;
count__10987_11420 = G__11434;
i__10988_11421 = G__11435;
continue;
}
} else {
var temp__5804__auto___11438 = cljs.core.seq(seq__10984_11418);
if(temp__5804__auto___11438){
var seq__10984_11445__$1 = temp__5804__auto___11438;
if(cljs.core.chunked_seq_QMARK_(seq__10984_11445__$1)){
var c__5525__auto___11447 = cljs.core.chunk_first(seq__10984_11445__$1);
var G__11448 = cljs.core.chunk_rest(seq__10984_11445__$1);
var G__11449 = c__5525__auto___11447;
var G__11450 = cljs.core.count(c__5525__auto___11447);
var G__11451 = (0);
seq__10984_11418 = G__11448;
chunk__10986_11419 = G__11449;
count__10987_11420 = G__11450;
i__10988_11421 = G__11451;
continue;
} else {
var map__11036_11454 = cljs.core.first(seq__10984_11445__$1);
var map__11036_11455__$1 = cljs.core.__destructure_map(map__11036_11454);
var src_11456 = map__11036_11455__$1;
var output_name_11457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11036_11455__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_11457)))){
shadow.cljs.devtools.client.node.closure_import(output_name_11457);


var G__11460 = cljs.core.next(seq__10984_11445__$1);
var G__11461 = null;
var G__11462 = (0);
var G__11463 = (0);
seq__10984_11418 = G__11460;
chunk__10986_11419 = G__11461;
count__10987_11420 = G__11462;
i__10988_11421 = G__11463;
continue;
} else {
var G__11466 = cljs.core.next(seq__10984_11445__$1);
var G__11467 = null;
var G__11468 = (0);
var G__11469 = (0);
seq__10984_11418 = G__11466;
chunk__10986_11419 = G__11467;
count__10987_11420 = G__11468;
i__10988_11421 = G__11469;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e10983){var e = e10983;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__11050,done,error){
var map__11053 = p__11050;
var map__11053__$1 = cljs.core.__destructure_map(map__11053);
var msg = map__11053__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11053__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11053__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__11061_11470 = cljs.core.seq(sources);
var chunk__11062_11471 = null;
var count__11063_11472 = (0);
var i__11064_11473 = (0);
while(true){
if((i__11064_11473 < count__11063_11472)){
var map__11098_11474 = chunk__11062_11471.cljs$core$IIndexed$_nth$arity$2(null, i__11064_11473);
var map__11098_11475__$1 = cljs.core.__destructure_map(map__11098_11474);
var src_11476 = map__11098_11475__$1;
var provides_11477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11098_11475__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_11478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11098_11475__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_11478)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_11477);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_11478);
} else {
}


var G__11484 = seq__11061_11470;
var G__11485 = chunk__11062_11471;
var G__11486 = count__11063_11472;
var G__11487 = (i__11064_11473 + (1));
seq__11061_11470 = G__11484;
chunk__11062_11471 = G__11485;
count__11063_11472 = G__11486;
i__11064_11473 = G__11487;
continue;
} else {
var temp__5804__auto___11489 = cljs.core.seq(seq__11061_11470);
if(temp__5804__auto___11489){
var seq__11061_11491__$1 = temp__5804__auto___11489;
if(cljs.core.chunked_seq_QMARK_(seq__11061_11491__$1)){
var c__5525__auto___11492 = cljs.core.chunk_first(seq__11061_11491__$1);
var G__11494 = cljs.core.chunk_rest(seq__11061_11491__$1);
var G__11495 = c__5525__auto___11492;
var G__11496 = cljs.core.count(c__5525__auto___11492);
var G__11497 = (0);
seq__11061_11470 = G__11494;
chunk__11062_11471 = G__11495;
count__11063_11472 = G__11496;
i__11064_11473 = G__11497;
continue;
} else {
var map__11113_11501 = cljs.core.first(seq__11061_11491__$1);
var map__11113_11502__$1 = cljs.core.__destructure_map(map__11113_11501);
var src_11503 = map__11113_11502__$1;
var provides_11504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11113_11502__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_11505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11113_11502__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_11505)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_11504);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_11505);
} else {
}


var G__11518 = cljs.core.next(seq__11061_11491__$1);
var G__11519 = null;
var G__11520 = (0);
var G__11521 = (0);
seq__11061_11470 = G__11518;
chunk__11062_11471 = G__11519;
count__11063_11472 = G__11520;
i__11064_11473 = G__11521;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e11058){var e = e11058;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__11136){
var map__11139 = p__11136;
var map__11139__$1 = cljs.core.__destructure_map(map__11139);
var env = map__11139__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11139__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__11206){
var map__11209 = p__11206;
var map__11209__$1 = cljs.core.__destructure_map(map__11209);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11209__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11209__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__11234){
var map__11235 = p__11234;
var map__11235__$1 = cljs.core.__destructure_map(map__11235);
var svc = map__11235__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11235__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
