goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__21982 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21983 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21983);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__21984 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__21985 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__21985);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21984);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__21982);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__21992 = arguments.length;
switch (G__21992) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__21996 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__21999_22022 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22000_22023 = null;
var count__22001_22024 = (0);
var i__22002_22025 = (0);
while(true){
if((i__22002_22025 < count__22001_22024)){
var vec__22011_22026 = chunk__22000_22023.cljs$core$IIndexed$_nth$arity$2(null, i__22002_22025);
var container_22027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011_22026,(0),null);
var comp_22028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011_22026,(1),null);
reagent.dom.re_render_component(comp_22028,container_22027);


var G__22029 = seq__21999_22022;
var G__22030 = chunk__22000_22023;
var G__22031 = count__22001_22024;
var G__22032 = (i__22002_22025 + (1));
seq__21999_22022 = G__22029;
chunk__22000_22023 = G__22030;
count__22001_22024 = G__22031;
i__22002_22025 = G__22032;
continue;
} else {
var temp__5804__auto___22033 = cljs.core.seq(seq__21999_22022);
if(temp__5804__auto___22033){
var seq__21999_22034__$1 = temp__5804__auto___22033;
if(cljs.core.chunked_seq_QMARK_(seq__21999_22034__$1)){
var c__5525__auto___22035 = cljs.core.chunk_first(seq__21999_22034__$1);
var G__22036 = cljs.core.chunk_rest(seq__21999_22034__$1);
var G__22037 = c__5525__auto___22035;
var G__22038 = cljs.core.count(c__5525__auto___22035);
var G__22039 = (0);
seq__21999_22022 = G__22036;
chunk__22000_22023 = G__22037;
count__22001_22024 = G__22038;
i__22002_22025 = G__22039;
continue;
} else {
var vec__22015_22040 = cljs.core.first(seq__21999_22034__$1);
var container_22041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015_22040,(0),null);
var comp_22042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015_22040,(1),null);
reagent.dom.re_render_component(comp_22042,container_22041);


var G__22043 = cljs.core.next(seq__21999_22034__$1);
var G__22044 = null;
var G__22045 = (0);
var G__22046 = (0);
seq__21999_22022 = G__22043;
chunk__22000_22023 = G__22044;
count__22001_22024 = G__22045;
i__22002_22025 = G__22046;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
