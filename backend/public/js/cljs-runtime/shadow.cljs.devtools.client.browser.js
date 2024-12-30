goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23279 = arguments.length;
var i__5727__auto___23280 = (0);
while(true){
if((i__5727__auto___23280 < len__5726__auto___23279)){
args__5732__auto__.push((arguments[i__5727__auto___23280]));

var G__23281 = (i__5727__auto___23280 + (1));
i__5727__auto___23280 = G__23281;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22852){
var G__22853 = cljs.core.first(seq22852);
var seq22852__$1 = cljs.core.next(seq22852);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22853,seq22852__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22854 = cljs.core.seq(sources);
var chunk__22855 = null;
var count__22856 = (0);
var i__22857 = (0);
while(true){
if((i__22857 < count__22856)){
var map__22864 = chunk__22855.cljs$core$IIndexed$_nth$arity$2(null, i__22857);
var map__22864__$1 = cljs.core.__destructure_map(map__22864);
var src = map__22864__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22865){var e_23286 = e22865;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23286);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23286.message)].join('')));
}

var G__23288 = seq__22854;
var G__23289 = chunk__22855;
var G__23290 = count__22856;
var G__23291 = (i__22857 + (1));
seq__22854 = G__23288;
chunk__22855 = G__23289;
count__22856 = G__23290;
i__22857 = G__23291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22854);
if(temp__5804__auto__){
var seq__22854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22854__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22854__$1);
var G__23295 = cljs.core.chunk_rest(seq__22854__$1);
var G__23296 = c__5525__auto__;
var G__23297 = cljs.core.count(c__5525__auto__);
var G__23298 = (0);
seq__22854 = G__23295;
chunk__22855 = G__23296;
count__22856 = G__23297;
i__22857 = G__23298;
continue;
} else {
var map__22866 = cljs.core.first(seq__22854__$1);
var map__22866__$1 = cljs.core.__destructure_map(map__22866);
var src = map__22866__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22866__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22866__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22866__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22866__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22867){var e_23299 = e22867;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23299);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23299.message)].join('')));
}

var G__23300 = cljs.core.next(seq__22854__$1);
var G__23301 = null;
var G__23302 = (0);
var G__23303 = (0);
seq__22854 = G__23300;
chunk__22855 = G__23301;
count__22856 = G__23302;
i__22857 = G__23303;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22868 = cljs.core.seq(js_requires);
var chunk__22869 = null;
var count__22870 = (0);
var i__22871 = (0);
while(true){
if((i__22871 < count__22870)){
var js_ns = chunk__22869.cljs$core$IIndexed$_nth$arity$2(null, i__22871);
var require_str_23304 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23304);


var G__23305 = seq__22868;
var G__23306 = chunk__22869;
var G__23307 = count__22870;
var G__23308 = (i__22871 + (1));
seq__22868 = G__23305;
chunk__22869 = G__23306;
count__22870 = G__23307;
i__22871 = G__23308;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22868);
if(temp__5804__auto__){
var seq__22868__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22868__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22868__$1);
var G__23309 = cljs.core.chunk_rest(seq__22868__$1);
var G__23310 = c__5525__auto__;
var G__23311 = cljs.core.count(c__5525__auto__);
var G__23312 = (0);
seq__22868 = G__23309;
chunk__22869 = G__23310;
count__22870 = G__23311;
i__22871 = G__23312;
continue;
} else {
var js_ns = cljs.core.first(seq__22868__$1);
var require_str_23313 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23313);


