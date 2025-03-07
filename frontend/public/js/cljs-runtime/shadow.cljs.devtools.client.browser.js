goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21502 = arguments.length;
var i__5727__auto___21503 = (0);
while(true){
if((i__5727__auto___21503 < len__5726__auto___21502)){
args__5732__auto__.push((arguments[i__5727__auto___21503]));

var G__21504 = (i__5727__auto___21503 + (1));
i__5727__auto___21503 = G__21504;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20895){
var G__20897 = cljs.core.first(seq20895);
var seq20895__$1 = cljs.core.next(seq20895);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20897,seq20895__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20922 = cljs.core.seq(sources);
var chunk__20923 = null;
var count__20924 = (0);
var i__20925 = (0);
while(true){
if((i__20925 < count__20924)){
var map__20941 = chunk__20923.cljs$core$IIndexed$_nth$arity$2(null, i__20925);
var map__20941__$1 = cljs.core.__destructure_map(map__20941);
var src = map__20941__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20941__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20941__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20941__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20941__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20944){var e_21505 = e20944;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21505);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21505.message)].join('')));
}

var G__21506 = seq__20922;
var G__21507 = chunk__20923;
var G__21508 = count__20924;
var G__21509 = (i__20925 + (1));
seq__20922 = G__21506;
chunk__20923 = G__21507;
count__20924 = G__21508;
i__20925 = G__21509;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20922);
if(temp__5804__auto__){
var seq__20922__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20922__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20922__$1);
var G__21510 = cljs.core.chunk_rest(seq__20922__$1);
var G__21511 = c__5525__auto__;
var G__21512 = cljs.core.count(c__5525__auto__);
var G__21513 = (0);
seq__20922 = G__21510;
chunk__20923 = G__21511;
count__20924 = G__21512;
i__20925 = G__21513;
continue;
} else {
var map__20950 = cljs.core.first(seq__20922__$1);
var map__20950__$1 = cljs.core.__destructure_map(map__20950);
var src = map__20950__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20950__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20950__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20950__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20955){var e_21514 = e20955;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21514);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21514.message)].join('')));
}

var G__21515 = cljs.core.next(seq__20922__$1);
var G__21516 = null;
var G__21517 = (0);
var G__21518 = (0);
seq__20922 = G__21515;
chunk__20923 = G__21516;
count__20924 = G__21517;
i__20925 = G__21518;
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
var seq__20963 = cljs.core.seq(js_requires);
var chunk__20964 = null;
var count__20965 = (0);
var i__20966 = (0);
while(true){
if((i__20966 < count__20965)){
var js_ns = chunk__20964.cljs$core$IIndexed$_nth$arity$2(null, i__20966);
var require_str_21519 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21519);


var G__21520 = seq__20963;
var G__21521 = chunk__20964;
var G__21522 = count__20965;
var G__21523 = (i__20966 + (1));
seq__20963 = G__21520;
chunk__20964 = G__21521;
count__20965 = G__21522;
i__20966 = G__21523;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20963);
if(temp__5804__auto__){
var seq__20963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20963__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20963__$1);
var G__21524 = cljs.core.chunk_rest(seq__20963__$1);
var G__21525 = c__5525__auto__;
var G__21526 = cljs.core.count(c__5525__auto__);
var G__21527 = (0);
seq__20963 = G__21524;
chunk__20964 = G__21525;
count__20965 = G__21526;
i__20966 = G__21527;
continue;
} else {
var js_ns = cljs.core.first(seq__20963__$1);
var require_str_21528 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21528);


