goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18834){
var map__18836 = p__18834;
var map__18836__$1 = cljs.core.__destructure_map(map__18836);
var m = map__18836__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18843_19173 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18844_19174 = null;
var count__18845_19175 = (0);
var i__18846_19176 = (0);
while(true){
if((i__18846_19176 < count__18845_19175)){
var f_19178 = chunk__18844_19174.cljs$core$IIndexed$_nth$arity$2(null, i__18846_19176);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19178], 0));


var G__19179 = seq__18843_19173;
var G__19180 = chunk__18844_19174;
var G__19181 = count__18845_19175;
var G__19182 = (i__18846_19176 + (1));
seq__18843_19173 = G__19179;
chunk__18844_19174 = G__19180;
count__18845_19175 = G__19181;
i__18846_19176 = G__19182;
continue;
} else {
var temp__5804__auto___19183 = cljs.core.seq(seq__18843_19173);
if(temp__5804__auto___19183){
var seq__18843_19184__$1 = temp__5804__auto___19183;
if(cljs.core.chunked_seq_QMARK_(seq__18843_19184__$1)){
var c__5525__auto___19186 = cljs.core.chunk_first(seq__18843_19184__$1);
var G__19187 = cljs.core.chunk_rest(seq__18843_19184__$1);
var G__19188 = c__5525__auto___19186;
var G__19189 = cljs.core.count(c__5525__auto___19186);
var G__19190 = (0);
seq__18843_19173 = G__19187;
chunk__18844_19174 = G__19188;
count__18845_19175 = G__19189;
i__18846_19176 = G__19190;
continue;
} else {
var f_19192 = cljs.core.first(seq__18843_19184__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19192], 0));


var G__19193 = cljs.core.next(seq__18843_19184__$1);
var G__19194 = null;
var G__19195 = (0);
var G__19196 = (0);
seq__18843_19173 = G__19193;
chunk__18844_19174 = G__19194;
count__18845_19175 = G__19195;
i__18846_19176 = G__19196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19197], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19197)))?cljs.core.second(arglists_19197):arglists_19197)], 0));
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
var seq__18879_19202 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18880_19203 = null;
var count__18881_19204 = (0);
var i__18882_19205 = (0);
while(true){
if((i__18882_19205 < count__18881_19204)){
var vec__18903_19206 = chunk__18880_19203.cljs$core$IIndexed$_nth$arity$2(null, i__18882_19205);
var name_19207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18903_19206,(0),null);
var map__18906_19208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18903_19206,(1),null);
var map__18906_19209__$1 = cljs.core.__destructure_map(map__18906_19208);
var doc_19210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906_19209__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906_19209__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19207], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19211], 0));

if(cljs.core.truth_(doc_19210)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19210], 0));
} else {
}


var G__19219 = seq__18879_19202;
var G__19220 = chunk__18880_19203;
var G__19221 = count__18881_19204;
var G__19222 = (i__18882_19205 + (1));
seq__18879_19202 = G__19219;
chunk__18880_19203 = G__19220;
count__18881_19204 = G__19221;
i__18882_19205 = G__19222;
continue;
} else {
var temp__5804__auto___19223 = cljs.core.seq(seq__18879_19202);
if(temp__5804__auto___19223){
var seq__18879_19224__$1 = temp__5804__auto___19223;
if(cljs.core.chunked_seq_QMARK_(seq__18879_19224__$1)){
var c__5525__auto___19225 = cljs.core.chunk_first(seq__18879_19224__$1);
var G__19226 = cljs.core.chunk_rest(seq__18879_19224__$1);
var G__19227 = c__5525__auto___19225;
var G__19228 = cljs.core.count(c__5525__auto___19225);
var G__19229 = (0);
seq__18879_19202 = G__19226;
chunk__18880_19203 = G__19227;
count__18881_19204 = G__19228;
i__18882_19205 = G__19229;
continue;
} else {
var vec__18920_19231 = cljs.core.first(seq__18879_19224__$1);
var name_19232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18920_19231,(0),null);
var map__18923_19233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18920_19231,(1),null);
var map__18923_19234__$1 = cljs.core.__destructure_map(map__18923_19233);
var doc_19235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18923_19234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18923_19234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19232], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19236], 0));

if(cljs.core.truth_(doc_19235)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19235], 0));
} else {
}


var G__19240 = cljs.core.next(seq__18879_19224__$1);
var G__19241 = null;
var G__19242 = (0);
var G__19243 = (0);
seq__18879_19202 = G__19240;
chunk__18880_19203 = G__19241;
count__18881_19204 = G__19242;
i__18882_19205 = G__19243;
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

var seq__18935 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18936 = null;
var count__18937 = (0);
var i__18938 = (0);
while(true){
if((i__18938 < count__18937)){
var role = chunk__18936.cljs$core$IIndexed$_nth$arity$2(null, i__18938);
var temp__5804__auto___19245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19245__$1)){
var spec_19247 = temp__5804__auto___19245__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19247)], 0));
} else {
}


