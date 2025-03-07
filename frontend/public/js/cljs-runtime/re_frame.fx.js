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
var _STAR_current_trace_STAR__orig_val__23040 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23041 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23041);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23129 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23129)){
var new_db_23130 = temp__5804__auto___23129;
var fexpr__23046_23131 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23046_23131.cljs$core$IFn$_invoke$arity$1 ? fexpr__23046_23131.cljs$core$IFn$_invoke$arity$1(new_db_23130) : fexpr__23046_23131.call(null, new_db_23130));
} else {
}

var seq__23048 = cljs.core.seq(effects_without_db);
var chunk__23049 = null;
var count__23050 = (0);
var i__23051 = (0);
while(true){
if((i__23051 < count__23050)){
var vec__23070 = chunk__23049.cljs$core$IIndexed$_nth$arity$2(null, i__23051);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
var temp__5802__auto___23132 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23132)){
var effect_fn_23133 = temp__5802__auto___23132;
(effect_fn_23133.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23133.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23133.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23134 = seq__23048;
var G__23135 = chunk__23049;
var G__23136 = count__23050;
var G__23137 = (i__23051 + (1));
seq__23048 = G__23134;
chunk__23049 = G__23135;
count__23050 = G__23136;
i__23051 = G__23137;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23048);
if(temp__5804__auto__){
var seq__23048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23048__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23048__$1);
var G__23138 = cljs.core.chunk_rest(seq__23048__$1);
var G__23139 = c__5525__auto__;
var G__23140 = cljs.core.count(c__5525__auto__);
var G__23141 = (0);
seq__23048 = G__23138;
chunk__23049 = G__23139;
count__23050 = G__23140;
i__23051 = G__23141;
continue;
} else {
var vec__23077 = cljs.core.first(seq__23048__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23077,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23077,(1),null);
var temp__5802__auto___23142 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23142)){
var effect_fn_23143 = temp__5802__auto___23142;
(effect_fn_23143.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23143.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23143.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23144 = cljs.core.next(seq__23048__$1);
var G__23145 = null;
var G__23146 = (0);
var G__23147 = (0);
seq__23048 = G__23144;
chunk__23049 = G__23145;
count__23050 = G__23146;
i__23051 = G__23147;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22674__auto___23148 = re_frame.interop.now();
var duration__22675__auto___23149 = (end__22674__auto___23148 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22675__auto___23149,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22674__auto___23148);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23040);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23150 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23150)){
var new_db_23151 = temp__5804__auto___23150;
var fexpr__23080_23152 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23080_23152.cljs$core$IFn$_invoke$arity$1 ? fexpr__23080_23152.cljs$core$IFn$_invoke$arity$1(new_db_23151) : fexpr__23080_23152.call(null, new_db_23151));
} else {
}