var G__23314 = cljs.core.next(seq__22868__$1);
var G__23315 = null;
var G__23316 = (0);
var G__23317 = (0);
seq__22868 = G__23314;
chunk__22869 = G__23315;
count__22870 = G__23316;
i__22871 = G__23317;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22876){
var map__22877 = p__22876;
var map__22877__$1 = cljs.core.__destructure_map(map__22877);
var msg = map__22877__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22877__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22879(s__22880){
return (new cljs.core.LazySeq(null,(function (){
var s__22880__$1 = s__22880;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22880__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22885 = cljs.core.first(xs__6360__auto__);
var map__22885__$1 = cljs.core.__destructure_map(map__22885);
var src = map__22885__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22880__$1,map__22885,map__22885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22877,map__22877__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22879_$_iter__22881(s__22882){
return (new cljs.core.LazySeq(null,((function (s__22880__$1,map__22885,map__22885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22877,map__22877__$1,msg,info,reload_info){
return (function (){
var s__22882__$1 = s__22882;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22882__$1);
if(temp__5804__auto____$1){
var s__22882__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22882__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22882__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22884 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22883 = (0);
while(true){
if((i__22883 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22883);
cljs.core.chunk_append(b__22884,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23318 = (i__22883 + (1));
i__22883 = G__23318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22884),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22879_$_iter__22881(cljs.core.chunk_rest(s__22882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22884),null);
}
} else {
var warning = cljs.core.first(s__22882__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22879_$_iter__22881(cljs.core.rest(s__22882__$2)));
}
} else {
return null;
}
break;
}
});})(s__22880__$1,map__22885,map__22885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22877,map__22877__$1,msg,info,reload_info))
,null,null));
});})(s__22880__$1,map__22885,map__22885__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22877,map__22877__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22879(cljs.core.rest(s__22880__$1)));
} else {
var G__23320 = cljs.core.rest(s__22880__$1);
s__22880__$1 = G__23320;
continue;
}
} else {
var G__23321 = cljs.core.rest(s__22880__$1);
s__22880__$1 = G__23321;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22888_23322 = cljs.core.seq(warnings);
var chunk__22889_23323 = null;
var count__22890_23324 = (0);
var i__22891_23325 = (0);
while(true){
if((i__22891_23325 < count__22890_23324)){
var map__22894_23326 = chunk__22889_23323.cljs$core$IIndexed$_nth$arity$2(null, i__22891_23325);
var map__22894_23327__$1 = cljs.core.__destructure_map(map__22894_23326);
var w_23328 = map__22894_23327__$1;
var msg_23329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23327__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23327__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23327__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22894_23327__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23332)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23330),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23331),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23329__$1)].join(''));


var G__23333 = seq__22888_23322;
var G__23334 = chunk__22889_23323;
var G__23335 = count__22890_23324;
var G__23336 = (i__22891_23325 + (1));
seq__22888_23322 = G__23333;
chunk__22889_23323 = G__23334;
count__22890_23324 = G__23335;
i__22891_23325 = G__23336;
continue;
} else {
var temp__5804__auto___23337 = cljs.core.seq(seq__22888_23322);
if(temp__5804__auto___23337){
var seq__22888_23338__$1 = temp__5804__auto___23337;
if(cljs.core.chunked_seq_QMARK_(seq__22888_23338__$1)){
var c__5525__auto___23339 = cljs.core.chunk_first(seq__22888_23338__$1);
var G__23340 = cljs.core.chunk_rest(seq__22888_23338__$1);
var G__23341 = c__5525__auto___23339;
var G__23342 = cljs.core.count(c__5525__auto___23339);
var G__23343 = (0);
seq__22888_23322 = G__23340;
chunk__22889_23323 = G__23341;
count__22890_23324 = G__23342;
i__22891_23325 = G__23343;
continue;
} else {
var map__22895_23344 = cljs.core.first(seq__22888_23338__$1);
var map__22895_23345__$1 = cljs.core.__destructure_map(map__22895_23344);
var w_23346 = map__22895_23345__$1;
var msg_23347__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23345__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23345__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23350)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23348),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23349),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23347__$1)].join(''));


