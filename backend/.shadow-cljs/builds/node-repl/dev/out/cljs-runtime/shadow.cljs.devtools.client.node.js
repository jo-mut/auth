goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__17620){
var map__17621 = p__17620;
var map__17621__$1 = cljs.core.__destructure_map(map__17621);
var msg = map__17621__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17621__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17621__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__17625){
var map__17626 = p__17625;
var map__17626__$1 = cljs.core.__destructure_map(map__17626);
var msg = map__17626__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17626__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17626__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__17627 = info;
var map__17627__$1 = cljs.core.__destructure_map(map__17627);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17627__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17627__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17627__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__17629){
var map__17630 = p__17629;
var map__17630__$1 = cljs.core.__destructure_map(map__17630);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17630__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17630__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__17631){
var map__17632 = p__17631;
var map__17632__$1 = cljs.core.__destructure_map(map__17632);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__17633 = cljs.core.seq(files_to_require);
var chunk__17634 = null;
var count__17635 = (0);
var i__17636 = (0);
while(true){
if((i__17636 < count__17635)){
var src = chunk__17634.cljs$core$IIndexed$_nth$arity$2(null, i__17636);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__17741 = seq__17633;
var G__17742 = chunk__17634;
var G__17743 = count__17635;
var G__17744 = (i__17636 + (1));
seq__17633 = G__17741;
chunk__17634 = G__17742;
count__17635 = G__17743;
i__17636 = G__17744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17633);
if(temp__5804__auto__){
var seq__17633__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17633__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17633__$1);
var G__17745 = cljs.core.chunk_rest(seq__17633__$1);
var G__17746 = c__5525__auto__;
var G__17747 = cljs.core.count(c__5525__auto__);
var G__17748 = (0);
seq__17633 = G__17745;
chunk__17634 = G__17746;
count__17635 = G__17747;
i__17636 = G__17748;
continue;
} else {
var src = cljs.core.first(seq__17633__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__17751 = cljs.core.next(seq__17633__$1);
var G__17752 = null;
var G__17753 = (0);
var G__17754 = (0);
seq__17633 = G__17751;
chunk__17634 = G__17752;
count__17635 = G__17753;
i__17636 = G__17754;
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
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__17642,msg){
var map__17643 = p__17642;
var map__17643__$1 = cljs.core.__destructure_map(map__17643);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17643__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__17644){
var map__17645 = p__17644;
var map__17645__$1 = cljs.core.__destructure_map(map__17645);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17645__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17645__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__17649,done,error){
var map__17650 = p__17649;
var map__17650__$1 = cljs.core.__destructure_map(map__17650);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17650__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__17652_17764 = cljs.core.seq(repl_sources);
var chunk__17654_17765 = null;
var count__17655_17766 = (0);
var i__17656_17767 = (0);
while(true){
if((i__17656_17767 < count__17655_17766)){
var map__17663_17768 = chunk__17654_17765.cljs$core$IIndexed$_nth$arity$2(null, i__17656_17767);
var map__17663_17769__$1 = cljs.core.__destructure_map(map__17663_17768);
var src_17770 = map__17663_17769__$1;
var output_name_17771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17663_17769__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_17771)))){
shadow.cljs.devtools.client.node.closure_import(output_name_17771);


var G__17772 = seq__17652_17764;
var G__17773 = chunk__17654_17765;
var G__17774 = count__17655_17766;
var G__17775 = (i__17656_17767 + (1));
seq__17652_17764 = G__17772;
chunk__17654_17765 = G__17773;
count__17655_17766 = G__17774;
i__17656_17767 = G__17775;
continue;
} else {
var G__17776 = seq__17652_17764;
var G__17777 = chunk__17654_17765;
var G__17778 = count__17655_17766;
var G__17779 = (i__17656_17767 + (1));
seq__17652_17764 = G__17776;
chunk__17654_17765 = G__17777;
count__17655_17766 = G__17778;
i__17656_17767 = G__17779;
continue;
}
} else {
var temp__5804__auto___17780 = cljs.core.seq(seq__17652_17764);
if(temp__5804__auto___17780){
var seq__17652_17781__$1 = temp__5804__auto___17780;
if(cljs.core.chunked_seq_QMARK_(seq__17652_17781__$1)){
var c__5525__auto___17782 = cljs.core.chunk_first(seq__17652_17781__$1);
var G__17783 = cljs.core.chunk_rest(seq__17652_17781__$1);
var G__17784 = c__5525__auto___17782;
var G__17785 = cljs.core.count(c__5525__auto___17782);
var G__17786 = (0);
seq__17652_17764 = G__17783;
chunk__17654_17765 = G__17784;
count__17655_17766 = G__17785;
i__17656_17767 = G__17786;
continue;
} else {
var map__17678_17789 = cljs.core.first(seq__17652_17781__$1);
var map__17678_17791__$1 = cljs.core.__destructure_map(map__17678_17789);
var src_17793 = map__17678_17791__$1;
var output_name_17794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17678_17791__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_17794)))){
shadow.cljs.devtools.client.node.closure_import(output_name_17794);


var G__17795 = cljs.core.next(seq__17652_17781__$1);
var G__17796 = null;
var G__17797 = (0);
var G__17798 = (0);
seq__17652_17764 = G__17795;
chunk__17654_17765 = G__17796;
count__17655_17766 = G__17797;
i__17656_17767 = G__17798;
continue;
} else {
var G__17801 = cljs.core.next(seq__17652_17781__$1);
var G__17802 = null;
var G__17803 = (0);
var G__17804 = (0);
seq__17652_17764 = G__17801;
chunk__17654_17765 = G__17802;
count__17655_17766 = G__17803;
i__17656_17767 = G__17804;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e17651){var e = e17651;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__17690,done,error){
var map__17692 = p__17690;
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var msg = map__17692__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__17694_17809 = cljs.core.seq(sources);
var chunk__17695_17810 = null;
var count__17696_17811 = (0);
var i__17697_17812 = (0);
while(true){
if((i__17697_17812 < count__17696_17811)){
var map__17704_17814 = chunk__17695_17810.cljs$core$IIndexed$_nth$arity$2(null, i__17697_17812);
var map__17704_17815__$1 = cljs.core.__destructure_map(map__17704_17814);
var src_17816 = map__17704_17815__$1;
var provides_17817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704_17815__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_17818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17704_17815__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_17818)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_17817);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_17818);
} else {
}