var seq__23081 = cljs.core.seq(effects_without_db);
var chunk__23082 = null;
var count__23083 = (0);
var i__23084 = (0);
while(true){
if((i__23084 < count__23083)){
var vec__23091 = chunk__23082.cljs$core$IIndexed$_nth$arity$2(null, i__23084);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23091,(1),null);
var temp__5802__auto___23153 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23153)){
var effect_fn_23154 = temp__5802__auto___23153;
(effect_fn_23154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23154.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23155 = seq__23081;
var G__23156 = chunk__23082;
var G__23157 = count__23083;
var G__23158 = (i__23084 + (1));
seq__23081 = G__23155;
chunk__23082 = G__23156;
count__23083 = G__23157;
i__23084 = G__23158;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23081);
if(temp__5804__auto__){
var seq__23081__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23081__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23081__$1);
var G__23159 = cljs.core.chunk_rest(seq__23081__$1);
var G__23160 = c__5525__auto__;
var G__23161 = cljs.core.count(c__5525__auto__);
var G__23162 = (0);
seq__23081 = G__23159;
chunk__23082 = G__23160;
count__23083 = G__23161;
i__23084 = G__23162;
continue;
} else {
var vec__23094 = cljs.core.first(seq__23081__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23094,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23094,(1),null);
var temp__5802__auto___23163 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23163)){
var effect_fn_23164 = temp__5802__auto___23163;
(effect_fn_23164.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23164.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23164.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23165 = cljs.core.next(seq__23081__$1);
var G__23166 = null;
var G__23167 = (0);
var G__23168 = (0);
seq__23081 = G__23165;
chunk__23082 = G__23166;
count__23083 = G__23167;
i__23084 = G__23168;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23097){
var map__23098 = p__23097;
var map__23098__$1 = cljs.core.__destructure_map(map__23098);
var effect = map__23098__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__23099 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23100 = null;
var count__23101 = (0);
var i__23102 = (0);
while(true){
if((i__23102 < count__23101)){
var effect = chunk__23100.cljs$core$IIndexed$_nth$arity$2(null, i__23102);
re_frame.fx.dispatch_later(effect);


var G__23170 = seq__23099;
var G__23171 = chunk__23100;
var G__23172 = count__23101;
var G__23173 = (i__23102 + (1));
seq__23099 = G__23170;
chunk__23100 = G__23171;
count__23101 = G__23172;
i__23102 = G__23173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23099);
if(temp__5804__auto__){
var seq__23099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23099__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23099__$1);
var G__23175 = cljs.core.chunk_rest(seq__23099__$1);
var G__23176 = c__5525__auto__;
var G__23177 = cljs.core.count(c__5525__auto__);
var G__23178 = (0);
seq__23099 = G__23175;
chunk__23100 = G__23176;
count__23101 = G__23177;
i__23102 = G__23178;
continue;
} else {
var effect = cljs.core.first(seq__23099__$1);
re_frame.fx.dispatch_later(effect);


var G__23179 = cljs.core.next(seq__23099__$1);
var G__23180 = null;
var G__23181 = (0);
var G__23182 = (0);
seq__23099 = G__23179;
chunk__23100 = G__23180;
count__23101 = G__23181;
i__23102 = G__23182;
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
var seq__23103 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23104 = null;
var count__23105 = (0);
var i__23106 = (0);
while(true){
if((i__23106 < count__23105)){
var vec__23113 = chunk__23104.cljs$core$IIndexed$_nth$arity$2(null, i__23106);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23113,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23113,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23183 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23183)){
var effect_fn_23184 = temp__5802__auto___23183;
(effect_fn_23184.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23184.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23184.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23185 = seq__23103;
var G__23186 = chunk__23104;
var G__23187 = count__23105;
var G__23188 = (i__23106 + (1));
seq__23103 = G__23185;
chunk__23104 = G__23186;
count__23105 = G__23187;
i__23106 = G__23188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23103);
if(temp__5804__auto__){
var seq__23103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23103__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23103__$1);
var G__23189 = cljs.core.chunk_rest(seq__23103__$1);
var G__23190 = c__5525__auto__;
var G__23191 = cljs.core.count(c__5525__auto__);
var G__23192 = (0);
seq__23103 = G__23189;
chunk__23104 = G__23190;
count__23105 = G__23191;
i__23106 = G__23192;
continue;
} else {
var vec__23116 = cljs.core.first(seq__23103__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23116,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23116,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23193 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23193)){
var effect_fn_23194 = temp__5802__auto___23193;
(effect_fn_23194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23194.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23195 = cljs.core.next(seq__23103__$1);
var G__23196 = null;
var G__23197 = (0);
var G__23198 = (0);
seq__23103 = G__23195;
chunk__23104 = G__23196;
count__23105 = G__23197;
i__23106 = G__23198;
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
var seq__23119 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23120 = null;
var count__23121 = (0);
var i__23122 = (0);
while(true){
if((i__23122 < count__23121)){
var event = chunk__23120.cljs$core$IIndexed$_nth$arity$2(null, i__23122);
re_frame.router.dispatch(event);


var G__23201 = seq__23119;
var G__23202 = chunk__23120;
var G__23203 = count__23121;
var G__23204 = (i__23122 + (1));
seq__23119 = G__23201;
chunk__23120 = G__23202;
count__23121 = G__23203;
i__23122 = G__23204;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23119);
if(temp__5804__auto__){
var seq__23119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23119__$1);
var G__23205 = cljs.core.chunk_rest(seq__23119__$1);
var G__23206 = c__5525__auto__;
var G__23207 = cljs.core.count(c__5525__auto__);
var G__23208 = (0);
seq__23119 = G__23205;
chunk__23120 = G__23206;
count__23121 = G__23207;
i__23122 = G__23208;
continue;
} else {
var event = cljs.core.first(seq__23119__$1);
re_frame.router.dispatch(event);


var G__23209 = cljs.core.next(seq__23119__$1);
var G__23210 = null;
var G__23211 = (0);
var G__23212 = (0);
seq__23119 = G__23209;
chunk__23120 = G__23210;
count__23121 = G__23211;
i__23122 = G__23212;
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
var seq__23123 = cljs.core.seq(value);
var chunk__23124 = null;
var count__23125 = (0);
var i__23126 = (0);
while(true){
if((i__23126 < count__23125)){
var event = chunk__23124.cljs$core$IIndexed$_nth$arity$2(null, i__23126);
clear_event(event);


var G__23213 = seq__23123;
var G__23214 = chunk__23124;
var G__23215 = count__23125;
var G__23216 = (i__23126 + (1));
seq__23123 = G__23213;
chunk__23124 = G__23214;
count__23125 = G__23215;
i__23126 = G__23216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23123);
if(temp__5804__auto__){
var seq__23123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23123__$1);
var G__23217 = cljs.core.chunk_rest(seq__23123__$1);
var G__23218 = c__5525__auto__;
var G__23219 = cljs.core.count(c__5525__auto__);
var G__23220 = (0);
seq__23123 = G__23217;
chunk__23124 = G__23218;
count__23125 = G__23219;
i__23126 = G__23220;
continue;
} else {
var event = cljs.core.first(seq__23123__$1);
clear_event(event);


var G__23221 = cljs.core.next(seq__23123__$1);
var G__23222 = null;
var G__23223 = (0);
var G__23224 = (0);
seq__23123 = G__23221;
chunk__23124 = G__23222;
count__23125 = G__23223;
i__23126 = G__23224;
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
var _STAR_current_trace_STAR__orig_val__23127 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23128 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23128);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22674__auto___23226 = re_frame.interop.now();
var duration__22675__auto___23227 = (end__22674__auto___23226 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22675__auto___23227,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22674__auto___23226);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23127);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
