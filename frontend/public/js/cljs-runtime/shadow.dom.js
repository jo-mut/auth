goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12509 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12509(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12520 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12520(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11714 = coll;
var G__11715 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11714,G__11715) : shadow.dom.lazy_native_coll_seq.call(null, G__11714,G__11715));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11748 = arguments.length;
switch (G__11748) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11754 = arguments.length;
switch (G__11754) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11763 = arguments.length;
switch (G__11763) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11778 = arguments.length;
switch (G__11778) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11804 = arguments.length;
switch (G__11804) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11824 = arguments.length;
switch (G__11824) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11831){if((e11831 instanceof Object)){
var e = e11831;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11831;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11832 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11833 = null;
var count__11834 = (0);
var i__11835 = (0);
while(true){
if((i__11835 < count__11834)){
var el = chunk__11833.cljs$core$IIndexed$_nth$arity$2(null, i__11835);
var handler_12578__$1 = ((function (seq__11832,chunk__11833,count__11834,i__11835,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11832,chunk__11833,count__11834,i__11835,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12578__$1);


var G__12579 = seq__11832;
var G__12580 = chunk__11833;
var G__12581 = count__11834;
var G__12582 = (i__11835 + (1));
seq__11832 = G__12579;
chunk__11833 = G__12580;
count__11834 = G__12581;
i__11835 = G__12582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11832);
if(temp__5804__auto__){
var seq__11832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11832__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11832__$1);
var G__12583 = cljs.core.chunk_rest(seq__11832__$1);
var G__12584 = c__5525__auto__;
var G__12585 = cljs.core.count(c__5525__auto__);
var G__12586 = (0);
seq__11832 = G__12583;
chunk__11833 = G__12584;
count__11834 = G__12585;
i__11835 = G__12586;
continue;
} else {
var el = cljs.core.first(seq__11832__$1);
var handler_12588__$1 = ((function (seq__11832,chunk__11833,count__11834,i__11835,el,seq__11832__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11832,chunk__11833,count__11834,i__11835,el,seq__11832__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12588__$1);


var G__12591 = cljs.core.next(seq__11832__$1);
var G__12592 = null;
var G__12593 = (0);
var G__12594 = (0);
seq__11832 = G__12591;
chunk__11833 = G__12592;
count__11834 = G__12593;
i__11835 = G__12594;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11843 = arguments.length;
switch (G__11843) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11849 = cljs.core.seq(events);
var chunk__11850 = null;
var count__11851 = (0);
var i__11852 = (0);
while(true){
if((i__11852 < count__11851)){
var vec__11859 = chunk__11850.cljs$core$IIndexed$_nth$arity$2(null, i__11852);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12606 = seq__11849;
var G__12607 = chunk__11850;
var G__12608 = count__11851;
var G__12609 = (i__11852 + (1));
seq__11849 = G__12606;
chunk__11850 = G__12607;
count__11851 = G__12608;
i__11852 = G__12609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11849);
if(temp__5804__auto__){
var seq__11849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11849__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11849__$1);
var G__12611 = cljs.core.chunk_rest(seq__11849__$1);
var G__12612 = c__5525__auto__;
var G__12613 = cljs.core.count(c__5525__auto__);
var G__12614 = (0);
seq__11849 = G__12611;
chunk__11850 = G__12612;
count__11851 = G__12613;
i__11852 = G__12614;
continue;
} else {
var vec__11870 = cljs.core.first(seq__11849__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12625 = cljs.core.next(seq__11849__$1);
var G__12626 = null;
var G__12627 = (0);
var G__12628 = (0);
seq__11849 = G__12625;
chunk__11850 = G__12626;
count__11851 = G__12627;
i__11852 = G__12628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11882 = cljs.core.seq(styles);
var chunk__11883 = null;
var count__11884 = (0);
var i__11885 = (0);
while(true){
if((i__11885 < count__11884)){
var vec__11908 = chunk__11883.cljs$core$IIndexed$_nth$arity$2(null, i__11885);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11908,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12629 = seq__11882;
var G__12630 = chunk__11883;
var G__12631 = count__11884;
var G__12632 = (i__11885 + (1));
seq__11882 = G__12629;
chunk__11883 = G__12630;
count__11884 = G__12631;
i__11885 = G__12632;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11882);
if(temp__5804__auto__){
var seq__11882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11882__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11882__$1);
var G__12634 = cljs.core.chunk_rest(seq__11882__$1);
var G__12635 = c__5525__auto__;
var G__12636 = cljs.core.count(c__5525__auto__);
var G__12637 = (0);
seq__11882 = G__12634;
chunk__11883 = G__12635;
count__11884 = G__12636;
i__11885 = G__12637;
continue;
} else {
var vec__11918 = cljs.core.first(seq__11882__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11918,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12639 = cljs.core.next(seq__11882__$1);
var G__12640 = null;
var G__12641 = (0);
var G__12642 = (0);
seq__11882 = G__12639;
chunk__11883 = G__12640;
count__11884 = G__12641;
i__11885 = G__12642;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11929_12645 = key;
var G__11929_12646__$1 = (((G__11929_12645 instanceof cljs.core.Keyword))?G__11929_12645.fqn:null);
switch (G__11929_12646__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12650 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12650,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12650,"aria-");
}
})())){
el.setAttribute(ks_12650,value);
} else {
(el[ks_12650] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11973){
var map__11974 = p__11973;
var map__11974__$1 = cljs.core.__destructure_map(map__11974);
var props = map__11974__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11974__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11975 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11978 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11978,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11978;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11982 = arguments.length;
switch (G__11982) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11990){
var vec__11991 = p__11990;
var seq__11992 = cljs.core.seq(vec__11991);
var first__11993 = cljs.core.first(seq__11992);
var seq__11992__$1 = cljs.core.next(seq__11992);
var nn = first__11993;
var first__11993__$1 = cljs.core.first(seq__11992__$1);
var seq__11992__$2 = cljs.core.next(seq__11992__$1);
var np = first__11993__$1;
var nc = seq__11992__$2;
var node = vec__11991;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11997 = nn;
var G__11998 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11997,G__11998) : create_fn.call(null, G__11997,G__11998));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11999 = nn;
var G__12000 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11999,G__12000) : create_fn.call(null, G__11999,G__12000));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12003 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12003,(1),null);
var seq__12007_12662 = cljs.core.seq(node_children);
var chunk__12008_12663 = null;
var count__12009_12664 = (0);
var i__12010_12665 = (0);
while(true){
if((i__12010_12665 < count__12009_12664)){
var child_struct_12667 = chunk__12008_12663.cljs$core$IIndexed$_nth$arity$2(null, i__12010_12665);
var children_12668 = shadow.dom.dom_node(child_struct_12667);
if(cljs.core.seq_QMARK_(children_12668)){
var seq__12047_12669 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12668));
var chunk__12049_12670 = null;
var count__12050_12671 = (0);
var i__12051_12672 = (0);
while(true){
if((i__12051_12672 < count__12050_12671)){
var child_12673 = chunk__12049_12670.cljs$core$IIndexed$_nth$arity$2(null, i__12051_12672);
if(cljs.core.truth_(child_12673)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12673);


var G__12674 = seq__12047_12669;
var G__12675 = chunk__12049_12670;
var G__12676 = count__12050_12671;
var G__12677 = (i__12051_12672 + (1));
seq__12047_12669 = G__12674;
chunk__12049_12670 = G__12675;
count__12050_12671 = G__12676;
i__12051_12672 = G__12677;
continue;
} else {
var G__12681 = seq__12047_12669;
var G__12682 = chunk__12049_12670;
var G__12683 = count__12050_12671;
var G__12684 = (i__12051_12672 + (1));
seq__12047_12669 = G__12681;
chunk__12049_12670 = G__12682;
count__12050_12671 = G__12683;
i__12051_12672 = G__12684;
continue;
}
} else {
var temp__5804__auto___12685 = cljs.core.seq(seq__12047_12669);
if(temp__5804__auto___12685){
var seq__12047_12686__$1 = temp__5804__auto___12685;
if(cljs.core.chunked_seq_QMARK_(seq__12047_12686__$1)){
var c__5525__auto___12687 = cljs.core.chunk_first(seq__12047_12686__$1);
var G__12688 = cljs.core.chunk_rest(seq__12047_12686__$1);
var G__12689 = c__5525__auto___12687;
var G__12690 = cljs.core.count(c__5525__auto___12687);
var G__12691 = (0);
seq__12047_12669 = G__12688;
chunk__12049_12670 = G__12689;
count__12050_12671 = G__12690;
i__12051_12672 = G__12691;
continue;
} else {
var child_12692 = cljs.core.first(seq__12047_12686__$1);
if(cljs.core.truth_(child_12692)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12692);


var G__12693 = cljs.core.next(seq__12047_12686__$1);
var G__12694 = null;
var G__12695 = (0);
var G__12696 = (0);
seq__12047_12669 = G__12693;
chunk__12049_12670 = G__12694;
count__12050_12671 = G__12695;
i__12051_12672 = G__12696;
continue;
} else {
var G__12697 = cljs.core.next(seq__12047_12686__$1);
var G__12698 = null;
var G__12699 = (0);
var G__12700 = (0);
seq__12047_12669 = G__12697;
chunk__12049_12670 = G__12698;
count__12050_12671 = G__12699;
i__12051_12672 = G__12700;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12668);
}


var G__12702 = seq__12007_12662;
var G__12703 = chunk__12008_12663;
var G__12704 = count__12009_12664;
var G__12705 = (i__12010_12665 + (1));
seq__12007_12662 = G__12702;
chunk__12008_12663 = G__12703;
count__12009_12664 = G__12704;
i__12010_12665 = G__12705;
continue;
} else {
var temp__5804__auto___12706 = cljs.core.seq(seq__12007_12662);
if(temp__5804__auto___12706){
var seq__12007_12707__$1 = temp__5804__auto___12706;
if(cljs.core.chunked_seq_QMARK_(seq__12007_12707__$1)){
var c__5525__auto___12708 = cljs.core.chunk_first(seq__12007_12707__$1);
var G__12709 = cljs.core.chunk_rest(seq__12007_12707__$1);
var G__12710 = c__5525__auto___12708;
var G__12711 = cljs.core.count(c__5525__auto___12708);
var G__12712 = (0);
seq__12007_12662 = G__12709;
chunk__12008_12663 = G__12710;
count__12009_12664 = G__12711;
i__12010_12665 = G__12712;
continue;
} else {
var child_struct_12713 = cljs.core.first(seq__12007_12707__$1);
var children_12715 = shadow.dom.dom_node(child_struct_12713);
if(cljs.core.seq_QMARK_(children_12715)){
var seq__12057_12716 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12715));
var chunk__12059_12717 = null;
var count__12060_12718 = (0);
var i__12061_12719 = (0);
while(true){
if((i__12061_12719 < count__12060_12718)){
var child_12721 = chunk__12059_12717.cljs$core$IIndexed$_nth$arity$2(null, i__12061_12719);
if(cljs.core.truth_(child_12721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12721);


var G__12722 = seq__12057_12716;
var G__12723 = chunk__12059_12717;
var G__12724 = count__12060_12718;
var G__12725 = (i__12061_12719 + (1));
seq__12057_12716 = G__12722;
chunk__12059_12717 = G__12723;
count__12060_12718 = G__12724;
i__12061_12719 = G__12725;
continue;
} else {
var G__12727 = seq__12057_12716;
var G__12728 = chunk__12059_12717;
var G__12729 = count__12060_12718;
var G__12730 = (i__12061_12719 + (1));
seq__12057_12716 = G__12727;
chunk__12059_12717 = G__12728;
count__12060_12718 = G__12729;
i__12061_12719 = G__12730;
continue;
}
} else {
var temp__5804__auto___12731__$1 = cljs.core.seq(seq__12057_12716);
if(temp__5804__auto___12731__$1){
var seq__12057_12733__$1 = temp__5804__auto___12731__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12057_12733__$1)){
var c__5525__auto___12735 = cljs.core.chunk_first(seq__12057_12733__$1);
var G__12736 = cljs.core.chunk_rest(seq__12057_12733__$1);
var G__12737 = c__5525__auto___12735;
var G__12738 = cljs.core.count(c__5525__auto___12735);
var G__12739 = (0);
seq__12057_12716 = G__12736;
chunk__12059_12717 = G__12737;
count__12060_12718 = G__12738;
i__12061_12719 = G__12739;
continue;
} else {
var child_12741 = cljs.core.first(seq__12057_12733__$1);
if(cljs.core.truth_(child_12741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12741);


var G__12743 = cljs.core.next(seq__12057_12733__$1);
var G__12744 = null;
var G__12745 = (0);
var G__12746 = (0);
seq__12057_12716 = G__12743;
chunk__12059_12717 = G__12744;
count__12060_12718 = G__12745;
i__12061_12719 = G__12746;
continue;
} else {
var G__12748 = cljs.core.next(seq__12057_12733__$1);
var G__12749 = null;
var G__12750 = (0);
var G__12751 = (0);
seq__12057_12716 = G__12748;
chunk__12059_12717 = G__12749;
count__12060_12718 = G__12750;
i__12061_12719 = G__12751;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12715);
}


var G__12753 = cljs.core.next(seq__12007_12707__$1);
var G__12754 = null;
var G__12755 = (0);
var G__12756 = (0);
seq__12007_12662 = G__12753;
chunk__12008_12663 = G__12754;
count__12009_12664 = G__12755;
i__12010_12665 = G__12756;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12072 = cljs.core.seq(node);
var chunk__12073 = null;
var count__12074 = (0);
var i__12075 = (0);
while(true){
if((i__12075 < count__12074)){
var n = chunk__12073.cljs$core$IIndexed$_nth$arity$2(null, i__12075);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12770 = seq__12072;
var G__12771 = chunk__12073;
var G__12772 = count__12074;
var G__12773 = (i__12075 + (1));
seq__12072 = G__12770;
chunk__12073 = G__12771;
count__12074 = G__12772;
i__12075 = G__12773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12072);
if(temp__5804__auto__){
var seq__12072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12072__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12072__$1);
var G__12775 = cljs.core.chunk_rest(seq__12072__$1);
var G__12776 = c__5525__auto__;
var G__12777 = cljs.core.count(c__5525__auto__);
var G__12778 = (0);
seq__12072 = G__12775;
chunk__12073 = G__12776;
count__12074 = G__12777;
i__12075 = G__12778;
continue;
} else {
var n = cljs.core.first(seq__12072__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12779 = cljs.core.next(seq__12072__$1);
var G__12780 = null;
var G__12781 = (0);
var G__12782 = (0);
seq__12072 = G__12779;
chunk__12073 = G__12780;
count__12074 = G__12781;
i__12075 = G__12782;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12099 = arguments.length;
switch (G__12099) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12103 = arguments.length;
switch (G__12103) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12119 = arguments.length;
switch (G__12119) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12796 = arguments.length;
var i__5727__auto___12797 = (0);
while(true){
if((i__5727__auto___12797 < len__5726__auto___12796)){
args__5732__auto__.push((arguments[i__5727__auto___12797]));

var G__12798 = (i__5727__auto___12797 + (1));
i__5727__auto___12797 = G__12798;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12130_12800 = cljs.core.seq(nodes);
var chunk__12131_12801 = null;
var count__12132_12802 = (0);
var i__12133_12803 = (0);
while(true){
if((i__12133_12803 < count__12132_12802)){
var node_12804 = chunk__12131_12801.cljs$core$IIndexed$_nth$arity$2(null, i__12133_12803);
fragment.appendChild(shadow.dom._to_dom(node_12804));


var G__12806 = seq__12130_12800;
var G__12807 = chunk__12131_12801;
var G__12808 = count__12132_12802;
var G__12809 = (i__12133_12803 + (1));
seq__12130_12800 = G__12806;
chunk__12131_12801 = G__12807;
count__12132_12802 = G__12808;
i__12133_12803 = G__12809;
continue;
} else {
var temp__5804__auto___12810 = cljs.core.seq(seq__12130_12800);
if(temp__5804__auto___12810){
var seq__12130_12811__$1 = temp__5804__auto___12810;
if(cljs.core.chunked_seq_QMARK_(seq__12130_12811__$1)){
var c__5525__auto___12813 = cljs.core.chunk_first(seq__12130_12811__$1);
var G__12815 = cljs.core.chunk_rest(seq__12130_12811__$1);
var G__12816 = c__5525__auto___12813;
var G__12817 = cljs.core.count(c__5525__auto___12813);
var G__12818 = (0);
seq__12130_12800 = G__12815;
chunk__12131_12801 = G__12816;
count__12132_12802 = G__12817;
i__12133_12803 = G__12818;
continue;
} else {
var node_12820 = cljs.core.first(seq__12130_12811__$1);
fragment.appendChild(shadow.dom._to_dom(node_12820));


var G__12822 = cljs.core.next(seq__12130_12811__$1);
var G__12823 = null;
var G__12824 = (0);
var G__12825 = (0);
seq__12130_12800 = G__12822;
chunk__12131_12801 = G__12823;
count__12132_12802 = G__12824;
i__12133_12803 = G__12825;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12129){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12129));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12140_12828 = cljs.core.seq(scripts);
var chunk__12141_12829 = null;
var count__12142_12830 = (0);
var i__12143_12831 = (0);
while(true){
if((i__12143_12831 < count__12142_12830)){
var vec__12154_12833 = chunk__12141_12829.cljs$core$IIndexed$_nth$arity$2(null, i__12143_12831);
var script_tag_12834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154_12833,(0),null);
var script_body_12835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12154_12833,(1),null);
eval(script_body_12835);


var G__12840 = seq__12140_12828;
var G__12841 = chunk__12141_12829;
var G__12842 = count__12142_12830;
var G__12843 = (i__12143_12831 + (1));
seq__12140_12828 = G__12840;
chunk__12141_12829 = G__12841;
count__12142_12830 = G__12842;
i__12143_12831 = G__12843;
continue;
} else {
var temp__5804__auto___12845 = cljs.core.seq(seq__12140_12828);
if(temp__5804__auto___12845){
var seq__12140_12849__$1 = temp__5804__auto___12845;
if(cljs.core.chunked_seq_QMARK_(seq__12140_12849__$1)){
var c__5525__auto___12850 = cljs.core.chunk_first(seq__12140_12849__$1);
var G__12851 = cljs.core.chunk_rest(seq__12140_12849__$1);
var G__12852 = c__5525__auto___12850;
var G__12853 = cljs.core.count(c__5525__auto___12850);
var G__12854 = (0);
seq__12140_12828 = G__12851;
chunk__12141_12829 = G__12852;
count__12142_12830 = G__12853;
i__12143_12831 = G__12854;
continue;
} else {
var vec__12158_12855 = cljs.core.first(seq__12140_12849__$1);
var script_tag_12856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158_12855,(0),null);
var script_body_12857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158_12855,(1),null);
eval(script_body_12857);


var G__12858 = cljs.core.next(seq__12140_12849__$1);
var G__12859 = null;
var G__12860 = (0);
var G__12861 = (0);
seq__12140_12828 = G__12858;
chunk__12141_12829 = G__12859;
count__12142_12830 = G__12860;
i__12143_12831 = G__12861;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12165){
var vec__12166 = p__12165;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12166,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12166,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12207 = arguments.length;
switch (G__12207) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12219 = cljs.core.seq(style_keys);
var chunk__12220 = null;
var count__12221 = (0);
var i__12222 = (0);
while(true){
if((i__12222 < count__12221)){
var it = chunk__12220.cljs$core$IIndexed$_nth$arity$2(null, i__12222);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12864 = seq__12219;
var G__12865 = chunk__12220;
var G__12866 = count__12221;
var G__12867 = (i__12222 + (1));
seq__12219 = G__12864;
chunk__12220 = G__12865;
count__12221 = G__12866;
i__12222 = G__12867;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12219);
if(temp__5804__auto__){
var seq__12219__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12219__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12219__$1);
var G__12868 = cljs.core.chunk_rest(seq__12219__$1);
var G__12869 = c__5525__auto__;
var G__12870 = cljs.core.count(c__5525__auto__);
var G__12871 = (0);
seq__12219 = G__12868;
chunk__12220 = G__12869;
count__12221 = G__12870;
i__12222 = G__12871;
continue;
} else {
var it = cljs.core.first(seq__12219__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12874 = cljs.core.next(seq__12219__$1);
var G__12875 = null;
var G__12876 = (0);
var G__12877 = (0);
seq__12219 = G__12874;
chunk__12220 = G__12875;
count__12221 = G__12876;
i__12222 = G__12877;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12241,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12273 = k12241;
var G__12273__$1 = (((G__12273 instanceof cljs.core.Keyword))?G__12273.fqn:null);
switch (G__12273__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12241,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12283){
var vec__12286 = p__12283;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12286,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12240){
var self__ = this;
var G__12240__$1 = this;
return (new cljs.core.RecordIter((0),G__12240__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12242,other12243){
var self__ = this;
var this12242__$1 = this;
return (((!((other12243 == null)))) && ((((this12242__$1.constructor === other12243.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12242__$1.x,other12243.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12242__$1.y,other12243.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12242__$1.__extmap,other12243.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12241){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12306 = k12241;
var G__12306__$1 = (((G__12306 instanceof cljs.core.Keyword))?G__12306.fqn:null);
switch (G__12306__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12241);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12240){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12307 = cljs.core.keyword_identical_QMARK_;
var expr__12308 = k__5309__auto__;
if(cljs.core.truth_((pred__12307.cljs$core$IFn$_invoke$arity$2 ? pred__12307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12308) : pred__12307.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12308)))){
return (new shadow.dom.Coordinate(G__12240,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12307.cljs$core$IFn$_invoke$arity$2 ? pred__12307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12308) : pred__12307.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12308)))){
return (new shadow.dom.Coordinate(self__.x,G__12240,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12240),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12240){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12240,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12261){
var extmap__5342__auto__ = (function (){var G__12315 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12261,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12261)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12315);
} else {
return G__12315;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12261),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12261),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12323,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12330 = k12323;
var G__12330__$1 = (((G__12330 instanceof cljs.core.Keyword))?G__12330.fqn:null);
switch (G__12330__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12323,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12331){
var vec__12332 = p__12331;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12332,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12322){
var self__ = this;
var G__12322__$1 = this;
return (new cljs.core.RecordIter((0),G__12322__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12324,other12325){
var self__ = this;
var this12324__$1 = this;
return (((!((other12325 == null)))) && ((((this12324__$1.constructor === other12325.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12324__$1.w,other12325.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12324__$1.h,other12325.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12324__$1.__extmap,other12325.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12323){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12340 = k12323;
var G__12340__$1 = (((G__12340 instanceof cljs.core.Keyword))?G__12340.fqn:null);
switch (G__12340__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12323);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12322){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12342 = cljs.core.keyword_identical_QMARK_;
var expr__12343 = k__5309__auto__;
if(cljs.core.truth_((pred__12342.cljs$core$IFn$_invoke$arity$2 ? pred__12342.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12343) : pred__12342.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12343)))){
return (new shadow.dom.Size(G__12322,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12342.cljs$core$IFn$_invoke$arity$2 ? pred__12342.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12343) : pred__12342.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12343)))){
return (new shadow.dom.Size(self__.w,G__12322,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12322),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12322){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12322,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12329){
var extmap__5342__auto__ = (function (){var G__12348 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12329,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12329)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12348);
} else {
return G__12348;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12329),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12329),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12917 = (i + (1));
var G__12918 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12917;
ret = G__12918;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12358){
var vec__12361 = p__12358;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12361,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12369 = arguments.length;
switch (G__12369) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12922 = ps;
var G__12923 = (i + (1));
el__$1 = G__12922;
i = G__12923;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12389 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12389,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12389,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12389,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12395_12929 = cljs.core.seq(props);
var chunk__12396_12930 = null;
var count__12397_12931 = (0);
var i__12398_12932 = (0);
while(true){
if((i__12398_12932 < count__12397_12931)){
var vec__12411_12934 = chunk__12396_12930.cljs$core$IIndexed$_nth$arity$2(null, i__12398_12932);
var k_12935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411_12934,(0),null);
var v_12936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411_12934,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12935);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12935),v_12936);


var G__12939 = seq__12395_12929;
var G__12940 = chunk__12396_12930;
var G__12941 = count__12397_12931;
var G__12942 = (i__12398_12932 + (1));
seq__12395_12929 = G__12939;
chunk__12396_12930 = G__12940;
count__12397_12931 = G__12941;
i__12398_12932 = G__12942;
continue;
} else {
var temp__5804__auto___12943 = cljs.core.seq(seq__12395_12929);
if(temp__5804__auto___12943){
var seq__12395_12944__$1 = temp__5804__auto___12943;
if(cljs.core.chunked_seq_QMARK_(seq__12395_12944__$1)){
var c__5525__auto___12945 = cljs.core.chunk_first(seq__12395_12944__$1);
var G__12946 = cljs.core.chunk_rest(seq__12395_12944__$1);
var G__12947 = c__5525__auto___12945;
var G__12948 = cljs.core.count(c__5525__auto___12945);
var G__12949 = (0);
seq__12395_12929 = G__12946;
chunk__12396_12930 = G__12947;
count__12397_12931 = G__12948;
i__12398_12932 = G__12949;
continue;
} else {
var vec__12418_12950 = cljs.core.first(seq__12395_12944__$1);
var k_12951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418_12950,(0),null);
var v_12952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418_12950,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12951);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12951),v_12952);


var G__12954 = cljs.core.next(seq__12395_12944__$1);
var G__12955 = null;
var G__12956 = (0);
var G__12957 = (0);
seq__12395_12929 = G__12954;
chunk__12396_12930 = G__12955;
count__12397_12931 = G__12956;
i__12398_12932 = G__12957;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12430 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
var seq__12433_12967 = cljs.core.seq(node_children);
var chunk__12435_12968 = null;
var count__12436_12969 = (0);
var i__12437_12970 = (0);
while(true){
if((i__12437_12970 < count__12436_12969)){
var child_struct_12971 = chunk__12435_12968.cljs$core$IIndexed$_nth$arity$2(null, i__12437_12970);
if((!((child_struct_12971 == null)))){
if(typeof child_struct_12971 === 'string'){
var text_12972 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12972),child_struct_12971].join(''));
} else {
var children_12973 = shadow.dom.svg_node(child_struct_12971);
if(cljs.core.seq_QMARK_(children_12973)){
var seq__12478_12974 = cljs.core.seq(children_12973);
var chunk__12480_12975 = null;
var count__12481_12976 = (0);
var i__12482_12977 = (0);
while(true){
if((i__12482_12977 < count__12481_12976)){
var child_12978 = chunk__12480_12975.cljs$core$IIndexed$_nth$arity$2(null, i__12482_12977);
if(cljs.core.truth_(child_12978)){
node.appendChild(child_12978);


var G__12979 = seq__12478_12974;
var G__12980 = chunk__12480_12975;
var G__12981 = count__12481_12976;
var G__12982 = (i__12482_12977 + (1));
seq__12478_12974 = G__12979;
chunk__12480_12975 = G__12980;
count__12481_12976 = G__12981;
i__12482_12977 = G__12982;
continue;
} else {
var G__12983 = seq__12478_12974;
var G__12984 = chunk__12480_12975;
var G__12985 = count__12481_12976;
var G__12986 = (i__12482_12977 + (1));
seq__12478_12974 = G__12983;
chunk__12480_12975 = G__12984;
count__12481_12976 = G__12985;
i__12482_12977 = G__12986;
continue;
}
} else {
var temp__5804__auto___12987 = cljs.core.seq(seq__12478_12974);
if(temp__5804__auto___12987){
var seq__12478_12989__$1 = temp__5804__auto___12987;
if(cljs.core.chunked_seq_QMARK_(seq__12478_12989__$1)){
var c__5525__auto___12990 = cljs.core.chunk_first(seq__12478_12989__$1);
var G__12991 = cljs.core.chunk_rest(seq__12478_12989__$1);
var G__12992 = c__5525__auto___12990;
var G__12993 = cljs.core.count(c__5525__auto___12990);
var G__12994 = (0);
seq__12478_12974 = G__12991;
chunk__12480_12975 = G__12992;
count__12481_12976 = G__12993;
i__12482_12977 = G__12994;
continue;
} else {
var child_12995 = cljs.core.first(seq__12478_12989__$1);
if(cljs.core.truth_(child_12995)){
node.appendChild(child_12995);


var G__12997 = cljs.core.next(seq__12478_12989__$1);
var G__12998 = null;
var G__12999 = (0);
var G__13000 = (0);
seq__12478_12974 = G__12997;
chunk__12480_12975 = G__12998;
count__12481_12976 = G__12999;
i__12482_12977 = G__13000;
continue;
} else {
var G__13001 = cljs.core.next(seq__12478_12989__$1);
var G__13002 = null;
var G__13003 = (0);
var G__13004 = (0);
seq__12478_12974 = G__13001;
chunk__12480_12975 = G__13002;
count__12481_12976 = G__13003;
i__12482_12977 = G__13004;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12973);
}
}


var G__13005 = seq__12433_12967;
var G__13006 = chunk__12435_12968;
var G__13007 = count__12436_12969;
var G__13008 = (i__12437_12970 + (1));
seq__12433_12967 = G__13005;
chunk__12435_12968 = G__13006;
count__12436_12969 = G__13007;
i__12437_12970 = G__13008;
continue;
} else {
var G__13010 = seq__12433_12967;
var G__13011 = chunk__12435_12968;
var G__13012 = count__12436_12969;
var G__13013 = (i__12437_12970 + (1));
seq__12433_12967 = G__13010;
chunk__12435_12968 = G__13011;
count__12436_12969 = G__13012;
i__12437_12970 = G__13013;
continue;
}
} else {
var temp__5804__auto___13014 = cljs.core.seq(seq__12433_12967);
if(temp__5804__auto___13014){
var seq__12433_13015__$1 = temp__5804__auto___13014;
if(cljs.core.chunked_seq_QMARK_(seq__12433_13015__$1)){
var c__5525__auto___13017 = cljs.core.chunk_first(seq__12433_13015__$1);
var G__13018 = cljs.core.chunk_rest(seq__12433_13015__$1);
var G__13019 = c__5525__auto___13017;
var G__13020 = cljs.core.count(c__5525__auto___13017);
var G__13021 = (0);
seq__12433_12967 = G__13018;
chunk__12435_12968 = G__13019;
count__12436_12969 = G__13020;
i__12437_12970 = G__13021;
continue;
} else {
var child_struct_13022 = cljs.core.first(seq__12433_13015__$1);
if((!((child_struct_13022 == null)))){
if(typeof child_struct_13022 === 'string'){
var text_13024 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13024),child_struct_13022].join(''));
} else {
var children_13025 = shadow.dom.svg_node(child_struct_13022);
if(cljs.core.seq_QMARK_(children_13025)){
var seq__12493_13026 = cljs.core.seq(children_13025);
var chunk__12495_13027 = null;
var count__12496_13028 = (0);
var i__12497_13029 = (0);
while(true){
if((i__12497_13029 < count__12496_13028)){
var child_13030 = chunk__12495_13027.cljs$core$IIndexed$_nth$arity$2(null, i__12497_13029);
if(cljs.core.truth_(child_13030)){
node.appendChild(child_13030);


var G__13031 = seq__12493_13026;
var G__13032 = chunk__12495_13027;
var G__13033 = count__12496_13028;
var G__13034 = (i__12497_13029 + (1));
seq__12493_13026 = G__13031;
chunk__12495_13027 = G__13032;
count__12496_13028 = G__13033;
i__12497_13029 = G__13034;
continue;
} else {
var G__13035 = seq__12493_13026;
var G__13036 = chunk__12495_13027;
var G__13037 = count__12496_13028;
var G__13038 = (i__12497_13029 + (1));
seq__12493_13026 = G__13035;
chunk__12495_13027 = G__13036;
count__12496_13028 = G__13037;
i__12497_13029 = G__13038;
continue;
}
} else {
var temp__5804__auto___13040__$1 = cljs.core.seq(seq__12493_13026);
if(temp__5804__auto___13040__$1){
var seq__12493_13041__$1 = temp__5804__auto___13040__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12493_13041__$1)){
var c__5525__auto___13042 = cljs.core.chunk_first(seq__12493_13041__$1);
var G__13043 = cljs.core.chunk_rest(seq__12493_13041__$1);
var G__13044 = c__5525__auto___13042;
var G__13045 = cljs.core.count(c__5525__auto___13042);
var G__13046 = (0);
seq__12493_13026 = G__13043;
chunk__12495_13027 = G__13044;
count__12496_13028 = G__13045;
i__12497_13029 = G__13046;
continue;
} else {
var child_13047 = cljs.core.first(seq__12493_13041__$1);
if(cljs.core.truth_(child_13047)){
node.appendChild(child_13047);


var G__13049 = cljs.core.next(seq__12493_13041__$1);
var G__13050 = null;
var G__13051 = (0);
var G__13052 = (0);
seq__12493_13026 = G__13049;
chunk__12495_13027 = G__13050;
count__12496_13028 = G__13051;
i__12497_13029 = G__13052;
continue;
} else {
var G__13053 = cljs.core.next(seq__12493_13041__$1);
var G__13054 = null;
var G__13055 = (0);
var G__13056 = (0);
seq__12493_13026 = G__13053;
chunk__12495_13027 = G__13054;
count__12496_13028 = G__13055;
i__12497_13029 = G__13056;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13025);
}
}


var G__13057 = cljs.core.next(seq__12433_13015__$1);
var G__13058 = null;
var G__13059 = (0);
var G__13060 = (0);
seq__12433_12967 = G__13057;
chunk__12435_12968 = G__13058;
count__12436_12969 = G__13059;
i__12437_12970 = G__13060;
continue;
} else {
var G__13061 = cljs.core.next(seq__12433_13015__$1);
var G__13062 = null;
var G__13063 = (0);
var G__13064 = (0);
seq__12433_12967 = G__13061;
chunk__12435_12968 = G__13062;
count__12436_12969 = G__13063;
i__12437_12970 = G__13064;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13070 = arguments.length;
var i__5727__auto___13071 = (0);
while(true){
if((i__5727__auto___13071 < len__5726__auto___13070)){
args__5732__auto__.push((arguments[i__5727__auto___13071]));

var G__13073 = (i__5727__auto___13071 + (1));
i__5727__auto___13071 = G__13073;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12502){
var G__12503 = cljs.core.first(seq12502);
var seq12502__$1 = cljs.core.next(seq12502);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12503,seq12502__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
