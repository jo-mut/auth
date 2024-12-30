goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17908){
var map__17909 = p__17908;
var map__17909__$1 = cljs.core.__destructure_map(map__17909);
var m = map__17909__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17911_18141 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17912_18142 = null;
var count__17913_18143 = (0);
var i__17914_18144 = (0);
while(true){
if((i__17914_18144 < count__17913_18143)){
var f_18145 = chunk__17912_18142.cljs$core$IIndexed$_nth$arity$2(null, i__17914_18144);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18145], 0));


var G__18146 = seq__17911_18141;
var G__18147 = chunk__17912_18142;
var G__18148 = count__17913_18143;
var G__18149 = (i__17914_18144 + (1));
seq__17911_18141 = G__18146;
chunk__17912_18142 = G__18147;
count__17913_18143 = G__18148;
i__17914_18144 = G__18149;
continue;
} else {
var temp__5804__auto___18150 = cljs.core.seq(seq__17911_18141);
if(temp__5804__auto___18150){
var seq__17911_18151__$1 = temp__5804__auto___18150;
if(cljs.core.chunked_seq_QMARK_(seq__17911_18151__$1)){
var c__5525__auto___18152 = cljs.core.chunk_first(seq__17911_18151__$1);
var G__18153 = cljs.core.chunk_rest(seq__17911_18151__$1);
var G__18154 = c__5525__auto___18152;
var G__18155 = cljs.core.count(c__5525__auto___18152);
var G__18156 = (0);
seq__17911_18141 = G__18153;
chunk__17912_18142 = G__18154;
count__17913_18143 = G__18155;
i__17914_18144 = G__18156;
continue;
} else {
var f_18157 = cljs.core.first(seq__17911_18151__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18157], 0));


var G__18160 = cljs.core.next(seq__17911_18151__$1);
var G__18161 = null;
var G__18162 = (0);
var G__18163 = (0);
seq__17911_18141 = G__18160;
chunk__17912_18142 = G__18161;
count__17913_18143 = G__18162;
i__17914_18144 = G__18163;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18164 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18164], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18164)))?cljs.core.second(arglists_18164):arglists_18164)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17917_18165 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17918_18166 = null;
var count__17919_18167 = (0);
var i__17920_18168 = (0);
while(true){
if((i__17920_18168 < count__17919_18167)){
var vec__17948_18169 = chunk__17918_18166.cljs$core$IIndexed$_nth$arity$2(null, i__17920_18168);
var name_18170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_18169,(0),null);
var map__17951_18171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17948_18169,(1),null);
var map__17951_18172__$1 = cljs.core.__destructure_map(map__17951_18171);
var doc_18173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951_18172__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951_18172__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18170], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18174], 0));

if(cljs.core.truth_(doc_18173)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18173], 0));
} else {
}


var G__18175 = seq__17917_18165;
var G__18176 = chunk__17918_18166;
var G__18177 = count__17919_18167;
var G__18178 = (i__17920_18168 + (1));
seq__17917_18165 = G__18175;
chunk__17918_18166 = G__18176;
count__17919_18167 = G__18177;
i__17920_18168 = G__18178;
continue;
} else {
var temp__5804__auto___18179 = cljs.core.seq(seq__17917_18165);
if(temp__5804__auto___18179){
var seq__17917_18180__$1 = temp__5804__auto___18179;
if(cljs.core.chunked_seq_QMARK_(seq__17917_18180__$1)){
var c__5525__auto___18181 = cljs.core.chunk_first(seq__17917_18180__$1);
var G__18182 = cljs.core.chunk_rest(seq__17917_18180__$1);
var G__18183 = c__5525__auto___18181;
var G__18184 = cljs.core.count(c__5525__auto___18181);
var G__18185 = (0);
seq__17917_18165 = G__18182;
chunk__17918_18166 = G__18183;
count__17919_18167 = G__18184;
i__17920_18168 = G__18185;
continue;
} else {
var vec__17959_18186 = cljs.core.first(seq__17917_18180__$1);
var name_18187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959_18186,(0),null);
var map__17962_18188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959_18186,(1),null);
var map__17962_18189__$1 = cljs.core.__destructure_map(map__17962_18188);
var doc_18190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962_18189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962_18189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18187], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18191], 0));

if(cljs.core.truth_(doc_18190)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18190], 0));
} else {
}


var G__18192 = cljs.core.next(seq__17917_18180__$1);
var G__18193 = null;
var G__18194 = (0);
var G__18195 = (0);
seq__17917_18165 = G__18192;
chunk__17918_18166 = G__18193;
count__17919_18167 = G__18194;
i__17920_18168 = G__18195;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17978 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17979 = null;
var count__17980 = (0);
var i__17981 = (0);
while(true){
if((i__17981 < count__17980)){
var role = chunk__17979.cljs$core$IIndexed$_nth$arity$2(null, i__17981);
var temp__5804__auto___18196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18196__$1)){
var spec_18197 = temp__5804__auto___18196__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18197)], 0));
} else {
}