var G__21529 = cljs.core.next(seq__20963__$1);
var G__21530 = null;
var G__21531 = (0);
var G__21532 = (0);
seq__20963 = G__21529;
chunk__20964 = G__21530;
count__20965 = G__21531;
i__20966 = G__21532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20997){
var map__20999 = p__20997;
var map__20999__$1 = cljs.core.__destructure_map(map__20999);
var msg = map__20999__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20999__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20999__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21002(s__21003){
return (new cljs.core.LazySeq(null,(function (){
var s__21003__$1 = s__21003;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21003__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21011 = cljs.core.first(xs__6360__auto__);
var map__21011__$1 = cljs.core.__destructure_map(map__21011);
var src = map__21011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21003__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20999,map__20999__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21002_$_iter__21004(s__21005){
return (new cljs.core.LazySeq(null,((function (s__21003__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20999,map__20999__$1,msg,info,reload_info){
return (function (){
var s__21005__$1 = s__21005;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21005__$1);
if(temp__5804__auto____$1){
var s__21005__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21005__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21005__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21007 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21006 = (0);
while(true){
if((i__21006 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21006);
cljs.core.chunk_append(b__21007,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21533 = (i__21006 + (1));
i__21006 = G__21533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21007),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21002_$_iter__21004(cljs.core.chunk_rest(s__21005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21007),null);
}
} else {
var warning = cljs.core.first(s__21005__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21002_$_iter__21004(cljs.core.rest(s__21005__$2)));
}
} else {
return null;
}
break;
}
});})(s__21003__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20999,map__20999__$1,msg,info,reload_info))
,null,null));
});})(s__21003__$1,map__21011,map__21011__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20999,map__20999__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21002(cljs.core.rest(s__21003__$1)));
} else {
var G__21534 = cljs.core.rest(s__21003__$1);
s__21003__$1 = G__21534;
continue;
}
} else {
var G__21535 = cljs.core.rest(s__21003__$1);
s__21003__$1 = G__21535;
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
var seq__21038_21536 = cljs.core.seq(warnings);
var chunk__21041_21537 = null;
var count__21042_21538 = (0);
var i__21043_21539 = (0);
while(true){
if((i__21043_21539 < count__21042_21538)){
var map__21059_21540 = chunk__21041_21537.cljs$core$IIndexed$_nth$arity$2(null, i__21043_21539);
var map__21059_21541__$1 = cljs.core.__destructure_map(map__21059_21540);
var w_21542 = map__21059_21541__$1;
var msg_21543__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21541__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21541__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21541__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059_21541__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21546)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21544),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21545),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21543__$1)].join(''));


var G__21547 = seq__21038_21536;
var G__21548 = chunk__21041_21537;
var G__21549 = count__21042_21538;
var G__21550 = (i__21043_21539 + (1));
seq__21038_21536 = G__21547;
chunk__21041_21537 = G__21548;
count__21042_21538 = G__21549;
i__21043_21539 = G__21550;
continue;
} else {
var temp__5804__auto___21551 = cljs.core.seq(seq__21038_21536);
if(temp__5804__auto___21551){
var seq__21038_21552__$1 = temp__5804__auto___21551;
if(cljs.core.chunked_seq_QMARK_(seq__21038_21552__$1)){
var c__5525__auto___21553 = cljs.core.chunk_first(seq__21038_21552__$1);
var G__21554 = cljs.core.chunk_rest(seq__21038_21552__$1);
var G__21555 = c__5525__auto___21553;
var G__21556 = cljs.core.count(c__5525__auto___21553);
var G__21557 = (0);
seq__21038_21536 = G__21554;
chunk__21041_21537 = G__21555;
count__21042_21538 = G__21556;
i__21043_21539 = G__21557;
continue;
} else {
var map__21139_21558 = cljs.core.first(seq__21038_21552__$1);
var map__21139_21559__$1 = cljs.core.__destructure_map(map__21139_21558);
var w_21560 = map__21139_21559__$1;
var msg_21561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139_21559__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139_21559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139_21559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21139_21559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21564)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21562),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21563),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21561__$1)].join(''));


var G__21565 = cljs.core.next(seq__21038_21552__$1);
var G__21566 = null;
var G__21567 = (0);
var G__21568 = (0);
seq__21038_21536 = G__21565;
chunk__21041_21537 = G__21566;
count__21042_21538 = G__21567;
i__21043_21539 = G__21568;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20995_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20995_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21156 = node_uri;
G__21156.setQuery(null);

