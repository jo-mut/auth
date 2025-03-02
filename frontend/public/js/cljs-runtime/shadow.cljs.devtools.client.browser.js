goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21509 = arguments.length;
var i__5727__auto___21510 = (0);
while(true){
if((i__5727__auto___21510 < len__5726__auto___21509)){
args__5732__auto__.push((arguments[i__5727__auto___21510]));

var G__21515 = (i__5727__auto___21510 + (1));
i__5727__auto___21510 = G__21515;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20944){
var G__20945 = cljs.core.first(seq20944);
var seq20944__$1 = cljs.core.next(seq20944);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20945,seq20944__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20978 = cljs.core.seq(sources);
var chunk__20979 = null;
var count__20980 = (0);
var i__20981 = (0);
while(true){
if((i__20981 < count__20980)){
var map__21008 = chunk__20979.cljs$core$IIndexed$_nth$arity$2(null, i__20981);
var map__21008__$1 = cljs.core.__destructure_map(map__21008);
var src = map__21008__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21008__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21012){var e_21516 = e21012;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21516);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21516.message)].join('')));
}

var G__21517 = seq__20978;
var G__21518 = chunk__20979;
var G__21519 = count__20980;
var G__21520 = (i__20981 + (1));
seq__20978 = G__21517;
chunk__20979 = G__21518;
count__20980 = G__21519;
i__20981 = G__21520;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20978);
if(temp__5804__auto__){
var seq__20978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20978__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20978__$1);
var G__21521 = cljs.core.chunk_rest(seq__20978__$1);
var G__21522 = c__5525__auto__;
var G__21523 = cljs.core.count(c__5525__auto__);
var G__21524 = (0);
seq__20978 = G__21521;
chunk__20979 = G__21522;
count__20980 = G__21523;
i__20981 = G__21524;
continue;
} else {
var map__21021 = cljs.core.first(seq__20978__$1);
var map__21021__$1 = cljs.core.__destructure_map(map__21021);
var src = map__21021__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21021__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21025){var e_21525 = e21025;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21525);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21525.message)].join('')));
}

var G__21527 = cljs.core.next(seq__20978__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__20978 = G__21527;
chunk__20979 = G__21528;
count__20980 = G__21529;
i__20981 = G__21530;
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
var seq__21033 = cljs.core.seq(js_requires);
var chunk__21034 = null;
var count__21035 = (0);
var i__21036 = (0);
while(true){
if((i__21036 < count__21035)){
var js_ns = chunk__21034.cljs$core$IIndexed$_nth$arity$2(null, i__21036);
var require_str_21531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21531);


var G__21532 = seq__21033;
var G__21533 = chunk__21034;
var G__21534 = count__21035;
var G__21535 = (i__21036 + (1));
seq__21033 = G__21532;
chunk__21034 = G__21533;
count__21035 = G__21534;
i__21036 = G__21535;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21033);
if(temp__5804__auto__){
var seq__21033__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21033__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21033__$1);
var G__21536 = cljs.core.chunk_rest(seq__21033__$1);
var G__21537 = c__5525__auto__;
var G__21538 = cljs.core.count(c__5525__auto__);
var G__21539 = (0);
seq__21033 = G__21536;
chunk__21034 = G__21537;
count__21035 = G__21538;
i__21036 = G__21539;
continue;
} else {
var js_ns = cljs.core.first(seq__21033__$1);
var require_str_21540 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21540);


