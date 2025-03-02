goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18423){
var map__18424 = p__18423;
var map__18424__$1 = cljs.core.__destructure_map(map__18424);
var m = map__18424__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18432_18789 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18433_18790 = null;
var count__18434_18791 = (0);
var i__18435_18792 = (0);
while(true){
if((i__18435_18792 < count__18434_18791)){
var f_18793 = chunk__18433_18790.cljs$core$IIndexed$_nth$arity$2(null, i__18435_18792);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18793], 0));


var G__18794 = seq__18432_18789;
var G__18795 = chunk__18433_18790;
var G__18796 = count__18434_18791;
var G__18797 = (i__18435_18792 + (1));
seq__18432_18789 = G__18794;
chunk__18433_18790 = G__18795;
count__18434_18791 = G__18796;
i__18435_18792 = G__18797;
continue;
} else {
var temp__5804__auto___18798 = cljs.core.seq(seq__18432_18789);
if(temp__5804__auto___18798){
var seq__18432_18799__$1 = temp__5804__auto___18798;
if(cljs.core.chunked_seq_QMARK_(seq__18432_18799__$1)){
var c__5525__auto___18800 = cljs.core.chunk_first(seq__18432_18799__$1);
var G__18801 = cljs.core.chunk_rest(seq__18432_18799__$1);
var G__18802 = c__5525__auto___18800;
var G__18803 = cljs.core.count(c__5525__auto___18800);
var G__18804 = (0);
seq__18432_18789 = G__18801;
chunk__18433_18790 = G__18802;
count__18434_18791 = G__18803;
i__18435_18792 = G__18804;
continue;
} else {
var f_18805 = cljs.core.first(seq__18432_18799__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18805], 0));


var G__18806 = cljs.core.next(seq__18432_18799__$1);
var G__18807 = null;
var G__18808 = (0);
var G__18809 = (0);
seq__18432_18789 = G__18806;
chunk__18433_18790 = G__18807;
count__18434_18791 = G__18808;
i__18435_18792 = G__18809;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18810 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18810], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18810)))?cljs.core.second(arglists_18810):arglists_18810)], 0));
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
var seq__18448_18817 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18449_18818 = null;
var count__18450_18819 = (0);
var i__18451_18820 = (0);
while(true){
if((i__18451_18820 < count__18450_18819)){
var vec__18468_18824 = chunk__18449_18818.cljs$core$IIndexed$_nth$arity$2(null, i__18451_18820);
var name_18825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468_18824,(0),null);
var map__18471_18826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468_18824,(1),null);
var map__18471_18827__$1 = cljs.core.__destructure_map(map__18471_18826);
var doc_18828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471_18827__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471_18827__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18825], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18829], 0));

if(cljs.core.truth_(doc_18828)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18828], 0));
} else {
}


var G__18830 = seq__18448_18817;
var G__18831 = chunk__18449_18818;
var G__18832 = count__18450_18819;
var G__18833 = (i__18451_18820 + (1));
seq__18448_18817 = G__18830;
chunk__18449_18818 = G__18831;
count__18450_18819 = G__18832;
i__18451_18820 = G__18833;
continue;
} else {
var temp__5804__auto___18834 = cljs.core.seq(seq__18448_18817);
if(temp__5804__auto___18834){
var seq__18448_18835__$1 = temp__5804__auto___18834;
if(cljs.core.chunked_seq_QMARK_(seq__18448_18835__$1)){
var c__5525__auto___18836 = cljs.core.chunk_first(seq__18448_18835__$1);
var G__18837 = cljs.core.chunk_rest(seq__18448_18835__$1);
var G__18838 = c__5525__auto___18836;
var G__18839 = cljs.core.count(c__5525__auto___18836);
var G__18840 = (0);
seq__18448_18817 = G__18837;
chunk__18449_18818 = G__18838;
count__18450_18819 = G__18839;
i__18451_18820 = G__18840;
continue;
} else {
var vec__18503_18841 = cljs.core.first(seq__18448_18835__$1);
var name_18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18503_18841,(0),null);
var map__18507_18843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18503_18841,(1),null);
var map__18507_18844__$1 = cljs.core.__destructure_map(map__18507_18843);
var doc_18845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507_18844__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507_18844__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18842], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18846], 0));

if(cljs.core.truth_(doc_18845)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18845], 0));
} else {
}


var G__18847 = cljs.core.next(seq__18448_18835__$1);
var G__18848 = null;
var G__18849 = (0);
var G__18850 = (0);
seq__18448_18817 = G__18847;
chunk__18449_18818 = G__18848;
count__18450_18819 = G__18849;
i__18451_18820 = G__18850;
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

var seq__18543 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18544 = null;
var count__18545 = (0);
var i__18546 = (0);
while(true){
if((i__18546 < count__18545)){
var role = chunk__18544.cljs$core$IIndexed$_nth$arity$2(null, i__18546);
var temp__5804__auto___18851__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18851__$1)){
var spec_18852 = temp__5804__auto___18851__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18852)], 0));
} else {
}