G__21156.setPath(new$);

return G__21156;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21161){
var map__21162 = p__21161;
var map__21162__$1 = cljs.core.__destructure_map(map__21162);
var msg = map__21162__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21163 = cljs.core.seq(updates);
var chunk__21165 = null;
var count__21166 = (0);
var i__21167 = (0);
while(true){
if((i__21167 < count__21166)){
var path = chunk__21165.cljs$core$IIndexed$_nth$arity$2(null, i__21167);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21329_21571 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21333_21572 = null;
var count__21334_21573 = (0);
var i__21335_21574 = (0);
while(true){
if((i__21335_21574 < count__21334_21573)){
var node_21575 = chunk__21333_21572.cljs$core$IIndexed$_nth$arity$2(null, i__21335_21574);
if(cljs.core.not(node_21575.shadow$old)){
var path_match_21576 = shadow.cljs.devtools.client.browser.match_paths(node_21575.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21576)){
var new_link_21577 = (function (){var G__21369 = node_21575.cloneNode(true);
G__21369.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21576),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21369;
})();
(node_21575.shadow$old = true);

(new_link_21577.onload = ((function (seq__21329_21571,chunk__21333_21572,count__21334_21573,i__21335_21574,seq__21163,chunk__21165,count__21166,i__21167,new_link_21577,path_match_21576,node_21575,path,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21370_21578 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21372_21579 = null;
var count__21373_21580 = (0);
var i__21374_21581 = (0);
while(true){
if((i__21374_21581 < count__21373_21580)){
var map__21378_21582 = chunk__21372_21579.cljs$core$IIndexed$_nth$arity$2(null, i__21374_21581);
var map__21378_21583__$1 = cljs.core.__destructure_map(map__21378_21582);
var task_21584 = map__21378_21583__$1;
var fn_str_21585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21583__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378_21583__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21591 = goog.getObjectByName(fn_str_21585,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21586)].join(''));

(fn_obj_21591.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21591.cljs$core$IFn$_invoke$arity$2(path,new_link_21577) : fn_obj_21591.call(null, path,new_link_21577));


var G__21592 = seq__21370_21578;
var G__21593 = chunk__21372_21579;
var G__21594 = count__21373_21580;
var G__21595 = (i__21374_21581 + (1));
seq__21370_21578 = G__21592;
chunk__21372_21579 = G__21593;
count__21373_21580 = G__21594;
i__21374_21581 = G__21595;
continue;
} else {
var temp__5804__auto___21596 = cljs.core.seq(seq__21370_21578);
if(temp__5804__auto___21596){
var seq__21370_21597__$1 = temp__5804__auto___21596;
if(cljs.core.chunked_seq_QMARK_(seq__21370_21597__$1)){
var c__5525__auto___21598 = cljs.core.chunk_first(seq__21370_21597__$1);
var G__21599 = cljs.core.chunk_rest(seq__21370_21597__$1);
var G__21600 = c__5525__auto___21598;
var G__21601 = cljs.core.count(c__5525__auto___21598);
var G__21602 = (0);
seq__21370_21578 = G__21599;
chunk__21372_21579 = G__21600;
count__21373_21580 = G__21601;
i__21374_21581 = G__21602;
continue;
} else {
var map__21379_21603 = cljs.core.first(seq__21370_21597__$1);
var map__21379_21604__$1 = cljs.core.__destructure_map(map__21379_21603);
var task_21605 = map__21379_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)].join(''));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21577) : fn_obj_21608.call(null, path,new_link_21577));


var G__21609 = cljs.core.next(seq__21370_21597__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21370_21578 = G__21609;
chunk__21372_21579 = G__21610;
count__21373_21580 = G__21611;
i__21374_21581 = G__21612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21575);
});})(seq__21329_21571,chunk__21333_21572,count__21334_21573,i__21335_21574,seq__21163,chunk__21165,count__21166,i__21167,new_link_21577,path_match_21576,node_21575,path,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21576], 0));