var G__21541 = cljs.core.next(seq__21033__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__21033 = G__21541;
chunk__21034 = G__21542;
count__21035 = G__21543;
i__21036 = G__21544;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21038){
var map__21039 = p__21038;
var map__21039__$1 = cljs.core.__destructure_map(map__21039);
var msg = map__21039__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21039__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21040(s__21041){
return (new cljs.core.LazySeq(null,(function (){
var s__21041__$1 = s__21041;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21041__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21061 = cljs.core.first(xs__6360__auto__);
var map__21061__$1 = cljs.core.__destructure_map(map__21061);
var src = map__21061__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21041__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21039,map__21039__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21040_$_iter__21042(s__21043){
return (new cljs.core.LazySeq(null,((function (s__21041__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21039,map__21039__$1,msg,info,reload_info){
return (function (){
var s__21043__$1 = s__21043;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21043__$1);
if(temp__5804__auto____$1){
var s__21043__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21043__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21043__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21045 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21044 = (0);
while(true){
if((i__21044 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21044);
cljs.core.chunk_append(b__21045,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21548 = (i__21044 + (1));
i__21044 = G__21548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21045),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21040_$_iter__21042(cljs.core.chunk_rest(s__21043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21045),null);
}
} else {
var warning = cljs.core.first(s__21043__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21040_$_iter__21042(cljs.core.rest(s__21043__$2)));
}
} else {
return null;
}
break;
}
});})(s__21041__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21039,map__21039__$1,msg,info,reload_info))
,null,null));
});})(s__21041__$1,map__21061,map__21061__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21039,map__21039__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21040(cljs.core.rest(s__21041__$1)));
} else {
var G__21552 = cljs.core.rest(s__21041__$1);
s__21041__$1 = G__21552;
continue;
}
} else {
var G__21553 = cljs.core.rest(s__21041__$1);
s__21041__$1 = G__21553;
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
var seq__21096_21554 = cljs.core.seq(warnings);
var chunk__21099_21555 = null;
var count__21100_21556 = (0);
var i__21101_21557 = (0);
while(true){
if((i__21101_21557 < count__21100_21556)){
var map__21160_21558 = chunk__21099_21555.cljs$core$IIndexed$_nth$arity$2(null, i__21101_21557);
var map__21160_21559__$1 = cljs.core.__destructure_map(map__21160_21558);
var w_21560 = map__21160_21559__$1;
var msg_21561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21559__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21559__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21559__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21559__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21564)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21562),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21563),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21561__$1)].join(''));


var G__21565 = seq__21096_21554;
var G__21566 = chunk__21099_21555;
var G__21567 = count__21100_21556;
var G__21568 = (i__21101_21557 + (1));
seq__21096_21554 = G__21565;
chunk__21099_21555 = G__21566;
count__21100_21556 = G__21567;
i__21101_21557 = G__21568;
continue;
} else {
var temp__5804__auto___21569 = cljs.core.seq(seq__21096_21554);
if(temp__5804__auto___21569){
var seq__21096_21570__$1 = temp__5804__auto___21569;
if(cljs.core.chunked_seq_QMARK_(seq__21096_21570__$1)){
var c__5525__auto___21571 = cljs.core.chunk_first(seq__21096_21570__$1);
var G__21572 = cljs.core.chunk_rest(seq__21096_21570__$1);
var G__21573 = c__5525__auto___21571;
var G__21574 = cljs.core.count(c__5525__auto___21571);
var G__21575 = (0);
seq__21096_21554 = G__21572;
chunk__21099_21555 = G__21573;
count__21100_21556 = G__21574;
i__21101_21557 = G__21575;
continue;
} else {
var map__21167_21576 = cljs.core.first(seq__21096_21570__$1);
var map__21167_21577__$1 = cljs.core.__destructure_map(map__21167_21576);
var w_21578 = map__21167_21577__$1;
var msg_21579__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21577__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21577__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21577__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167_21577__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21582)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21580),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21581),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21579__$1)].join(''));


var G__21583 = cljs.core.next(seq__21096_21570__$1);
var G__21584 = null;
var G__21585 = (0);
var G__21586 = (0);
seq__21096_21554 = G__21583;
chunk__21099_21555 = G__21584;
count__21100_21556 = G__21585;
i__21101_21557 = G__21586;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21037_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21037_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21185 = node_uri;
G__21185.setQuery(null);

G__21185.setPath(new$);

