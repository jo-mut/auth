goog.provide('promesa.exec');
goog.scope(function(){
  promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
promesa.exec._STAR_default_scheduler_STAR_ = null;
promesa.exec._STAR_default_executor_STAR_ = null;
/**
 * Var that indicates the availability of virtual threads.
 */
promesa.exec.virtual_threads_available_QMARK_ = false;
/**
 * backward compatibility alias for `virtual-threads-available?`
 */
promesa.exec.vthread_supported_QMARK_ = promesa.exec.virtual_threads_available_QMARK_;
promesa.exec.noop = cljs.core.constantly(null);
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
/**
 * Default scheduled executor instance.
 */
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return (promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.scheduled_executor.call(null, ));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
/**
 * Default executor instance, ForkJoinPool/commonPool in JVM, MicrotaskExecutor on JS.
 */
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return (promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.microtask_executor.call(null, ));
}),null));
}
/**
 * Default Executor instance that runs the task in the same thread.
 */
promesa.exec.default_current_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.current_thread_executor.call(null, ));
}),null));
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_thread_executor !== 'undefined')){
} else {
/**
 * A global, thread per task executor service.
 */
promesa.exec.default_thread_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_vthread_executor !== 'undefined')){
} else {
/**
 * A global, virtual thread per task executor service.
 */
promesa.exec.default_vthread_executor = promesa.exec.default_executor;
}
/**
 * Returns true if `o` is an instane of Executor or satisfies IExecutor protocol.
 */
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__18432 = arguments.length;
switch (G__18432) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if((((executor == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),executor)))){
return cljs.core.deref(promesa.exec.default_executor);
} else {
var G__18435 = executor;
var G__18435__$1 = (((G__18435 instanceof cljs.core.Keyword))?G__18435.fqn:null);
switch (G__18435__$1) {
case "thread":
return promesa.util.maybe_deref(promesa.exec.default_thread_executor);

break;
case "vthread":
return promesa.util.maybe_deref(promesa.exec.default_vthread_executor);

break;
case "current-thread":
return promesa.util.maybe_deref(promesa.exec.default_current_thread_executor);

break;
default:
return promesa.util.maybe_deref(executor);

}
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__18439 = arguments.length;
switch (G__18439) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if((((scheduler == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)))){
return promesa.util.maybe_deref(promesa.exec.default_scheduler);
} else {
return promesa.util.maybe_deref(scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__18445 = arguments.length;
switch (G__18445) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__18449 = arguments.length;
switch (G__18449) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__18453 = arguments.length;
switch (G__18453) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec18466 = (function (meta18467){
this.meta18467 = meta18467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec18466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18468,meta18467__$1){
var self__ = this;
var _18468__$1 = this;
return (new promesa.exec.t_promesa$exec18466(meta18467__$1));
}));

(promesa.exec.t_promesa$exec18466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18468){
var self__ = this;
var _18468__$1 = this;
return self__.meta18467;
}));

(promesa.exec.t_promesa$exec18466.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec18466.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}catch (e18485){var cause = e18485;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec18466.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, )));
}catch (e18489){var cause = e18489;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec18466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18467","meta18467",981671108,null)], null);
}));

(promesa.exec.t_promesa$exec18466.cljs$lang$type = true);

(promesa.exec.t_promesa$exec18466.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec18466");

(promesa.exec.t_promesa$exec18466.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/t_promesa$exec18466");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec18466.
 */
promesa.exec.__GT_t_promesa$exec18466 = (function promesa$exec$__GT_t_promesa$exec18466(meta18467){
return (new promesa.exec.t_promesa$exec18466(meta18467));
});


/**
 * Creates an executor instance that run tasks in the same thread.
 */
promesa.exec.current_thread_executor = (function promesa$exec$current_thread_executor(){
return (new promesa.exec.t_promesa$exec18466(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec18490 = (function (meta18491){
this.meta18491 = meta18491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec18490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18492,meta18491__$1){
var self__ = this;
var _18492__$1 = this;
return (new promesa.exec.t_promesa$exec18490(meta18491__$1));
}));

(promesa.exec.t_promesa$exec18490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18492){
var self__ = this;
var _18492__$1 = this;
return self__.meta18491;
}));

(promesa.exec.t_promesa$exec18490.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec18490.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._map(promesa.protocols._map(promesa.protocols._promise(null),(function (_){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}catch (e18495){var ___$1 = e18495;
return null;
}})),promesa.exec.noop);
}));

(promesa.exec.t_promesa$exec18490.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._map(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
}));