goog.dom.insertSiblingAfter(new_link_21577,node_21575);


var G__21613 = seq__21329_21571;
var G__21614 = chunk__21333_21572;
var G__21615 = count__21334_21573;
var G__21616 = (i__21335_21574 + (1));
seq__21329_21571 = G__21613;
chunk__21333_21572 = G__21614;
count__21334_21573 = G__21615;
i__21335_21574 = G__21616;
continue;
} else {
var G__21617 = seq__21329_21571;
var G__21618 = chunk__21333_21572;
var G__21619 = count__21334_21573;
var G__21620 = (i__21335_21574 + (1));
seq__21329_21571 = G__21617;
chunk__21333_21572 = G__21618;
count__21334_21573 = G__21619;
i__21335_21574 = G__21620;
continue;
}
} else {
var G__21621 = seq__21329_21571;
var G__21622 = chunk__21333_21572;
var G__21623 = count__21334_21573;
var G__21624 = (i__21335_21574 + (1));
seq__21329_21571 = G__21621;
chunk__21333_21572 = G__21622;
count__21334_21573 = G__21623;
i__21335_21574 = G__21624;
continue;
}
} else {
var temp__5804__auto___21625 = cljs.core.seq(seq__21329_21571);
if(temp__5804__auto___21625){
var seq__21329_21626__$1 = temp__5804__auto___21625;
if(cljs.core.chunked_seq_QMARK_(seq__21329_21626__$1)){
var c__5525__auto___21627 = cljs.core.chunk_first(seq__21329_21626__$1);
var G__21628 = cljs.core.chunk_rest(seq__21329_21626__$1);
var G__21629 = c__5525__auto___21627;
var G__21630 = cljs.core.count(c__5525__auto___21627);
var G__21631 = (0);
seq__21329_21571 = G__21628;
chunk__21333_21572 = G__21629;
count__21334_21573 = G__21630;
i__21335_21574 = G__21631;
continue;
} else {
var node_21632 = cljs.core.first(seq__21329_21626__$1);
if(cljs.core.not(node_21632.shadow$old)){
var path_match_21633 = shadow.cljs.devtools.client.browser.match_paths(node_21632.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21633)){
var new_link_21634 = (function (){var G__21380 = node_21632.cloneNode(true);
G__21380.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21633),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21380;
})();
(node_21632.shadow$old = true);

(new_link_21634.onload = ((function (seq__21329_21571,chunk__21333_21572,count__21334_21573,i__21335_21574,seq__21163,chunk__21165,count__21166,i__21167,new_link_21634,path_match_21633,node_21632,seq__21329_21626__$1,temp__5804__auto___21625,path,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21381_21639 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21383_21640 = null;
var count__21384_21641 = (0);
var i__21385_21642 = (0);
while(true){
if((i__21385_21642 < count__21384_21641)){
var map__21395_21643 = chunk__21383_21640.cljs$core$IIndexed$_nth$arity$2(null, i__21385_21642);
var map__21395_21644__$1 = cljs.core.__destructure_map(map__21395_21643);
var task_21645 = map__21395_21644__$1;
var fn_str_21646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395_21644__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21395_21644__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21648 = goog.getObjectByName(fn_str_21646,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21647)].join(''));

(fn_obj_21648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21648.cljs$core$IFn$_invoke$arity$2(path,new_link_21634) : fn_obj_21648.call(null, path,new_link_21634));


var G__21649 = seq__21381_21639;
var G__21650 = chunk__21383_21640;
var G__21651 = count__21384_21641;
var G__21652 = (i__21385_21642 + (1));
seq__21381_21639 = G__21649;
chunk__21383_21640 = G__21650;
count__21384_21641 = G__21651;
i__21385_21642 = G__21652;
continue;
} else {
var temp__5804__auto___21653__$1 = cljs.core.seq(seq__21381_21639);
if(temp__5804__auto___21653__$1){
var seq__21381_21654__$1 = temp__5804__auto___21653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21381_21654__$1)){
var c__5525__auto___21655 = cljs.core.chunk_first(seq__21381_21654__$1);
var G__21656 = cljs.core.chunk_rest(seq__21381_21654__$1);
var G__21657 = c__5525__auto___21655;
var G__21658 = cljs.core.count(c__5525__auto___21655);
var G__21659 = (0);
seq__21381_21639 = G__21656;
chunk__21383_21640 = G__21657;
count__21384_21641 = G__21658;
i__21385_21642 = G__21659;
continue;
} else {
var map__21399_21660 = cljs.core.first(seq__21381_21654__$1);
var map__21399_21661__$1 = cljs.core.__destructure_map(map__21399_21660);
var task_21662 = map__21399_21661__$1;
var fn_str_21663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399_21661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399_21661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21665 = goog.getObjectByName(fn_str_21663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21664)].join(''));

(fn_obj_21665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21665.cljs$core$IFn$_invoke$arity$2(path,new_link_21634) : fn_obj_21665.call(null, path,new_link_21634));


var G__21666 = cljs.core.next(seq__21381_21654__$1);
var G__21667 = null;
var G__21668 = (0);
var G__21669 = (0);
seq__21381_21639 = G__21666;
chunk__21383_21640 = G__21667;
count__21384_21641 = G__21668;
i__21385_21642 = G__21669;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21632);
});})(seq__21329_21571,chunk__21333_21572,count__21334_21573,i__21335_21574,seq__21163,chunk__21165,count__21166,i__21167,new_link_21634,path_match_21633,node_21632,seq__21329_21626__$1,temp__5804__auto___21625,path,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21633], 0));