return G__21185;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21187){
var map__21188 = p__21187;
var map__21188__$1 = cljs.core.__destructure_map(map__21188);
var msg = map__21188__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21188__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21189 = cljs.core.seq(updates);
var chunk__21191 = null;
var count__21192 = (0);
var i__21193 = (0);
while(true){
if((i__21193 < count__21192)){
var path = chunk__21191.cljs$core$IIndexed$_nth$arity$2(null, i__21193);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21343_21587 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21347_21588 = null;
var count__21348_21589 = (0);
var i__21349_21590 = (0);
while(true){
if((i__21349_21590 < count__21348_21589)){
var node_21591 = chunk__21347_21588.cljs$core$IIndexed$_nth$arity$2(null, i__21349_21590);
if(cljs.core.not(node_21591.shadow$old)){
var path_match_21592 = shadow.cljs.devtools.client.browser.match_paths(node_21591.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21592)){
var new_link_21593 = (function (){var G__21381 = node_21591.cloneNode(true);
G__21381.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21592),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21381;
})();
(node_21591.shadow$old = true);

(new_link_21593.onload = ((function (seq__21343_21587,chunk__21347_21588,count__21348_21589,i__21349_21590,seq__21189,chunk__21191,count__21192,i__21193,new_link_21593,path_match_21592,node_21591,path,map__21188,map__21188__$1,msg,updates,reload_info){
return (function (e){
var seq__21385_21594 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21387_21595 = null;
var count__21388_21596 = (0);
var i__21389_21597 = (0);
while(true){
if((i__21389_21597 < count__21388_21596)){
var map__21393_21600 = chunk__21387_21595.cljs$core$IIndexed$_nth$arity$2(null, i__21389_21597);
var map__21393_21601__$1 = cljs.core.__destructure_map(map__21393_21600);
var task_21602 = map__21393_21601__$1;
var fn_str_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21601__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21601__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21605 = goog.getObjectByName(fn_str_21603,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21604)].join(''));

(fn_obj_21605.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21605.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21605.call(null, path,new_link_21593));


var G__21606 = seq__21385_21594;
var G__21607 = chunk__21387_21595;
var G__21608 = count__21388_21596;
var G__21609 = (i__21389_21597 + (1));
seq__21385_21594 = G__21606;
chunk__21387_21595 = G__21607;
count__21388_21596 = G__21608;
i__21389_21597 = G__21609;
continue;
} else {
var temp__5804__auto___21610 = cljs.core.seq(seq__21385_21594);
if(temp__5804__auto___21610){
var seq__21385_21612__$1 = temp__5804__auto___21610;
if(cljs.core.chunked_seq_QMARK_(seq__21385_21612__$1)){
var c__5525__auto___21614 = cljs.core.chunk_first(seq__21385_21612__$1);
var G__21615 = cljs.core.chunk_rest(seq__21385_21612__$1);
var G__21616 = c__5525__auto___21614;
var G__21617 = cljs.core.count(c__5525__auto___21614);
var G__21618 = (0);
seq__21385_21594 = G__21615;
chunk__21387_21595 = G__21616;
count__21388_21596 = G__21617;
i__21389_21597 = G__21618;
continue;
} else {
var map__21394_21619 = cljs.core.first(seq__21385_21612__$1);
var map__21394_21620__$1 = cljs.core.__destructure_map(map__21394_21619);
var task_21621 = map__21394_21620__$1;
var fn_str_21622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21620__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394_21620__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21624 = goog.getObjectByName(fn_str_21622,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21623)].join(''));

(fn_obj_21624.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21624.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21624.call(null, path,new_link_21593));


var G__21625 = cljs.core.next(seq__21385_21612__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21385_21594 = G__21625;
chunk__21387_21595 = G__21626;
count__21388_21596 = G__21627;
i__21389_21597 = G__21628;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21591);
});})(seq__21343_21587,chunk__21347_21588,count__21348_21589,i__21349_21590,seq__21189,chunk__21191,count__21192,i__21193,new_link_21593,path_match_21592,node_21591,path,map__21188,map__21188__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21592], 0));

goog.dom.insertSiblingAfter(new_link_21593,node_21591);


var G__21629 = seq__21343_21587;
var G__21630 = chunk__21347_21588;
var G__21631 = count__21348_21589;
var G__21632 = (i__21349_21590 + (1));
seq__21343_21587 = G__21629;
chunk__21347_21588 = G__21630;
count__21348_21589 = G__21631;
i__21349_21590 = G__21632;
continue;
} else {
var G__21633 = seq__21343_21587;
var G__21634 = chunk__21347_21588;
var G__21635 = count__21348_21589;
var G__21636 = (i__21349_21590 + (1));
seq__21343_21587 = G__21633;
chunk__21347_21588 = G__21634;
count__21348_21589 = G__21635;
i__21349_21590 = G__21636;
continue;
}
} else {
var G__21637 = seq__21343_21587;
var G__21638 = chunk__21347_21588;
var G__21639 = count__21348_21589;
var G__21640 = (i__21349_21590 + (1));
seq__21343_21587 = G__21637;
chunk__21347_21588 = G__21638;
count__21348_21589 = G__21639;
i__21349_21590 = G__21640;
continue;
}
} else {
var temp__5804__auto___21641 = cljs.core.seq(seq__21343_21587);
if(temp__5804__auto___21641){
var seq__21343_21642__$1 = temp__5804__auto___21641;
if(cljs.core.chunked_seq_QMARK_(seq__21343_21642__$1)){
var c__5525__auto___21643 = cljs.core.chunk_first(seq__21343_21642__$1);
var G__21644 = cljs.core.chunk_rest(seq__21343_21642__$1);
var G__21645 = c__5525__auto___21643;
var G__21646 = cljs.core.count(c__5525__auto___21643);
var G__21647 = (0);
seq__21343_21587 = G__21644;
chunk__21347_21588 = G__21645;
count__21348_21589 = G__21646;
i__21349_21590 = G__21647;
continue;
} else {
var node_21648 = cljs.core.first(seq__21343_21642__$1);
if(cljs.core.not(node_21648.shadow$old)){
var path_match_21649 = shadow.cljs.devtools.client.browser.match_paths(node_21648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21649)){
var new_link_21650 = (function (){var G__21395 = node_21648.cloneNode(true);
G__21395.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21395;
})();
(node_21648.shadow$old = true);

(new_link_21650.onload = ((function (seq__21343_21587,chunk__21347_21588,count__21348_21589,i__21349_21590,seq__21189,chunk__21191,count__21192,i__21193,new_link_21650,path_match_21649,node_21648,seq__21343_21642__$1,temp__5804__auto___21641,path,map__21188,map__21188__$1,msg,updates,reload_info){
return (function (e){
var seq__21396_21651 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21398_21652 = null;
var count__21399_21653 = (0);
var i__21400_21654 = (0);
while(true){
if((i__21400_21654 < count__21399_21653)){
var map__21407_21655 = chunk__21398_21652.cljs$core$IIndexed$_nth$arity$2(null, i__21400_21654);
var map__21407_21656__$1 = cljs.core.__destructure_map(map__21407_21655);
var task_21657 = map__21407_21656__$1;
var fn_str_21658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407_21656__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407_21656__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21660 = goog.getObjectByName(fn_str_21658,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21659)].join(''));

(fn_obj_21660.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21660.cljs$core$IFn$_invoke$arity$2(path,new_link_21650) : fn_obj_21660.call(null, path,new_link_21650));


var G__21661 = seq__21396_21651;
var G__21662 = chunk__21398_21652;
var G__21663 = count__21399_21653;
var G__21664 = (i__21400_21654 + (1));
seq__21396_21651 = G__21661;
chunk__21398_21652 = G__21662;
count__21399_21653 = G__21663;
i__21400_21654 = G__21664;
continue;
} else {
var temp__5804__auto___21665__$1 = cljs.core.seq(seq__21396_21651);
if(temp__5804__auto___21665__$1){
var seq__21396_21666__$1 = temp__5804__auto___21665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21396_21666__$1)){
var c__5525__auto___21667 = cljs.core.chunk_first(seq__21396_21666__$1);
var G__21668 = cljs.core.chunk_rest(seq__21396_21666__$1);
var G__21669 = c__5525__auto___21667;
var G__21670 = cljs.core.count(c__5525__auto___21667);
var G__21671 = (0);
seq__21396_21651 = G__21668;
chunk__21398_21652 = G__21669;
count__21399_21653 = G__21670;
i__21400_21654 = G__21671;
continue;
} else {
var map__21410_21672 = cljs.core.first(seq__21396_21666__$1);
var map__21410_21673__$1 = cljs.core.__destructure_map(map__21410_21672);
var task_21674 = map__21410_21673__$1;
var fn_str_21675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21673__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21673__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21679 = goog.getObjectByName(fn_str_21675,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21676)].join(''));

(fn_obj_21679.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21679.cljs$core$IFn$_invoke$arity$2(path,new_link_21650) : fn_obj_21679.call(null, path,new_link_21650));


var G__21680 = cljs.core.next(seq__21396_21666__$1);
var G__21681 = null;
var G__21682 = (0);
var G__21683 = (0);
seq__21396_21651 = G__21680;
chunk__21398_21652 = G__21681;
count__21399_21653 = G__21682;
i__21400_21654 = G__21683;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21648);
});})(seq__21343_21587,chunk__21347_21588,count__21348_21589,i__21349_21590,seq__21189,chunk__21191,count__21192,i__21193,new_link_21650,path_match_21649,node_21648,seq__21343_21642__$1,temp__5804__auto___21641,path,map__21188,map__21188__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21649], 0));

goog.dom.insertSiblingAfter(new_link_21650,node_21648);


var G__21684 = cljs.core.next(seq__21343_21642__$1);
var G__21685 = null;
var G__21686 = (0);
var G__21687 = (0);
seq__21343_21587 = G__21684;
chunk__21347_21588 = G__21685;
count__21348_21589 = G__21686;
i__21349_21590 = G__21687;
continue;
} else {
var G__21688 = cljs.core.next(seq__21343_21642__$1);
var G__21689 = null;
var G__21690 = (0);
var G__21691 = (0);
seq__21343_21587 = G__21688;
chunk__21347_21588 = G__21689;
count__21348_21589 = G__21690;
i__21349_21590 = G__21691;
continue;
}
} else {
var G__21692 = cljs.core.next(seq__21343_21642__$1);
var G__21693 = null;
var G__21694 = (0);
var G__21695 = (0);
seq__21343_21587 = G__21692;
chunk__21347_21588 = G__21693;
count__21348_21589 = G__21694;
i__21349_21590 = G__21695;
continue;
}
}
} else {
}
}
break;
}