var G__19251 = seq__18935;
var G__19252 = chunk__18936;
var G__19253 = count__18937;
var G__19254 = (i__18938 + (1));
seq__18935 = G__19251;
chunk__18936 = G__19252;
count__18937 = G__19253;
i__18938 = G__19254;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18935);
if(temp__5804__auto____$1){
var seq__18935__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18935__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18935__$1);
var G__19257 = cljs.core.chunk_rest(seq__18935__$1);
var G__19258 = c__5525__auto__;
var G__19259 = cljs.core.count(c__5525__auto__);
var G__19260 = (0);
seq__18935 = G__19257;
chunk__18936 = G__19258;
count__18937 = G__19259;
i__18938 = G__19260;
continue;
} else {
var role = cljs.core.first(seq__18935__$1);
var temp__5804__auto___19266__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19266__$2)){
var spec_19267 = temp__5804__auto___19266__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19267)], 0));
} else {
}


var G__19268 = cljs.core.next(seq__18935__$1);
var G__19269 = null;
var G__19270 = (0);
var G__19271 = (0);
seq__18935 = G__19268;
chunk__18936 = G__19269;
count__18937 = G__19270;
i__18938 = G__19271;
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
var map__18992 = datafied_throwable;
var map__18992__$1 = cljs.core.__destructure_map(map__18992);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18992__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18993 = cljs.core.last(via);
var map__18993__$1 = cljs.core.__destructure_map(map__18993);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18993__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18993__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18993__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18995 = data;
var map__18995__$1 = cljs.core.__destructure_map(map__18995);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18996 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18996__$1 = cljs.core.__destructure_map(map__18996);
var top_data = map__18996__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19010 = phase;
var G__19010__$1 = (((G__19010 instanceof cljs.core.Keyword))?G__19010.fqn:null);
switch (G__19010__$1) {
case "read-source":
var map__19012 = data;
var map__19012__$1 = cljs.core.__destructure_map(map__19012);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19013 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19013__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19013,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19013);
var G__19013__$2 = (cljs.core.truth_((function (){var fexpr__19019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19019.cljs$core$IFn$_invoke$arity$1 ? fexpr__19019.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19019.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19013__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19013__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19013__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19013__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19033 = top_data;
var G__19033__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19033,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19033);
var G__19033__$2 = (cljs.core.truth_((function (){var fexpr__19034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19034.cljs$core$IFn$_invoke$arity$1 ? fexpr__19034.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19034.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19033__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19033__$1);
var G__19033__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19033__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19033__$2);
var G__19033__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19033__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19033__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19033__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19033__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19060 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(3),null);
var G__19064 = top_data;
var G__19064__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19064);
var G__19064__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19064__$1);
var G__19064__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19064__$2);
var G__19064__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19064__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19064__$4;
}

break;
case "execution":
var vec__19072 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19072,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18969_SHARP_){
var or__5002__auto__ = (p1__18969_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19076.cljs$core$IFn$_invoke$arity$1 ? fexpr__19076.cljs$core$IFn$_invoke$arity$1(p1__18969_SHARP_) : fexpr__19076.call(null, p1__18969_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19077 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19077__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19077,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19077);
var G__19077__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19077__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19077__$1);
var G__19077__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19077__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19077__$2);
var G__19077__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19077__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19077__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19077__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19077__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19010__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19091){
var map__19092 = p__19091;
var map__19092__$1 = cljs.core.__destructure_map(map__19092);
var triage_data = map__19092__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19097 = phase;
var G__19097__$1 = (((G__19097 instanceof cljs.core.Keyword))?G__19097.fqn:null);
switch (G__19097__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19098 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19099 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19100 = loc;
var G__19101 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19103_19332 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19104_19333 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19105_19334 = true;
var _STAR_print_fn_STAR__temp_val__19106_19335 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19105_19334);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19106_19335);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19083_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19083_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19104_19333);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19103_19332);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19098,G__19099,G__19100,G__19101) : format.call(null, G__19098,G__19099,G__19100,G__19101));

break;
case "macroexpansion":
var G__19107 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19108 = cause_type;
var G__19109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19110 = loc;
var G__19111 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19107,G__19108,G__19109,G__19110,G__19111) : format.call(null, G__19107,G__19108,G__19109,G__19110,G__19111));

break;
case "compile-syntax-check":
var G__19112 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19113 = cause_type;
var G__19114 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19115 = loc;
var G__19116 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19112,G__19113,G__19114,G__19115,G__19116) : format.call(null, G__19112,G__19113,G__19114,G__19115,G__19116));

break;
case "compilation":
var G__19117 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19118 = cause_type;
var G__19119 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19120 = loc;
var G__19121 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19117,G__19118,G__19119,G__19120,G__19121) : format.call(null, G__19117,G__19118,G__19119,G__19120,G__19121));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19123 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19124 = symbol;
var G__19125 = loc;
var G__19126 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19131_19337 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19132_19338 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19133_19339 = true;
var _STAR_print_fn_STAR__temp_val__19134_19340 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19133_19339);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19134_19340);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19088_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19088_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19132_19338);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19131_19337);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19123,G__19124,G__19125,G__19126) : format.call(null, G__19123,G__19124,G__19125,G__19126));
} else {
var G__19153 = "Execution error%s at %s(%s).\n%s\n";
var G__19154 = cause_type;
var G__19155 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19156 = loc;
var G__19157 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19153,G__19154,G__19155,G__19156,G__19157) : format.call(null, G__19153,G__19154,G__19155,G__19156,G__19157));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19097__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