goog.dom.insertSiblingAfter(new_link_21634,node_21632);


var G__21670 = cljs.core.next(seq__21329_21626__$1);
var G__21671 = null;
var G__21672 = (0);
var G__21673 = (0);
seq__21329_21571 = G__21670;
chunk__21333_21572 = G__21671;
count__21334_21573 = G__21672;
i__21335_21574 = G__21673;
continue;
} else {
var G__21674 = cljs.core.next(seq__21329_21626__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21329_21571 = G__21674;
chunk__21333_21572 = G__21675;
count__21334_21573 = G__21676;
i__21335_21574 = G__21677;
continue;
}
} else {
var G__21678 = cljs.core.next(seq__21329_21626__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21329_21571 = G__21678;
chunk__21333_21572 = G__21679;
count__21334_21573 = G__21680;
i__21335_21574 = G__21681;
continue;
}
}
} else {
}
}
break;
}


var G__21682 = seq__21163;
var G__21683 = chunk__21165;
var G__21684 = count__21166;
var G__21685 = (i__21167 + (1));
seq__21163 = G__21682;
chunk__21165 = G__21683;
count__21166 = G__21684;
i__21167 = G__21685;
continue;
} else {
var G__21686 = seq__21163;
var G__21687 = chunk__21165;
var G__21688 = count__21166;
var G__21689 = (i__21167 + (1));
seq__21163 = G__21686;
chunk__21165 = G__21687;
count__21166 = G__21688;
i__21167 = G__21689;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21163);
if(temp__5804__auto__){
var seq__21163__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21163__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21163__$1);
var G__21690 = cljs.core.chunk_rest(seq__21163__$1);
var G__21691 = c__5525__auto__;
var G__21692 = cljs.core.count(c__5525__auto__);
var G__21693 = (0);
seq__21163 = G__21690;
chunk__21165 = G__21691;
count__21166 = G__21692;
i__21167 = G__21693;
continue;
} else {
var path = cljs.core.first(seq__21163__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21400_21694 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21404_21695 = null;
var count__21405_21696 = (0);
var i__21406_21697 = (0);
while(true){
if((i__21406_21697 < count__21405_21696)){
var node_21698 = chunk__21404_21695.cljs$core$IIndexed$_nth$arity$2(null, i__21406_21697);
if(cljs.core.not(node_21698.shadow$old)){
var path_match_21699 = shadow.cljs.devtools.client.browser.match_paths(node_21698.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21699)){
var new_link_21700 = (function (){var G__21441 = node_21698.cloneNode(true);
G__21441.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21699),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21441;
})();
(node_21698.shadow$old = true);

(new_link_21700.onload = ((function (seq__21400_21694,chunk__21404_21695,count__21405_21696,i__21406_21697,seq__21163,chunk__21165,count__21166,i__21167,new_link_21700,path_match_21699,node_21698,path,seq__21163__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21442_21702 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21444_21703 = null;
var count__21445_21704 = (0);
var i__21446_21705 = (0);
while(true){
if((i__21446_21705 < count__21445_21704)){
var map__21453_21706 = chunk__21444_21703.cljs$core$IIndexed$_nth$arity$2(null, i__21446_21705);
var map__21453_21707__$1 = cljs.core.__destructure_map(map__21453_21706);
var task_21708 = map__21453_21707__$1;
var fn_str_21709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21707__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21707__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21711 = goog.getObjectByName(fn_str_21709,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21710)].join(''));

(fn_obj_21711.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21711.cljs$core$IFn$_invoke$arity$2(path,new_link_21700) : fn_obj_21711.call(null, path,new_link_21700));


var G__21712 = seq__21442_21702;
var G__21713 = chunk__21444_21703;
var G__21714 = count__21445_21704;
var G__21715 = (i__21446_21705 + (1));
seq__21442_21702 = G__21712;
chunk__21444_21703 = G__21713;
count__21445_21704 = G__21714;
i__21446_21705 = G__21715;
continue;
} else {
var temp__5804__auto___21716__$1 = cljs.core.seq(seq__21442_21702);
if(temp__5804__auto___21716__$1){
var seq__21442_21717__$1 = temp__5804__auto___21716__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21442_21717__$1)){
var c__5525__auto___21718 = cljs.core.chunk_first(seq__21442_21717__$1);
var G__21719 = cljs.core.chunk_rest(seq__21442_21717__$1);
var G__21720 = c__5525__auto___21718;
var G__21721 = cljs.core.count(c__5525__auto___21718);
var G__21722 = (0);
seq__21442_21702 = G__21719;
chunk__21444_21703 = G__21720;
count__21445_21704 = G__21721;
i__21446_21705 = G__21722;
continue;
} else {
var map__21454_21723 = cljs.core.first(seq__21442_21717__$1);
var map__21454_21724__$1 = cljs.core.__destructure_map(map__21454_21723);
var task_21725 = map__21454_21724__$1;
var fn_str_21726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21454_21724__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21454_21724__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21730 = goog.getObjectByName(fn_str_21726,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21727)].join(''));

(fn_obj_21730.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21730.cljs$core$IFn$_invoke$arity$2(path,new_link_21700) : fn_obj_21730.call(null, path,new_link_21700));


var G__21731 = cljs.core.next(seq__21442_21717__$1);
var G__21732 = null;
var G__21733 = (0);
var G__21734 = (0);
seq__21442_21702 = G__21731;
chunk__21444_21703 = G__21732;
count__21445_21704 = G__21733;
i__21446_21705 = G__21734;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21698);
});})(seq__21400_21694,chunk__21404_21695,count__21405_21696,i__21406_21697,seq__21163,chunk__21165,count__21166,i__21167,new_link_21700,path_match_21699,node_21698,path,seq__21163__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21699], 0));