var G__21696 = seq__21189;
var G__21697 = chunk__21191;
var G__21698 = count__21192;
var G__21699 = (i__21193 + (1));
seq__21189 = G__21696;
chunk__21191 = G__21697;
count__21192 = G__21698;
i__21193 = G__21699;
continue;
} else {
var G__21700 = seq__21189;
var G__21701 = chunk__21191;
var G__21702 = count__21192;
var G__21703 = (i__21193 + (1));
seq__21189 = G__21700;
chunk__21191 = G__21701;
count__21192 = G__21702;
i__21193 = G__21703;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21189);
if(temp__5804__auto__){
var seq__21189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21189__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21189__$1);
var G__21704 = cljs.core.chunk_rest(seq__21189__$1);
var G__21705 = c__5525__auto__;
var G__21706 = cljs.core.count(c__5525__auto__);
var G__21707 = (0);
seq__21189 = G__21704;
chunk__21191 = G__21705;
count__21192 = G__21706;
i__21193 = G__21707;
continue;
} else {
var path = cljs.core.first(seq__21189__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21411_21708 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21415_21709 = null;
var count__21416_21710 = (0);
var i__21417_21711 = (0);
while(true){
if((i__21417_21711 < count__21416_21710)){
var node_21712 = chunk__21415_21709.cljs$core$IIndexed$_nth$arity$2(null, i__21417_21711);
if(cljs.core.not(node_21712.shadow$old)){
var path_match_21713 = shadow.cljs.devtools.client.browser.match_paths(node_21712.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21713)){
var new_link_21714 = (function (){var G__21454 = node_21712.cloneNode(true);
G__21454.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21713),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21454;
})();
(node_21712.shadow$old = true);

(new_link_21714.onload = ((function (seq__21411_21708,chunk__21415_21709,count__21416_21710,i__21417_21711,seq__21189,chunk__21191,count__21192,i__21193,new_link_21714,path_match_21713,node_21712,path,seq__21189__$1,temp__5804__auto__,map__21188,map__21188__$1,msg,updates,reload_info){
return (function (e){
var seq__21455_21715 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21457_21716 = null;
var count__21458_21717 = (0);
var i__21459_21718 = (0);
while(true){
if((i__21459_21718 < count__21458_21717)){
var map__21464_21719 = chunk__21457_21716.cljs$core$IIndexed$_nth$arity$2(null, i__21459_21718);
var map__21464_21720__$1 = cljs.core.__destructure_map(map__21464_21719);
var task_21721 = map__21464_21720__$1;
var fn_str_21722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21720__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21464_21720__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21724 = goog.getObjectByName(fn_str_21722,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21723)].join(''));

(fn_obj_21724.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21724.cljs$core$IFn$_invoke$arity$2(path,new_link_21714) : fn_obj_21724.call(null, path,new_link_21714));


var G__21725 = seq__21455_21715;
var G__21726 = chunk__21457_21716;
var G__21727 = count__21458_21717;
var G__21728 = (i__21459_21718 + (1));
seq__21455_21715 = G__21725;
chunk__21457_21716 = G__21726;
count__21458_21717 = G__21727;
i__21459_21718 = G__21728;
continue;
} else {
var temp__5804__auto___21729__$1 = cljs.core.seq(seq__21455_21715);
if(temp__5804__auto___21729__$1){
var seq__21455_21730__$1 = temp__5804__auto___21729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21455_21730__$1)){
var c__5525__auto___21731 = cljs.core.chunk_first(seq__21455_21730__$1);
var G__21732 = cljs.core.chunk_rest(seq__21455_21730__$1);
var G__21733 = c__5525__auto___21731;
var G__21734 = cljs.core.count(c__5525__auto___21731);
var G__21735 = (0);
seq__21455_21715 = G__21732;
chunk__21457_21716 = G__21733;
count__21458_21717 = G__21734;
i__21459_21718 = G__21735;
continue;
} else {
var map__21465_21736 = cljs.core.first(seq__21455_21730__$1);
var map__21465_21737__$1 = cljs.core.__destructure_map(map__21465_21736);
var task_21738 = map__21465_21737__$1;
var fn_str_21739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21737__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21465_21737__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21741 = goog.getObjectByName(fn_str_21739,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21740)].join(''));

(fn_obj_21741.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21741.cljs$core$IFn$_invoke$arity$2(path,new_link_21714) : fn_obj_21741.call(null, path,new_link_21714));


var G__21742 = cljs.core.next(seq__21455_21730__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21455_21715 = G__21742;
chunk__21457_21716 = G__21743;
count__21458_21717 = G__21744;
i__21459_21718 = G__21745;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21712);
});})(seq__21411_21708,chunk__21415_21709,count__21416_21710,i__21417_21711,seq__21189,chunk__21191,count__21192,i__21193,new_link_21714,path_match_21713,node_21712,path,seq__21189__$1,temp__5804__auto__,map__21188,map__21188__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21713], 0));

goog.dom.insertSiblingAfter(new_link_21714,node_21712);


var G__21746 = seq__21411_21708;
var G__21747 = chunk__21415_21709;
var G__21748 = count__21416_21710;
var G__21749 = (i__21417_21711 + (1));
seq__21411_21708 = G__21746;
chunk__21415_21709 = G__21747;
count__21416_21710 = G__21748;
i__21417_21711 = G__21749;
continue;
} else {
var G__21750 = seq__21411_21708;
var G__21751 = chunk__21415_21709;
var G__21752 = count__21416_21710;
var G__21753 = (i__21417_21711 + (1));
seq__21411_21708 = G__21750;
chunk__21415_21709 = G__21751;
count__21416_21710 = G__21752;
i__21417_21711 = G__21753;
continue;
}
} else {
var G__21754 = seq__21411_21708;
var G__21755 = chunk__21415_21709;
var G__21756 = count__21416_21710;
var G__21757 = (i__21417_21711 + (1));
seq__21411_21708 = G__21754;
chunk__21415_21709 = G__21755;
count__21416_21710 = G__21756;
i__21417_21711 = G__21757;
continue;
}
} else {
var temp__5804__auto___21758__$1 = cljs.core.seq(seq__21411_21708);
if(temp__5804__auto___21758__$1){
var seq__21411_21759__$1 = temp__5804__auto___21758__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21411_21759__$1)){
var c__5525__auto___21760 = cljs.core.chunk_first(seq__21411_21759__$1);
var G__21761 = cljs.core.chunk_rest(seq__21411_21759__$1);
var G__21762 = c__5525__auto___21760;
var G__21763 = cljs.core.count(c__5525__auto___21760);
var G__21764 = (0);
seq__21411_21708 = G__21761;
chunk__21415_21709 = G__21762;
count__21416_21710 = G__21763;
i__21417_21711 = G__21764;
continue;
} else {
var node_21765 = cljs.core.first(seq__21411_21759__$1);
if(cljs.core.not(node_21765.shadow$old)){
var path_match_21766 = shadow.cljs.devtools.client.browser.match_paths(node_21765.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21766)){
var new_link_21767 = (function (){var G__21467 = node_21765.cloneNode(true);
G__21467.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21766),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21467;
})();
(node_21765.shadow$old = true);

(new_link_21767.onload = ((function (seq__21411_21708,chunk__21415_21709,count__21416_21710,i__21417_21711,seq__21189,chunk__21191,count__21192,i__21193,new_link_21767,path_match_21766,node_21765,seq__21411_21759__$1,temp__5804__auto___21758__$1,path,seq__21189__$1,temp__5804__auto__,map__21188,map__21188__$1,msg,updates,reload_info){
return (function (e){
var seq__21468_21768 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21470_21769 = null;
var count__21471_21770 = (0);
var i__21472_21771 = (0);
while(true){
if((i__21472_21771 < count__21471_21770)){
var map__21476_21772 = chunk__21470_21769.cljs$core$IIndexed$_nth$arity$2(null, i__21472_21771);
var map__21476_21773__$1 = cljs.core.__destructure_map(map__21476_21772);
var task_21774 = map__21476_21773__$1;
var fn_str_21775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21773__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21773__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21777 = goog.getObjectByName(fn_str_21775,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21776)].join(''));

(fn_obj_21777.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21777.cljs$core$IFn$_invoke$arity$2(path,new_link_21767) : fn_obj_21777.call(null, path,new_link_21767));


var G__21778 = seq__21468_21768;
var G__21779 = chunk__21470_21769;
var G__21780 = count__21471_21770;
var G__21781 = (i__21472_21771 + (1));
seq__21468_21768 = G__21778;
chunk__21470_21769 = G__21779;
count__21471_21770 = G__21780;
i__21472_21771 = G__21781;
continue;
} else {
var temp__5804__auto___21782__$2 = cljs.core.seq(seq__21468_21768);
if(temp__5804__auto___21782__$2){
var seq__21468_21783__$1 = temp__5804__auto___21782__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21468_21783__$1)){
var c__5525__auto___21784 = cljs.core.chunk_first(seq__21468_21783__$1);
var G__21785 = cljs.core.chunk_rest(seq__21468_21783__$1);
var G__21786 = c__5525__auto___21784;
var G__21787 = cljs.core.count(c__5525__auto___21784);
var G__21788 = (0);
seq__21468_21768 = G__21785;
chunk__21470_21769 = G__21786;
count__21471_21770 = G__21787;
i__21472_21771 = G__21788;
continue;
} else {
var map__21477_21789 = cljs.core.first(seq__21468_21783__$1);
var map__21477_21790__$1 = cljs.core.__destructure_map(map__21477_21789);
var task_21791 = map__21477_21790__$1;
var fn_str_21792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21790__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477_21790__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21794 = goog.getObjectByName(fn_str_21792,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21793)].join(''));

(fn_obj_21794.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21794.cljs$core$IFn$_invoke$arity$2(path,new_link_21767) : fn_obj_21794.call(null, path,new_link_21767));


var G__21795 = cljs.core.next(seq__21468_21783__$1);
var G__21796 = null;
var G__21797 = (0);
var G__21798 = (0);
seq__21468_21768 = G__21795;
chunk__21470_21769 = G__21796;
count__21471_21770 = G__21797;
i__21472_21771 = G__21798;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21765);
});})(seq__21411_21708,chunk__21415_21709,count__21416_21710,i__21417_21711,seq__21189,chunk__21191,count__21192,i__21193,new_link_21767,path_match_21766,node_21765,seq__21411_21759__$1,temp__5804__auto___21758__$1,path,seq__21189__$1,temp__5804__auto__,map__21188,map__21188__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21766], 0));