(promesa.exec.t_promesa$exec18490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta18491","meta18491",-1983585844,null)], null);
}));

(promesa.exec.t_promesa$exec18490.cljs$lang$type = true);

(promesa.exec.t_promesa$exec18490.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec18490");

(promesa.exec.t_promesa$exec18490.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/t_promesa$exec18490");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec18490.
 */
promesa.exec.__GT_t_promesa$exec18490 = (function promesa$exec$__GT_t_promesa$exec18490(meta18491){
return (new promesa.exec.t_promesa$exec18490(meta18491));
});


/**
 * An IExecutor that schedules tasks to be executed in the MicrotasksQueue.
 */
promesa.exec.microtask_executor = (function promesa$exec$microtask_executor(){
return (new promesa.exec.t_promesa$exec18490(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.Scheduler = (function (){
});
(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var done = cljs.core.volatile_BANG_(false);
var task = (function (){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}finally {cljs.core.vreset_BANG_(done,true);
}});
var tid = setTimeout(task,ms);
var cancel = (function (){
return clearTimeout(tid);
});
var G__18498 = ({"done": done, "cancelled": false, "cancel-fn": cancel});
return (promesa.exec.__GT_ScheduledTask.cljs$core$IFn$_invoke$arity$1 ? promesa.exec.__GT_ScheduledTask.cljs$core$IFn$_invoke$arity$1(G__18498) : promesa.exec.__GT_ScheduledTask.call(null, G__18498));
}));

(promesa.exec.Scheduler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.Scheduler.cljs$lang$type = true);

(promesa.exec.Scheduler.cljs$lang$ctorStr = "promesa.exec/Scheduler");

(promesa.exec.Scheduler.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/Scheduler");
}));

/**
 * Positional factory function for promesa.exec/Scheduler.
 */
promesa.exec.__GT_Scheduler = (function promesa$exec$__GT_Scheduler(){
return (new promesa.exec.Scheduler());
});

/**
 * A scheduled thread pool constructor. A ScheduledExecutor (IScheduler
 *   in CLJS) instance allows execute asynchronous tasks some time later.
 */
promesa.exec.scheduled_executor = (function promesa$exec$scheduled_executor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18531 = arguments.length;
var i__5727__auto___18532 = (0);
while(true){
if((i__5727__auto___18532 < len__5726__auto___18531)){
args__5732__auto__.push((arguments[i__5727__auto___18532]));

var G__18533 = (i__5727__auto___18532 + (1));
i__5727__auto___18532 = G__18533;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic = (function (p__18500){
var map__18501 = p__18500;
var map__18501__$1 = cljs.core.__destructure_map(map__18501);
var parallelism = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18501__$1,new cljs.core.Keyword(null,"parallelism","parallelism",-930922333),(1));
var factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18501__$1,new cljs.core.Keyword(null,"factory","factory",63933746));
return promesa.exec.__GT_Scheduler();
}));

(promesa.exec.scheduled_executor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.exec.scheduled_executor.cljs$lang$applyTo = (function (seq18499){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18499));
}));


/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {promesa.protocols.ICancellable}
*/
promesa.exec.ScheduledTask = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(promesa.exec.ScheduledTask.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var done_iref = promesa.exec.goog$module$goog$object.get(self__.state,"done");
return cljs.core.deref(done_iref);
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return promesa.exec.goog$module$goog$object.get(self__.state,"cancelled");
}));

(promesa.exec.ScheduledTask.prototype.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
if(cljs.core.truth_(self__$1.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(null, ))){
return null;
} else {
var cancel_fn = promesa.exec.goog$module$goog$object.get(self__.state,"cancel-fn");
promesa.exec.goog$module$goog$object.set(self__.state,"cancelled",true);

return (cancel_fn.cljs$core$IFn$_invoke$arity$0 ? cancel_fn.cljs$core$IFn$_invoke$arity$0() : cancel_fn.call(null, ));
}
}));

(promesa.exec.ScheduledTask.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(promesa.exec.ScheduledTask.cljs$lang$type = true);

(promesa.exec.ScheduledTask.cljs$lang$ctorStr = "promesa.exec/ScheduledTask");

(promesa.exec.ScheduledTask.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/ScheduledTask");
}));

/**
 * Positional factory function for promesa.exec/ScheduledTask.
 */
promesa.exec.__GT_ScheduledTask = (function promesa$exec$__GT_ScheduledTask(state){
return (new promesa.exec.ScheduledTask(state));
});


//# sourceMappingURL=promesa.exec.js.map