goog.dom.insertSiblingAfter(new_link_21700,node_21698);


var G__21735 = seq__21400_21694;
var G__21736 = chunk__21404_21695;
var G__21737 = count__21405_21696;
var G__21738 = (i__21406_21697 + (1));
seq__21400_21694 = G__21735;
chunk__21404_21695 = G__21736;
count__21405_21696 = G__21737;
i__21406_21697 = G__21738;
continue;
} else {
var G__21739 = seq__21400_21694;
var G__21740 = chunk__21404_21695;
var G__21741 = count__21405_21696;
var G__21742 = (i__21406_21697 + (1));
seq__21400_21694 = G__21739;
chunk__21404_21695 = G__21740;
count__21405_21696 = G__21741;
i__21406_21697 = G__21742;
continue;
}
} else {
var G__21743 = seq__21400_21694;
var G__21744 = chunk__21404_21695;
var G__21745 = count__21405_21696;
var G__21746 = (i__21406_21697 + (1));
seq__21400_21694 = G__21743;
chunk__21404_21695 = G__21744;
count__21405_21696 = G__21745;
i__21406_21697 = G__21746;
continue;
}
} else {
var temp__5804__auto___21747__$1 = cljs.core.seq(seq__21400_21694);
if(temp__5804__auto___21747__$1){
var seq__21400_21748__$1 = temp__5804__auto___21747__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21400_21748__$1)){
var c__5525__auto___21749 = cljs.core.chunk_first(seq__21400_21748__$1);
var G__21750 = cljs.core.chunk_rest(seq__21400_21748__$1);
var G__21751 = c__5525__auto___21749;
var G__21752 = cljs.core.count(c__5525__auto___21749);
var G__21753 = (0);
seq__21400_21694 = G__21750;
chunk__21404_21695 = G__21751;
count__21405_21696 = G__21752;
i__21406_21697 = G__21753;
continue;
} else {
var node_21754 = cljs.core.first(seq__21400_21748__$1);
if(cljs.core.not(node_21754.shadow$old)){
var path_match_21755 = shadow.cljs.devtools.client.browser.match_paths(node_21754.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21755)){
var new_link_21756 = (function (){var G__21455 = node_21754.cloneNode(true);
G__21455.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21755),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21455;
})();
(node_21754.shadow$old = true);

(new_link_21756.onload = ((function (seq__21400_21694,chunk__21404_21695,count__21405_21696,i__21406_21697,seq__21163,chunk__21165,count__21166,i__21167,new_link_21756,path_match_21755,node_21754,seq__21400_21748__$1,temp__5804__auto___21747__$1,path,seq__21163__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info){
return (function (e){
var seq__21456_21757 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21458_21758 = null;
var count__21459_21759 = (0);
var i__21460_21760 = (0);
while(true){
if((i__21460_21760 < count__21459_21759)){
var map__21464_21761 = chunk__21458_21758.cljs$core$IIndexed$_nth$arity$2(null, i__21460_21760);
var map__21464_21762__$1 = cljs.core.__destructure_map(map__21464_21761);
var task_21763 = map__21464_21762__$1;
var fn_str_21764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21766 = goog.getObjectByName(fn_str_21764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21765)].join(''));

(fn_obj_21766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21766.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21766.call(null, path,new_link_21756));


var G__21767 = seq__21456_21757;
var G__21768 = chunk__21458_21758;
var G__21769 = count__21459_21759;
var G__21770 = (i__21460_21760 + (1));
seq__21456_21757 = G__21767;
chunk__21458_21758 = G__21768;
count__21459_21759 = G__21769;
i__21460_21760 = G__21770;
continue;
} else {
var temp__5804__auto___21771__$2 = cljs.core.seq(seq__21456_21757);
if(temp__5804__auto___21771__$2){
var seq__21456_21772__$1 = temp__5804__auto___21771__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21456_21772__$1)){
var c__5525__auto___21773 = cljs.core.chunk_first(seq__21456_21772__$1);
var G__21774 = cljs.core.chunk_rest(seq__21456_21772__$1);
var G__21775 = c__5525__auto___21773;
var G__21776 = cljs.core.count(c__5525__auto___21773);
var G__21777 = (0);
seq__21456_21757 = G__21774;
chunk__21458_21758 = G__21775;
count__21459_21759 = G__21776;
i__21460_21760 = G__21777;
continue;
} else {
var map__21468_21778 = cljs.core.first(seq__21456_21772__$1);
var map__21468_21779__$1 = cljs.core.__destructure_map(map__21468_21778);
var task_21780 = map__21468_21779__$1;
var fn_str_21781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21468_21779__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21468_21779__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21787 = goog.getObjectByName(fn_str_21781,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21782)].join(''));

(fn_obj_21787.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21787.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21787.call(null, path,new_link_21756));


var G__21788 = cljs.core.next(seq__21456_21772__$1);
var G__21789 = null;
var G__21790 = (0);
var G__21791 = (0);
seq__21456_21757 = G__21788;
chunk__21458_21758 = G__21789;
count__21459_21759 = G__21790;
i__21460_21760 = G__21791;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21754);
});})(seq__21400_21694,chunk__21404_21695,count__21405_21696,i__21406_21697,seq__21163,chunk__21165,count__21166,i__21167,new_link_21756,path_match_21755,node_21754,seq__21400_21748__$1,temp__5804__auto___21747__$1,path,seq__21163__$1,temp__5804__auto__,map__21162,map__21162__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21755], 0));