var G__18198 = seq__17978;
var G__18199 = chunk__17979;
var G__18200 = count__17980;
var G__18201 = (i__17981 + (1));
seq__17978 = G__18198;
chunk__17979 = G__18199;
count__17980 = G__18200;
i__17981 = G__18201;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17978);
if(temp__5804__auto____$1){
var seq__17978__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17978__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17978__$1);
var G__18202 = cljs.core.chunk_rest(seq__17978__$1);
var G__18203 = c__5525__auto__;
var G__18204 = cljs.core.count(c__5525__auto__);
var G__18205 = (0);
seq__17978 = G__18202;
chunk__17979 = G__18203;
count__17980 = G__18204;
i__17981 = G__18205;
continue;
} else {
var role = cljs.core.first(seq__17978__$1);
var temp__5804__auto___18206__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18206__$2)){
var spec_18207 = temp__5804__auto___18206__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18207)], 0));
} else {
}


var G__18209 = cljs.core.next(seq__17978__$1);
var G__18210 = null;
var G__18211 = (0);
var G__18212 = (0);
seq__17978 = G__18209;
chunk__17979 = G__18210;
count__17980 = G__18211;
i__17981 = G__18212;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18050 = datafied_throwable;
var map__18050__$1 = cljs.core.__destructure_map(map__18050);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18050__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18050__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18050__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18051 = cljs.core.last(via);
var map__18051__$1 = cljs.core.__destructure_map(map__18051);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18051__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18051__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18052 = data;
var map__18052__$1 = cljs.core.__destructure_map(map__18052);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18052__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18052__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18052__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18053 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18053__$1 = cljs.core.__destructure_map(map__18053);
var top_data = map__18053__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18053__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18057 = phase;
var G__18057__$1 = (((G__18057 instanceof cljs.core.Keyword))?G__18057.fqn:null);
switch (G__18057__$1) {
case "read-source":
var map__18059 = data;
var map__18059__$1 = cljs.core.__destructure_map(map__18059);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18059__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18060 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18060__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18060,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18060);
var G__18060__$2 = (cljs.core.truth_((function (){var fexpr__18065 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18065.cljs$core$IFn$_invoke$arity$1 ? fexpr__18065.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18065.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18060__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18060__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18060__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18060__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18067 = top_data;
var G__18067__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18067,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18067);
var G__18067__$2 = (cljs.core.truth_((function (){var fexpr__18068 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18068.cljs$core$IFn$_invoke$arity$1 ? fexpr__18068.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18068.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18067__$1);
var G__18067__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18067__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18067__$2);
var G__18067__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18067__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18067__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18067__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18067__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18070 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(3),null);
var G__18073 = top_data;
var G__18073__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18073,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18073);
var G__18073__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18073__$1);
var G__18073__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18073__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18073__$2);
var G__18073__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18073__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18073__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18073__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18073__$4;
}

break;
case "execution":
var vec__18075 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18048_SHARP_){
var or__5002__auto__ = (p1__18048_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18079.cljs$core$IFn$_invoke$arity$1 ? fexpr__18079.cljs$core$IFn$_invoke$arity$1(p1__18048_SHARP_) : fexpr__18079.call(null, p1__18048_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18080 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18080__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18080);
var G__18080__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18080__$1);
var G__18080__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18080__$2);
var G__18080__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18080__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18080__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18080__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18057__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18095){
var map__18098 = p__18095;
var map__18098__$1 = cljs.core.__destructure_map(map__18098);
var triage_data = map__18098__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18099 = phase;
var G__18099__$1 = (((G__18099 instanceof cljs.core.Keyword))?G__18099.fqn:null);
switch (G__18099__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18100 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18101 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18102 = loc;
var G__18103 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18104_18220 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18105_18221 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18106_18222 = true;
var _STAR_print_fn_STAR__temp_val__18107_18223 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18106_18222);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18107_18223);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18088_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18088_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18105_18221);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18104_18220);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18100,G__18101,G__18102,G__18103) : format.call(null, G__18100,G__18101,G__18102,G__18103));

break;
case "macroexpansion":
var G__18108 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18109 = cause_type;
var G__18110 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18111 = loc;
var G__18112 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18108,G__18109,G__18110,G__18111,G__18112) : format.call(null, G__18108,G__18109,G__18110,G__18111,G__18112));

break;
case "compile-syntax-check":
var G__18113 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18114 = cause_type;
var G__18115 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18116 = loc;
var G__18117 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18113,G__18114,G__18115,G__18116,G__18117) : format.call(null, G__18113,G__18114,G__18115,G__18116,G__18117));

break;
case "compilation":
var G__18118 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18119 = cause_type;
var G__18120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18121 = loc;
var G__18122 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18118,G__18119,G__18120,G__18121,G__18122) : format.call(null, G__18118,G__18119,G__18120,G__18121,G__18122));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18123 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18124 = symbol;
var G__18125 = loc;
var G__18126 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18127_18225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18128_18226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18129_18227 = true;
var _STAR_print_fn_STAR__temp_val__18130_18228 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18129_18227);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18130_18228);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18092_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18092_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18128_18226);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18127_18225);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18123,G__18124,G__18125,G__18126) : format.call(null, G__18123,G__18124,G__18125,G__18126));
} else {
var G__18133 = "Execution error%s at %s(%s).\n%s\n";
var G__18134 = cause_type;
var G__18135 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18136 = loc;
var G__18137 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18133,G__18134,G__18135,G__18136,G__18137) : format.call(null, G__18133,G__18134,G__18135,G__18136,G__18137));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18099__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