var G__23351 = cljs.core.next(seq__22888_23338__$1);
var G__23352 = null;
var G__23353 = (0);
var G__23354 = (0);
seq__22888_23322 = G__23351;
chunk__22889_23323 = G__23352;
count__22890_23324 = G__23353;
i__22891_23325 = G__23354;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22875_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22875_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22896){
var map__22897 = p__22896;
var map__22897__$1 = cljs.core.__destructure_map(map__22897);
var msg = map__22897__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22898 = cljs.core.seq(updates);
var chunk__22900 = null;
var count__22901 = (0);
var i__22902 = (0);
while(true){
if((i__22902 < count__22901)){
var path = chunk__22900.cljs$core$IIndexed$_nth$arity$2(null, i__22902);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23049_23355 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23053_23356 = null;
var count__23054_23357 = (0);
var i__23055_23358 = (0);
while(true){
if((i__23055_23358 < count__23054_23357)){
var node_23359 = chunk__23053_23356.cljs$core$IIndexed$_nth$arity$2(null, i__23055_23358);
if(cljs.core.not(node_23359.shadow$old)){
var path_match_23360 = shadow.cljs.devtools.client.browser.match_paths(node_23359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23360)){
var new_link_23361 = (function (){var G__23092 = node_23359.cloneNode(true);
G__23092.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23092;
})();
(node_23359.shadow$old = true);

(new_link_23361.onload = ((function (seq__23049_23355,chunk__23053_23356,count__23054_23357,i__23055_23358,seq__22898,chunk__22900,count__22901,i__22902,new_link_23361,path_match_23360,node_23359,path,map__22897,map__22897__$1,msg,updates,reload_info){
return (function (e){
var seq__23096_23362 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23098_23363 = null;
var count__23099_23364 = (0);
var i__23100_23365 = (0);
while(true){
if((i__23100_23365 < count__23099_23364)){
var map__23104_23366 = chunk__23098_23363.cljs$core$IIndexed$_nth$arity$2(null, i__23100_23365);
var map__23104_23367__$1 = cljs.core.__destructure_map(map__23104_23366);
var task_23368 = map__23104_23367__$1;
var fn_str_23369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104_23367__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23104_23367__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23371 = goog.getObjectByName(fn_str_23369,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23370)].join(''));

(fn_obj_23371.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23371.cljs$core$IFn$_invoke$arity$2(path,new_link_23361) : fn_obj_23371.call(null, path,new_link_23361));


var G__23372 = seq__23096_23362;
var G__23373 = chunk__23098_23363;
var G__23374 = count__23099_23364;
var G__23375 = (i__23100_23365 + (1));
seq__23096_23362 = G__23372;
chunk__23098_23363 = G__23373;
count__23099_23364 = G__23374;
i__23100_23365 = G__23375;
continue;
} else {
var temp__5804__auto___23376 = cljs.core.seq(seq__23096_23362);
if(temp__5804__auto___23376){
var seq__23096_23377__$1 = temp__5804__auto___23376;
if(cljs.core.chunked_seq_QMARK_(seq__23096_23377__$1)){
var c__5525__auto___23378 = cljs.core.chunk_first(seq__23096_23377__$1);
var G__23379 = cljs.core.chunk_rest(seq__23096_23377__$1);
var G__23380 = c__5525__auto___23378;
var G__23381 = cljs.core.count(c__5525__auto___23378);
var G__23382 = (0);
seq__23096_23362 = G__23379;
chunk__23098_23363 = G__23380;
count__23099_23364 = G__23381;
i__23100_23365 = G__23382;
continue;
} else {
var map__23107_23383 = cljs.core.first(seq__23096_23377__$1);
var map__23107_23384__$1 = cljs.core.__destructure_map(map__23107_23383);
var task_23385 = map__23107_23384__$1;
var fn_str_23386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107_23384__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23107_23384__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23388 = goog.getObjectByName(fn_str_23386,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23387)].join(''));

(fn_obj_23388.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23388.cljs$core$IFn$_invoke$arity$2(path,new_link_23361) : fn_obj_23388.call(null, path,new_link_23361));


var G__23389 = cljs.core.next(seq__23096_23377__$1);
var G__23390 = null;
var G__23391 = (0);
var G__23392 = (0);
seq__23096_23362 = G__23389;
chunk__23098_23363 = G__23390;
count__23099_23364 = G__23391;
i__23100_23365 = G__23392;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23359);
});})(seq__23049_23355,chunk__23053_23356,count__23054_23357,i__23055_23358,seq__22898,chunk__22900,count__22901,i__22902,new_link_23361,path_match_23360,node_23359,path,map__22897,map__22897__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23360], 0));

goog.dom.insertSiblingAfter(new_link_23361,node_23359);


var G__23393 = seq__23049_23355;
var G__23394 = chunk__23053_23356;
var G__23395 = count__23054_23357;
var G__23396 = (i__23055_23358 + (1));
seq__23049_23355 = G__23393;
chunk__23053_23356 = G__23394;
count__23054_23357 = G__23395;
i__23055_23358 = G__23396;
continue;
} else {
var G__23397 = seq__23049_23355;
var G__23398 = chunk__23053_23356;
var G__23399 = count__23054_23357;
var G__23400 = (i__23055_23358 + (1));
seq__23049_23355 = G__23397;
chunk__23053_23356 = G__23398;
count__23054_23357 = G__23399;
i__23055_23358 = G__23400;
continue;
}
} else {
var G__23401 = seq__23049_23355;
var G__23402 = chunk__23053_23356;
var G__23403 = count__23054_23357;
var G__23404 = (i__23055_23358 + (1));
seq__23049_23355 = G__23401;
chunk__23053_23356 = G__23402;
count__23054_23357 = G__23403;
i__23055_23358 = G__23404;
continue;
}
} else {
var temp__5804__auto___23405 = cljs.core.seq(seq__23049_23355);
if(temp__5804__auto___23405){
var seq__23049_23406__$1 = temp__5804__auto___23405;
if(cljs.core.chunked_seq_QMARK_(seq__23049_23406__$1)){
var c__5525__auto___23407 = cljs.core.chunk_first(seq__23049_23406__$1);
var G__23408 = cljs.core.chunk_rest(seq__23049_23406__$1);
var G__23409 = c__5525__auto___23407;
var G__23410 = cljs.core.count(c__5525__auto___23407);
var G__23411 = (0);
seq__23049_23355 = G__23408;
chunk__23053_23356 = G__23409;
count__23054_23357 = G__23410;
i__23055_23358 = G__23411;
continue;
} else {
var node_23412 = cljs.core.first(seq__23049_23406__$1);
if(cljs.core.not(node_23412.shadow$old)){
var path_match_23413 = shadow.cljs.devtools.client.browser.match_paths(node_23412.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23413)){
var new_link_23414 = (function (){var G__23110 = node_23412.cloneNode(true);
G__23110.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23413),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23110;
})();
(node_23412.shadow$old = true);

(new_link_23414.onload = ((function (seq__23049_23355,chunk__23053_23356,count__23054_23357,i__23055_23358,seq__22898,chunk__22900,count__22901,i__22902,new_link_23414,path_match_23413,node_23412,seq__23049_23406__$1,temp__5804__auto___23405,path,map__22897,map__22897__$1,msg,updates,reload_info){
return (function (e){
var seq__23111_23415 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23113_23416 = null;
var count__23114_23417 = (0);
var i__23115_23418 = (0);
while(true){
if((i__23115_23418 < count__23114_23417)){
var map__23121_23419 = chunk__23113_23416.cljs$core$IIndexed$_nth$arity$2(null, i__23115_23418);
var map__23121_23420__$1 = cljs.core.__destructure_map(map__23121_23419);
var task_23421 = map__23121_23420__$1;
var fn_str_23422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23121_23420__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23121_23420__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23424 = goog.getObjectByName(fn_str_23422,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23423)].join(''));

(fn_obj_23424.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23424.cljs$core$IFn$_invoke$arity$2(path,new_link_23414) : fn_obj_23424.call(null, path,new_link_23414));


var G__23425 = seq__23111_23415;
var G__23426 = chunk__23113_23416;
var G__23427 = count__23114_23417;
var G__23428 = (i__23115_23418 + (1));
seq__23111_23415 = G__23425;
chunk__23113_23416 = G__23426;
count__23114_23417 = G__23427;
i__23115_23418 = G__23428;
continue;
} else {
var temp__5804__auto___23429__$1 = cljs.core.seq(seq__23111_23415);
if(temp__5804__auto___23429__$1){
var seq__23111_23430__$1 = temp__5804__auto___23429__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23111_23430__$1)){
var c__5525__auto___23431 = cljs.core.chunk_first(seq__23111_23430__$1);
var G__23432 = cljs.core.chunk_rest(seq__23111_23430__$1);
var G__23433 = c__5525__auto___23431;
var G__23434 = cljs.core.count(c__5525__auto___23431);
var G__23435 = (0);
seq__23111_23415 = G__23432;
chunk__23113_23416 = G__23433;
count__23114_23417 = G__23434;
i__23115_23418 = G__23435;
continue;
} else {
var map__23122_23437 = cljs.core.first(seq__23111_23430__$1);
var map__23122_23438__$1 = cljs.core.__destructure_map(map__23122_23437);
var task_23439 = map__23122_23438__$1;
var fn_str_23440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23122_23438__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23122_23438__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23442 = goog.getObjectByName(fn_str_23440,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23441)].join(''));

(fn_obj_23442.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23442.cljs$core$IFn$_invoke$arity$2(path,new_link_23414) : fn_obj_23442.call(null, path,new_link_23414));


var G__23443 = cljs.core.next(seq__23111_23430__$1);
var G__23444 = null;
var G__23445 = (0);
var G__23446 = (0);
seq__23111_23415 = G__23443;
chunk__23113_23416 = G__23444;
count__23114_23417 = G__23445;
i__23115_23418 = G__23446;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23412);
});})(seq__23049_23355,chunk__23053_23356,count__23054_23357,i__23055_23358,seq__22898,chunk__22900,count__22901,i__22902,new_link_23414,path_match_23413,node_23412,seq__23049_23406__$1,temp__5804__auto___23405,path,map__22897,map__22897__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23413], 0));

goog.dom.insertSiblingAfter(new_link_23414,node_23412);


var G__23447 = cljs.core.next(seq__23049_23406__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__23049_23355 = G__23447;
chunk__23053_23356 = G__23448;
count__23054_23357 = G__23449;
i__23055_23358 = G__23450;
continue;
} else {
var G__23451 = cljs.core.next(seq__23049_23406__$1);
var G__23452 = null;
var G__23453 = (0);
var G__23454 = (0);
seq__23049_23355 = G__23451;
chunk__23053_23356 = G__23452;
count__23054_23357 = G__23453;
i__23055_23358 = G__23454;
continue;
}
} else {
var G__23455 = cljs.core.next(seq__23049_23406__$1);
var G__23456 = null;
var G__23457 = (0);
var G__23458 = (0);
seq__23049_23355 = G__23455;
chunk__23053_23356 = G__23456;
count__23054_23357 = G__23457;
i__23055_23358 = G__23458;
continue;
}
}
} else {
}
}
break;
}