goog.dom.insertSiblingAfter(new_link_21756,node_21754);


var G__21792 = cljs.core.next(seq__21400_21748__$1);
var G__21793 = null;
var G__21794 = (0);
var G__21795 = (0);
seq__21400_21694 = G__21792;
chunk__21404_21695 = G__21793;
count__21405_21696 = G__21794;
i__21406_21697 = G__21795;
continue;
} else {
var G__21796 = cljs.core.next(seq__21400_21748__$1);
var G__21797 = null;
var G__21798 = (0);
var G__21799 = (0);
seq__21400_21694 = G__21796;
chunk__21404_21695 = G__21797;
count__21405_21696 = G__21798;
i__21406_21697 = G__21799;
continue;
}
} else {
var G__21800 = cljs.core.next(seq__21400_21748__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21400_21694 = G__21800;
chunk__21404_21695 = G__21801;
count__21405_21696 = G__21802;
i__21406_21697 = G__21803;
continue;
}
}
} else {
}
}
break;
}


var G__21804 = cljs.core.next(seq__21163__$1);
var G__21805 = null;
var G__21806 = (0);
var G__21807 = (0);
seq__21163 = G__21804;
chunk__21165 = G__21805;
count__21166 = G__21806;
i__21167 = G__21807;
continue;
} else {
var G__21808 = cljs.core.next(seq__21163__$1);
var G__21809 = null;
var G__21810 = (0);
var G__21811 = (0);
seq__21163 = G__21808;
chunk__21165 = G__21809;
count__21166 = G__21810;
i__21167 = G__21811;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21473){
var map__21474 = p__21473;
var map__21474__$1 = cljs.core.__destructure_map(map__21474);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21474__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21475,done,error){
var map__21476 = p__21475;
var map__21476__$1 = cljs.core.__destructure_map(map__21476);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21479,done,error){
var map__21480 = p__21479;
var map__21480__$1 = cljs.core.__destructure_map(map__21480);
var msg = map__21480__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21481){
var map__21482 = p__21481;
var map__21482__$1 = cljs.core.__destructure_map(map__21482);
var src = map__21482__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21482__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21483 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21483) : done.call(null, G__21483));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21484){
var map__21485 = p__21484;
var map__21485__$1 = cljs.core.__destructure_map(map__21485);
var msg__$1 = map__21485__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21486){var ex = e21486;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21488){
var map__21489 = p__21488;
var map__21489__$1 = cljs.core.__destructure_map(map__21489);
var env = map__21489__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21496){
var map__21498 = p__21496;
var map__21498__$1 = cljs.core.__destructure_map(map__21498);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21499){
var map__21500 = p__21499;
var map__21500__$1 = cljs.core.__destructure_map(map__21500);
var svc = map__21500__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21500__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