var G__17821 = seq__17694_17809;
var G__17822 = chunk__17695_17810;
var G__17823 = count__17696_17811;
var G__17824 = (i__17697_17812 + (1));
seq__17694_17809 = G__17821;
chunk__17695_17810 = G__17822;
count__17696_17811 = G__17823;
i__17697_17812 = G__17824;
continue;
} else {
var temp__5804__auto___17828 = cljs.core.seq(seq__17694_17809);
if(temp__5804__auto___17828){
var seq__17694_17829__$1 = temp__5804__auto___17828;
if(cljs.core.chunked_seq_QMARK_(seq__17694_17829__$1)){
var c__5525__auto___17830 = cljs.core.chunk_first(seq__17694_17829__$1);
var G__17831 = cljs.core.chunk_rest(seq__17694_17829__$1);
var G__17832 = c__5525__auto___17830;
var G__17833 = cljs.core.count(c__5525__auto___17830);
var G__17834 = (0);
seq__17694_17809 = G__17831;
chunk__17695_17810 = G__17832;
count__17696_17811 = G__17833;
i__17697_17812 = G__17834;
continue;
} else {
var map__17705_17836 = cljs.core.first(seq__17694_17829__$1);
var map__17705_17837__$1 = cljs.core.__destructure_map(map__17705_17836);
var src_17838 = map__17705_17837__$1;
var provides_17839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705_17837__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_17840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17705_17837__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_17840)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_17839);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_17840);
} else {
}


var G__17842 = cljs.core.next(seq__17694_17829__$1);
var G__17843 = null;
var G__17844 = (0);
var G__17845 = (0);
seq__17694_17809 = G__17842;
chunk__17695_17810 = G__17843;
count__17696_17811 = G__17844;
i__17697_17812 = G__17845;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e17693){var e = e17693;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__17706){
var map__17707 = p__17706;
var map__17707__$1 = cljs.core.__destructure_map(map__17707);
var env = map__17707__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__17709){
var map__17710 = p__17709;
var map__17710__$1 = cljs.core.__destructure_map(map__17710);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17710__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17710__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__17718){
var map__17719 = p__17718;
var map__17719__$1 = cljs.core.__destructure_map(map__17719);
var svc = map__17719__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