var G__23459 = seq__22898;
var G__23460 = chunk__22900;
var G__23461 = count__22901;
var G__23462 = (i__22902 + (1));
seq__22898 = G__23459;
chunk__22900 = G__23460;
count__22901 = G__23461;
i__22902 = G__23462;
continue;
} else {
var G__23463 = seq__22898;
var G__23464 = chunk__22900;
var G__23465 = count__22901;
var G__23466 = (i__22902 + (1));
seq__22898 = G__23463;
chunk__22900 = G__23464;
count__22901 = G__23465;
i__22902 = G__23466;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22898);
if(temp__5804__auto__){
var seq__22898__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22898__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22898__$1);
var G__23467 = cljs.core.chunk_rest(seq__22898__$1);
var G__23468 = c__5525__auto__;
var G__23469 = cljs.core.count(c__5525__auto__);
var G__23470 = (0);
seq__22898 = G__23467;
chunk__22900 = G__23468;
count__22901 = G__23469;
i__22902 = G__23470;
continue;
} else {
var path = cljs.core.first(seq__22898__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23123_23471 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23127_23472 = null;
var count__23128_23473 = (0);
var i__23129_23474 = (0);
while(true){
if((i__23129_23474 < count__23128_23473)){
var node_23475 = chunk__23127_23472.cljs$core$IIndexed$_nth$arity$2(null, i__23129_23474);
if(cljs.core.not(node_23475.shadow$old)){
var path_match_23477 = shadow.cljs.devtools.client.browser.match_paths(node_23475.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23477)){
var new_link_23478 = (function (){var G__23155 = node_23475.cloneNode(true);
G__23155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23477),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23155;
})();
(node_23475.shadow$old = true);

(new_link_23478.onload = ((function (seq__23123_23471,chunk__23127_23472,count__23128_23473,i__23129_23474,seq__22898,chunk__22900,count__22901,i__22902,new_link_23478,path_match_23477,node_23475,path,seq__22898__$1,temp__5804__auto__,map__22897,map__22897__$1,msg,updates,reload_info){
return (function (e){
var seq__23156_23479 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23158_23480 = null;
var count__23159_23481 = (0);
var i__23160_23482 = (0);
while(true){
if((i__23160_23482 < count__23159_23481)){
var map__23165_23483 = chunk__23158_23480.cljs$core$IIndexed$_nth$arity$2(null, i__23160_23482);
var map__23165_23484__$1 = cljs.core.__destructure_map(map__23165_23483);
var task_23485 = map__23165_23484__$1;
var fn_str_23486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23165_23484__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23165_23484__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23488 = goog.getObjectByName(fn_str_23486,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23487)].join(''));

(fn_obj_23488.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23488.cljs$core$IFn$_invoke$arity$2(path,new_link_23478) : fn_obj_23488.call(null, path,new_link_23478));


var G__23489 = seq__23156_23479;
var G__23490 = chunk__23158_23480;
var G__23491 = count__23159_23481;
var G__23492 = (i__23160_23482 + (1));
seq__23156_23479 = G__23489;
chunk__23158_23480 = G__23490;
count__23159_23481 = G__23491;
i__23160_23482 = G__23492;
continue;
} else {
var temp__5804__auto___23493__$1 = cljs.core.seq(seq__23156_23479);
if(temp__5804__auto___23493__$1){
var seq__23156_23494__$1 = temp__5804__auto___23493__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23156_23494__$1)){
var c__5525__auto___23495 = cljs.core.chunk_first(seq__23156_23494__$1);
var G__23496 = cljs.core.chunk_rest(seq__23156_23494__$1);
var G__23497 = c__5525__auto___23495;
var G__23498 = cljs.core.count(c__5525__auto___23495);
var G__23499 = (0);
seq__23156_23479 = G__23496;
chunk__23158_23480 = G__23497;
count__23159_23481 = G__23498;
i__23160_23482 = G__23499;
continue;
} else {
var map__23169_23500 = cljs.core.first(seq__23156_23494__$1);
var map__23169_23501__$1 = cljs.core.__destructure_map(map__23169_23500);
var task_23502 = map__23169_23501__$1;
var fn_str_23503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23169_23501__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23169_23501__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23505 = goog.getObjectByName(fn_str_23503,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23504)].join(''));

(fn_obj_23505.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23505.cljs$core$IFn$_invoke$arity$2(path,new_link_23478) : fn_obj_23505.call(null, path,new_link_23478));


var G__23506 = cljs.core.next(seq__23156_23494__$1);
var G__23507 = null;
var G__23508 = (0);
var G__23509 = (0);
seq__23156_23479 = G__23506;
chunk__23158_23480 = G__23507;
count__23159_23481 = G__23508;
i__23160_23482 = G__23509;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23475);
});})(seq__23123_23471,chunk__23127_23472,count__23128_23473,i__23129_23474,seq__22898,chunk__22900,count__22901,i__22902,new_link_23478,path_match_23477,node_23475,path,seq__22898__$1,temp__5804__auto__,map__22897,map__22897__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23477], 0));

goog.dom.insertSiblingAfter(new_link_23478,node_23475);


var G__23510 = seq__23123_23471;
var G__23511 = chunk__23127_23472;
var G__23512 = count__23128_23473;
var G__23513 = (i__23129_23474 + (1));
seq__23123_23471 = G__23510;
chunk__23127_23472 = G__23511;
count__23128_23473 = G__23512;
i__23129_23474 = G__23513;
continue;
} else {
var G__23514 = seq__23123_23471;
var G__23515 = chunk__23127_23472;
var G__23516 = count__23128_23473;
var G__23517 = (i__23129_23474 + (1));
seq__23123_23471 = G__23514;
chunk__23127_23472 = G__23515;
count__23128_23473 = G__23516;
i__23129_23474 = G__23517;
continue;
}
} else {
var G__23518 = seq__23123_23471;
var G__23519 = chunk__23127_23472;
var G__23520 = count__23128_23473;
var G__23521 = (i__23129_23474 + (1));
seq__23123_23471 = G__23518;
chunk__23127_23472 = G__23519;
count__23128_23473 = G__23520;
i__23129_23474 = G__23521;
continue;
}
} else {
var temp__5804__auto___23522__$1 = cljs.core.seq(seq__23123_23471);
if(temp__5804__auto___23522__$1){
var seq__23123_23523__$1 = temp__5804__auto___23522__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23123_23523__$1)){
var c__5525__auto___23524 = cljs.core.chunk_first(seq__23123_23523__$1);
var G__23525 = cljs.core.chunk_rest(seq__23123_23523__$1);
var G__23526 = c__5525__auto___23524;
var G__23527 = cljs.core.count(c__5525__auto___23524);
var G__23528 = (0);
seq__23123_23471 = G__23525;
chunk__23127_23472 = G__23526;
count__23128_23473 = G__23527;
i__23129_23474 = G__23528;
continue;
} else {
var node_23529 = cljs.core.first(seq__23123_23523__$1);
if(cljs.core.not(node_23529.shadow$old)){
var path_match_23531 = shadow.cljs.devtools.client.browser.match_paths(node_23529.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23531)){
var new_link_23532 = (function (){var G__23173 = node_23529.cloneNode(true);
G__23173.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23531),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23173;
})();
(node_23529.shadow$old = true);

(new_link_23532.onload = ((function (seq__23123_23471,chunk__23127_23472,count__23128_23473,i__23129_23474,seq__22898,chunk__22900,count__22901,i__22902,new_link_23532,path_match_23531,node_23529,seq__23123_23523__$1,temp__5804__auto___23522__$1,path,seq__22898__$1,temp__5804__auto__,map__22897,map__22897__$1,msg,updates,reload_info){
return (function (e){
var seq__23174_23534 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23176_23535 = null;
var count__23177_23536 = (0);
var i__23178_23537 = (0);
while(true){
if((i__23178_23537 < count__23177_23536)){
var map__23185_23539 = chunk__23176_23535.cljs$core$IIndexed$_nth$arity$2(null, i__23178_23537);
var map__23185_23540__$1 = cljs.core.__destructure_map(map__23185_23539);
var task_23541 = map__23185_23540__$1;
var fn_str_23542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185_23540__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185_23540__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23544 = goog.getObjectByName(fn_str_23542,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23543)].join(''));

(fn_obj_23544.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23544.cljs$core$IFn$_invoke$arity$2(path,new_link_23532) : fn_obj_23544.call(null, path,new_link_23532));


var G__23545 = seq__23174_23534;
var G__23546 = chunk__23176_23535;
var G__23547 = count__23177_23536;
var G__23548 = (i__23178_23537 + (1));
seq__23174_23534 = G__23545;
chunk__23176_23535 = G__23546;
count__23177_23536 = G__23547;
i__23178_23537 = G__23548;
continue;
} else {
var temp__5804__auto___23549__$2 = cljs.core.seq(seq__23174_23534);
if(temp__5804__auto___23549__$2){
var seq__23174_23550__$1 = temp__5804__auto___23549__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23174_23550__$1)){
var c__5525__auto___23551 = cljs.core.chunk_first(seq__23174_23550__$1);
var G__23552 = cljs.core.chunk_rest(seq__23174_23550__$1);
var G__23553 = c__5525__auto___23551;
var G__23554 = cljs.core.count(c__5525__auto___23551);
var G__23555 = (0);
seq__23174_23534 = G__23552;
chunk__23176_23535 = G__23553;
count__23177_23536 = G__23554;
i__23178_23537 = G__23555;
continue;
} else {
var map__23187_23556 = cljs.core.first(seq__23174_23550__$1);
var map__23187_23557__$1 = cljs.core.__destructure_map(map__23187_23556);
var task_23558 = map__23187_23557__$1;
var fn_str_23559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187_23557__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23187_23557__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23561 = goog.getObjectByName(fn_str_23559,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23560)].join(''));

(fn_obj_23561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23561.cljs$core$IFn$_invoke$arity$2(path,new_link_23532) : fn_obj_23561.call(null, path,new_link_23532));


var G__23562 = cljs.core.next(seq__23174_23550__$1);
var G__23563 = null;
var G__23564 = (0);
var G__23565 = (0);
seq__23174_23534 = G__23562;
chunk__23176_23535 = G__23563;
count__23177_23536 = G__23564;
i__23178_23537 = G__23565;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23529);
});})(seq__23123_23471,chunk__23127_23472,count__23128_23473,i__23129_23474,seq__22898,chunk__22900,count__22901,i__22902,new_link_23532,path_match_23531,node_23529,seq__23123_23523__$1,temp__5804__auto___23522__$1,path,seq__22898__$1,temp__5804__auto__,map__22897,map__22897__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23531], 0));