goog.dom.insertSiblingAfter(new_link_21767,node_21765);


var G__21799 = cljs.core.next(seq__21411_21759__$1);
var G__21800 = null;
var G__21801 = (0);
var G__21802 = (0);
seq__21411_21708 = G__21799;
chunk__21415_21709 = G__21800;
count__21416_21710 = G__21801;
i__21417_21711 = G__21802;
continue;
} else {
var G__21803 = cljs.core.next(seq__21411_21759__$1);
var G__21804 = null;
var G__21805 = (0);
var G__21806 = (0);
seq__21411_21708 = G__21803;
chunk__21415_21709 = G__21804;
count__21416_21710 = G__21805;
i__21417_21711 = G__21806;
continue;
}
} else {
var G__21807 = cljs.core.next(seq__21411_21759__$1);
var G__21808 = null;
var G__21809 = (0);
var G__21810 = (0);
seq__21411_21708 = G__21807;
chunk__21415_21709 = G__21808;
count__21416_21710 = G__21809;
i__21417_21711 = G__21810;
continue;
}
}
} else {
}
}
break;
}


var G__21811 = cljs.core.next(seq__21189__$1);
var G__21812 = null;
var G__21813 = (0);
var G__21814 = (0);
seq__21189 = G__21811;
chunk__21191 = G__21812;
count__21192 = G__21813;
i__21193 = G__21814;
continue;
} else {
var G__21815 = cljs.core.next(seq__21189__$1);
var G__21816 = null;
var G__21817 = (0);
var G__21818 = (0);
seq__21189 = G__21815;
chunk__21191 = G__21816;
count__21192 = G__21817;
i__21193 = G__21818;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21478){
var map__21479 = p__21478;
var map__21479__$1 = cljs.core.__destructure_map(map__21479);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21479__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21480,done,error){
var map__21481 = p__21480;
var map__21481__$1 = cljs.core.__destructure_map(map__21481);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21484,done,error){
var map__21485 = p__21484;
var map__21485__$1 = cljs.core.__destructure_map(map__21485);
var msg = map__21485__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21486){
var map__21487 = p__21486;
var map__21487__$1 = cljs.core.__destructure_map(map__21487);
var src = map__21487__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21492 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21492) : done.call(null, G__21492));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21493){
var map__21494 = p__21493;
var map__21494__$1 = cljs.core.__destructure_map(map__21494);
var msg__$1 = map__21494__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21495){var ex = e21495;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21496){
var map__21497 = p__21496;
var map__21497__$1 = cljs.core.__destructure_map(map__21497);
var env = map__21497__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21502){
var map__21503 = p__21502;
var map__21503__$1 = cljs.core.__destructure_map(map__21503);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21505){
var map__21506 = p__21505;
var map__21506__$1 = cljs.core.__destructure_map(map__21506);
var svc = map__21506__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21506__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
