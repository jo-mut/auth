goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13823 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13824 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13824);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13910 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13910)){
var new_db_13911 = temp__5804__auto___13910;
var fexpr__13827_13912 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13827_13912.cljs$core$IFn$_invoke$arity$1 ? fexpr__13827_13912.cljs$core$IFn$_invoke$arity$1(new_db_13911) : fexpr__13827_13912.call(null, new_db_13911));
} else {
}

var seq__13828 = cljs.core.seq(effects_without_db);
var chunk__13829 = null;
var count__13830 = (0);
var i__13831 = (0);
while(true){
if((i__13831 < count__13830)){
var vec__13839 = chunk__13829.cljs$core$IIndexed$_nth$arity$2(null, i__13831);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(1),null);
var temp__5802__auto___13913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13913)){
var effect_fn_13914 = temp__5802__auto___13913;
(effect_fn_13914.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13914.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13914.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13915 = seq__13828;
var G__13916 = chunk__13829;
var G__13917 = count__13830;
var G__13918 = (i__13831 + (1));
seq__13828 = G__13915;
chunk__13829 = G__13916;
count__13830 = G__13917;
i__13831 = G__13918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13828);
if(temp__5804__auto__){
var seq__13828__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13828__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13828__$1);
var G__13919 = cljs.core.chunk_rest(seq__13828__$1);
var G__13920 = c__5525__auto__;
var G__13921 = cljs.core.count(c__5525__auto__);
var G__13922 = (0);
seq__13828 = G__13919;
chunk__13829 = G__13920;
count__13830 = G__13921;
i__13831 = G__13922;
continue;
} else {
var vec__13854 = cljs.core.first(seq__13828__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13854,(1),null);
var temp__5802__auto___13923 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13923)){
var effect_fn_13924 = temp__5802__auto___13923;
(effect_fn_13924.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13924.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13924.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13925 = cljs.core.next(seq__13828__$1);
var G__13926 = null;
var G__13927 = (0);
var G__13928 = (0);
seq__13828 = G__13925;
chunk__13829 = G__13926;
count__13830 = G__13927;
i__13831 = G__13928;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13458__auto___13929 = re_frame.interop.now();
var duration__13459__auto___13930 = (end__13458__auto___13929 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13459__auto___13930,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13458__auto___13929);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13823);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___13931 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___13931)){
var new_db_13932 = temp__5804__auto___13931;
var fexpr__13857_13933 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__13857_13933.cljs$core$IFn$_invoke$arity$1 ? fexpr__13857_13933.cljs$core$IFn$_invoke$arity$1(new_db_13932) : fexpr__13857_13933.call(null, new_db_13932));
} else {
}