var G__18853 = seq__18543;
var G__18854 = chunk__18544;
var G__18855 = count__18545;
var G__18856 = (i__18546 + (1));
seq__18543 = G__18853;
chunk__18544 = G__18854;
count__18545 = G__18855;
i__18546 = G__18856;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18543);
if(temp__5804__auto____$1){
var seq__18543__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18543__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18543__$1);
var G__18857 = cljs.core.chunk_rest(seq__18543__$1);
var G__18858 = c__5525__auto__;
var G__18859 = cljs.core.count(c__5525__auto__);
var G__18860 = (0);
seq__18543 = G__18857;
chunk__18544 = G__18858;
count__18545 = G__18859;
i__18546 = G__18860;
continue;
} else {
var role = cljs.core.first(seq__18543__$1);
var temp__5804__auto___18861__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18861__$2)){
var spec_18862 = temp__5804__auto___18861__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18862)], 0));
} else {
}


var G__18863 = cljs.core.next(seq__18543__$1);
var G__18864 = null;
var G__18865 = (0);
var G__18866 = (0);
seq__18543 = G__18863;
chunk__18544 = G__18864;
count__18545 = G__18865;
i__18546 = G__18866;
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
var map__18646 = datafied_throwable;
var map__18646__$1 = cljs.core.__destructure_map(map__18646);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18646__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18646__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18646__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18647 = cljs.core.last(via);
var map__18647__$1 = cljs.core.__destructure_map(map__18647);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18648 = data;
var map__18648__$1 = cljs.core.__destructure_map(map__18648);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18649 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18649__$1 = cljs.core.__destructure_map(map__18649);
var top_data = map__18649__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18653 = phase;
var G__18653__$1 = (((G__18653 instanceof cljs.core.Keyword))?G__18653.fqn:null);
switch (G__18653__$1) {
case "read-source":
var map__18655 = data;
var map__18655__$1 = cljs.core.__destructure_map(map__18655);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18656 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18656__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18656,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18656);
var G__18656__$2 = (cljs.core.truth_((function (){var fexpr__18659 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18659.cljs$core$IFn$_invoke$arity$1 ? fexpr__18659.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18659.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18656__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18656__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18656__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18656__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18661 = top_data;
var G__18661__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18661,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18661);
var G__18661__$2 = (cljs.core.truth_((function (){var fexpr__18664 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18664.cljs$core$IFn$_invoke$arity$1 ? fexpr__18664.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18664.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18661__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18661__$1);
var G__18661__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18661__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18661__$2);
var G__18661__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18661__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18661__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18661__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18661__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18668 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18668,(3),null);
var G__18673 = top_data;
var G__18673__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18673,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18673);
var G__18673__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18673__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18673__$1);
var G__18673__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18673__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18673__$2);
var G__18673__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18673__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18673__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18673__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18673__$4;
}

break;
case "execution":
var vec__18678 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18637_SHARP_){
var or__5002__auto__ = (p1__18637_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18685.cljs$core$IFn$_invoke$arity$1 ? fexpr__18685.cljs$core$IFn$_invoke$arity$1(p1__18637_SHARP_) : fexpr__18685.call(null, p1__18637_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18691 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18691__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18691,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18691);
var G__18691__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18691__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18691__$1);
var G__18691__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18691__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18691__$2);
var G__18691__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18691__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18691__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18691__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18691__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18653__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18719){
var map__18720 = p__18719;
var map__18720__$1 = cljs.core.__destructure_map(map__18720);
var triage_data = map__18720__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18720__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18729 = phase;
var G__18729__$1 = (((G__18729 instanceof cljs.core.Keyword))?G__18729.fqn:null);
switch (G__18729__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18734 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18736 = loc;
var G__18737 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18738_18928 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18739_18929 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18740_18930 = true;
var _STAR_print_fn_STAR__temp_val__18741_18931 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18740_18930);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18741_18931);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18704_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18704_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18739_18929);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18738_18928);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18734,G__18735,G__18736,G__18737) : format.call(null, G__18734,G__18735,G__18736,G__18737));

break;
case "macroexpansion":
var G__18745 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18746 = cause_type;
var G__18747 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18748 = loc;
var G__18749 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18745,G__18746,G__18747,G__18748,G__18749) : format.call(null, G__18745,G__18746,G__18747,G__18748,G__18749));

break;
case "compile-syntax-check":
var G__18750 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18751 = cause_type;
var G__18752 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18753 = loc;
var G__18754 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18750,G__18751,G__18752,G__18753,G__18754) : format.call(null, G__18750,G__18751,G__18752,G__18753,G__18754));

break;
case "compilation":
var G__18755 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18756 = cause_type;
var G__18757 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18758 = loc;
var G__18759 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18755,G__18756,G__18757,G__18758,G__18759) : format.call(null, G__18755,G__18756,G__18757,G__18758,G__18759));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18760 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18761 = symbol;
var G__18762 = loc;
var G__18763 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18769_18953 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18770_18954 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18771_18955 = true;
var _STAR_print_fn_STAR__temp_val__18772_18956 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18771_18955);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18772_18956);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18713_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18713_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18770_18954);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18769_18953);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18760,G__18761,G__18762,G__18763) : format.call(null, G__18760,G__18761,G__18762,G__18763));
} else {
var G__18774 = "Execution error%s at %s(%s).\n%s\n";
var G__18775 = cause_type;
var G__18776 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18777 = loc;
var G__18778 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18774,G__18775,G__18776,G__18777,G__18778) : format.call(null, G__18774,G__18775,G__18776,G__18777,G__18778));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18729__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