goog.dom.insertSiblingAfter(new_link_23532,node_23529);


var G__23567 = cljs.core.next(seq__23123_23523__$1);
var G__23568 = null;
var G__23569 = (0);
var G__23570 = (0);
seq__23123_23471 = G__23567;
chunk__23127_23472 = G__23568;
count__23128_23473 = G__23569;
i__23129_23474 = G__23570;
continue;
} else {
var G__23571 = cljs.core.next(seq__23123_23523__$1);
var G__23572 = null;
var G__23573 = (0);
var G__23574 = (0);
seq__23123_23471 = G__23571;
chunk__23127_23472 = G__23572;
count__23128_23473 = G__23573;
i__23129_23474 = G__23574;
continue;
}
} else {
var G__23575 = cljs.core.next(seq__23123_23523__$1);
var G__23576 = null;
var G__23577 = (0);
var G__23578 = (0);
seq__23123_23471 = G__23575;
chunk__23127_23472 = G__23576;
count__23128_23473 = G__23577;
i__23129_23474 = G__23578;
continue;
}
}
} else {
}
}
break;
}


var G__23579 = cljs.core.next(seq__22898__$1);
var G__23580 = null;
var G__23581 = (0);
var G__23582 = (0);
seq__22898 = G__23579;
chunk__22900 = G__23580;
count__22901 = G__23581;
i__22902 = G__23582;
continue;
} else {
var G__23584 = cljs.core.next(seq__22898__$1);
var G__23585 = null;
var G__23586 = (0);
var G__23587 = (0);
seq__22898 = G__23584;
chunk__22900 = G__23585;
count__22901 = G__23586;
i__22902 = G__23587;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__23196){
var map__23197 = p__23196;
var map__23197__$1 = cljs.core.__destructure_map(map__23197);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23199,done,error){
var map__23200 = p__23199;
var map__23200__$1 = cljs.core.__destructure_map(map__23200);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23200__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23202,done,error){
var map__23203 = p__23202;
var map__23203__$1 = cljs.core.__destructure_map(map__23203);
var msg = map__23203__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23203__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23203__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23203__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23204){
var map__23205 = p__23204;
var map__23205__$1 = cljs.core.__destructure_map(map__23205);
var src = map__23205__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23205__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23207 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23207) : done.call(null, G__23207));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23209){
var map__23210 = p__23209;
var map__23210__$1 = cljs.core.__destructure_map(map__23210);
var msg__$1 = map__23210__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e23211){var ex = e23211;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23213){
var map__23214 = p__23213;
var map__23214__$1 = cljs.core.__destructure_map(map__23214);
var env = map__23214__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23214__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23248){
var map__23249 = p__23248;
var map__23249__$1 = cljs.core.__destructure_map(map__23249);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23249__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23249__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23251){
var map__23252 = p__23251;
var map__23252__$1 = cljs.core.__destructure_map(map__23252);
var svc = map__23252__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23252__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