var seq__13858 = cljs.core.seq(effects_without_db);
var chunk__13859 = null;
var count__13860 = (0);
var i__13861 = (0);
while(true){
if((i__13861 < count__13860)){
var vec__13872 = chunk__13859.cljs$core$IIndexed$_nth$arity$2(null, i__13861);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13872,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13872,(1),null);
var temp__5802__auto___13934 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13934)){
var effect_fn_13935 = temp__5802__auto___13934;
(effect_fn_13935.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13935.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13935.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13936 = seq__13858;
var G__13937 = chunk__13859;
var G__13938 = count__13860;
var G__13939 = (i__13861 + (1));
seq__13858 = G__13936;
chunk__13859 = G__13937;
count__13860 = G__13938;
i__13861 = G__13939;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13858);
if(temp__5804__auto__){
var seq__13858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13858__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13858__$1);
var G__13940 = cljs.core.chunk_rest(seq__13858__$1);
var G__13941 = c__5525__auto__;
var G__13942 = cljs.core.count(c__5525__auto__);
var G__13943 = (0);
seq__13858 = G__13940;
chunk__13859 = G__13941;
count__13860 = G__13942;
i__13861 = G__13943;
continue;
} else {
var vec__13875 = cljs.core.first(seq__13858__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13875,(1),null);
var temp__5802__auto___13944 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13944)){
var effect_fn_13945 = temp__5802__auto___13944;
(effect_fn_13945.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13945.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13945.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__13946 = cljs.core.next(seq__13858__$1);
var G__13947 = null;
var G__13948 = (0);
var G__13949 = (0);
seq__13858 = G__13946;
chunk__13859 = G__13947;
count__13860 = G__13948;
i__13861 = G__13949;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13878){
var map__13879 = p__13878;
var map__13879__$1 = cljs.core.__destructure_map(map__13879);
var effect = map__13879__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__13880 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13881 = null;
var count__13882 = (0);
var i__13883 = (0);
while(true){
if((i__13883 < count__13882)){
var effect = chunk__13881.cljs$core$IIndexed$_nth$arity$2(null, i__13883);
re_frame.fx.dispatch_later(effect);


var G__13950 = seq__13880;
var G__13951 = chunk__13881;
var G__13952 = count__13882;
var G__13953 = (i__13883 + (1));
seq__13880 = G__13950;
chunk__13881 = G__13951;
count__13882 = G__13952;
i__13883 = G__13953;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13880);
if(temp__5804__auto__){
var seq__13880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13880__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13880__$1);
var G__13954 = cljs.core.chunk_rest(seq__13880__$1);
var G__13955 = c__5525__auto__;
var G__13956 = cljs.core.count(c__5525__auto__);
var G__13957 = (0);
seq__13880 = G__13954;
chunk__13881 = G__13955;
count__13882 = G__13956;
i__13883 = G__13957;
continue;
} else {
var effect = cljs.core.first(seq__13880__$1);
re_frame.fx.dispatch_later(effect);


var G__13958 = cljs.core.next(seq__13880__$1);
var G__13959 = null;
var G__13960 = (0);
var G__13961 = (0);
seq__13880 = G__13958;
chunk__13881 = G__13959;
count__13882 = G__13960;
i__13883 = G__13961;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__13884 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13885 = null;
var count__13886 = (0);
var i__13887 = (0);
while(true){
if((i__13887 < count__13886)){
var vec__13894 = chunk__13885.cljs$core$IIndexed$_nth$arity$2(null, i__13887);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13894,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13962 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13962)){
var effect_fn_13963 = temp__5802__auto___13962;
(effect_fn_13963.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13963.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13963.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13964 = seq__13884;
var G__13965 = chunk__13885;
var G__13966 = count__13886;
var G__13967 = (i__13887 + (1));
seq__13884 = G__13964;
chunk__13885 = G__13965;
count__13886 = G__13966;
i__13887 = G__13967;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13884);
if(temp__5804__auto__){
var seq__13884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13884__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13884__$1);
var G__13968 = cljs.core.chunk_rest(seq__13884__$1);
var G__13969 = c__5525__auto__;
var G__13970 = cljs.core.count(c__5525__auto__);
var G__13971 = (0);
seq__13884 = G__13968;
chunk__13885 = G__13969;
count__13886 = G__13970;
i__13887 = G__13971;
continue;
} else {
var vec__13897 = cljs.core.first(seq__13884__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13897,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13897,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___13972 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___13972)){
var effect_fn_13973 = temp__5802__auto___13972;
(effect_fn_13973.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13973.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13973.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13974 = cljs.core.next(seq__13884__$1);
var G__13975 = null;
var G__13976 = (0);
var G__13977 = (0);
seq__13884 = G__13974;
chunk__13885 = G__13975;
count__13886 = G__13976;
i__13887 = G__13977;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13900 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13901 = null;
var count__13902 = (0);
var i__13903 = (0);
while(true){
if((i__13903 < count__13902)){
var event = chunk__13901.cljs$core$IIndexed$_nth$arity$2(null, i__13903);
re_frame.router.dispatch(event);


var G__13978 = seq__13900;
var G__13979 = chunk__13901;
var G__13980 = count__13902;
var G__13981 = (i__13903 + (1));
seq__13900 = G__13978;
chunk__13901 = G__13979;
count__13902 = G__13980;
i__13903 = G__13981;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13900);
if(temp__5804__auto__){
var seq__13900__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13900__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13900__$1);
var G__13982 = cljs.core.chunk_rest(seq__13900__$1);
var G__13983 = c__5525__auto__;
var G__13984 = cljs.core.count(c__5525__auto__);
var G__13985 = (0);
seq__13900 = G__13982;
chunk__13901 = G__13983;
count__13902 = G__13984;
i__13903 = G__13985;
continue;
} else {
var event = cljs.core.first(seq__13900__$1);
re_frame.router.dispatch(event);


var G__13986 = cljs.core.next(seq__13900__$1);
var G__13987 = null;
var G__13988 = (0);
var G__13989 = (0);
seq__13900 = G__13986;
chunk__13901 = G__13987;
count__13902 = G__13988;
i__13903 = G__13989;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13904 = cljs.core.seq(value);
var chunk__13905 = null;
var count__13906 = (0);
var i__13907 = (0);
while(true){
if((i__13907 < count__13906)){
var event = chunk__13905.cljs$core$IIndexed$_nth$arity$2(null, i__13907);
clear_event(event);


var G__13990 = seq__13904;
var G__13991 = chunk__13905;
var G__13992 = count__13906;
var G__13993 = (i__13907 + (1));
seq__13904 = G__13990;
chunk__13905 = G__13991;
count__13906 = G__13992;
i__13907 = G__13993;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13904);
if(temp__5804__auto__){
var seq__13904__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13904__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13904__$1);
var G__13994 = cljs.core.chunk_rest(seq__13904__$1);
var G__13995 = c__5525__auto__;
var G__13996 = cljs.core.count(c__5525__auto__);
var G__13997 = (0);
seq__13904 = G__13994;
chunk__13905 = G__13995;
count__13906 = G__13996;
i__13907 = G__13997;
continue;
} else {
var event = cljs.core.first(seq__13904__$1);
clear_event(event);


var G__13998 = cljs.core.next(seq__13904__$1);
var G__13999 = null;
var G__14000 = (0);
var G__14001 = (0);
seq__13904 = G__13998;
chunk__13905 = G__13999;
count__13906 = G__14000;
i__13907 = G__14001;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13908 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13909 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13909);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13458__auto___14002 = re_frame.interop.now();
var duration__13459__auto___14003 = (end__13458__auto___14002 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13459__auto___14003,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13458__auto___14002);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13908);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
