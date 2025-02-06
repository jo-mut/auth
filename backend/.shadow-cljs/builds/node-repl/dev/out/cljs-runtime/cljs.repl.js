goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16335){
var map__16337 = p__16335;
var map__16337__$1 = cljs.core.__destructure_map(map__16337);
var m = map__16337__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16337__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16339_16708 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16340_16709 = null;
var count__16341_16710 = (0);
var i__16342_16711 = (0);
while(true){
if((i__16342_16711 < count__16341_16710)){
var f_16714 = chunk__16340_16709.cljs$core$IIndexed$_nth$arity$2(null, i__16342_16711);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16714], 0));


var G__16717 = seq__16339_16708;
var G__16718 = chunk__16340_16709;
var G__16719 = count__16341_16710;
var G__16720 = (i__16342_16711 + (1));
seq__16339_16708 = G__16717;
chunk__16340_16709 = G__16718;
count__16341_16710 = G__16719;
i__16342_16711 = G__16720;
continue;
} else {
var temp__5804__auto___16722 = cljs.core.seq(seq__16339_16708);
if(temp__5804__auto___16722){
var seq__16339_16723__$1 = temp__5804__auto___16722;
if(cljs.core.chunked_seq_QMARK_(seq__16339_16723__$1)){
var c__5525__auto___16724 = cljs.core.chunk_first(seq__16339_16723__$1);
var G__16725 = cljs.core.chunk_rest(seq__16339_16723__$1);
var G__16726 = c__5525__auto___16724;
var G__16727 = cljs.core.count(c__5525__auto___16724);
var G__16728 = (0);
seq__16339_16708 = G__16725;
chunk__16340_16709 = G__16726;
count__16341_16710 = G__16727;
i__16342_16711 = G__16728;
continue;
} else {
var f_16729 = cljs.core.first(seq__16339_16723__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_16729], 0));


var G__16730 = cljs.core.next(seq__16339_16723__$1);
var G__16731 = null;
var G__16732 = (0);
var G__16733 = (0);
seq__16339_16708 = G__16730;
chunk__16340_16709 = G__16731;
count__16341_16710 = G__16732;
i__16342_16711 = G__16733;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16735 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_16735], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_16735)))?cljs.core.second(arglists_16735):arglists_16735)], 0));
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
var seq__16359_16749 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16360_16750 = null;
var count__16361_16751 = (0);
var i__16362_16752 = (0);
while(true){
if((i__16362_16752 < count__16361_16751)){
var vec__16382_16759 = chunk__16360_16750.cljs$core$IIndexed$_nth$arity$2(null, i__16362_16752);
var name_16760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16759,(0),null);
var map__16385_16761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382_16759,(1),null);
var map__16385_16762__$1 = cljs.core.__destructure_map(map__16385_16761);
var doc_16763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16385_16762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16385_16762__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16760], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16764], 0));

if(cljs.core.truth_(doc_16763)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16763], 0));
} else {
}


var G__16765 = seq__16359_16749;
var G__16766 = chunk__16360_16750;
var G__16767 = count__16361_16751;
var G__16768 = (i__16362_16752 + (1));
seq__16359_16749 = G__16765;
chunk__16360_16750 = G__16766;
count__16361_16751 = G__16767;
i__16362_16752 = G__16768;
continue;
} else {
var temp__5804__auto___16769 = cljs.core.seq(seq__16359_16749);
if(temp__5804__auto___16769){
var seq__16359_16772__$1 = temp__5804__auto___16769;
if(cljs.core.chunked_seq_QMARK_(seq__16359_16772__$1)){
var c__5525__auto___16773 = cljs.core.chunk_first(seq__16359_16772__$1);
var G__16776 = cljs.core.chunk_rest(seq__16359_16772__$1);
var G__16777 = c__5525__auto___16773;
var G__16778 = cljs.core.count(c__5525__auto___16773);
var G__16779 = (0);
seq__16359_16749 = G__16776;
chunk__16360_16750 = G__16777;
count__16361_16751 = G__16778;
i__16362_16752 = G__16779;
continue;
} else {
var vec__16393_16792 = cljs.core.first(seq__16359_16772__$1);
var name_16793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393_16792,(0),null);
var map__16396_16794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16393_16792,(1),null);
var map__16396_16795__$1 = cljs.core.__destructure_map(map__16396_16794);
var doc_16796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396_16795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396_16795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_16793], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_16797], 0));

if(cljs.core.truth_(doc_16796)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_16796], 0));
} else {
}


var G__16800 = cljs.core.next(seq__16359_16772__$1);
var G__16801 = null;
var G__16802 = (0);
var G__16803 = (0);
seq__16359_16749 = G__16800;
chunk__16360_16750 = G__16801;
count__16361_16751 = G__16802;
i__16362_16752 = G__16803;
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

var seq__16425 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16426 = null;
var count__16427 = (0);
var i__16428 = (0);
while(true){
if((i__16428 < count__16427)){
var role = chunk__16426.cljs$core$IIndexed$_nth$arity$2(null, i__16428);
var temp__5804__auto___16811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16811__$1)){
var spec_16812 = temp__5804__auto___16811__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16812)], 0));
} else {
}


var G__16813 = seq__16425;
var G__16814 = chunk__16426;
var G__16815 = count__16427;
var G__16816 = (i__16428 + (1));
seq__16425 = G__16813;
chunk__16426 = G__16814;
count__16427 = G__16815;
i__16428 = G__16816;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__16425);
if(temp__5804__auto____$1){
var seq__16425__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__16425__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16425__$1);
var G__16817 = cljs.core.chunk_rest(seq__16425__$1);
var G__16818 = c__5525__auto__;
var G__16819 = cljs.core.count(c__5525__auto__);
var G__16820 = (0);
seq__16425 = G__16817;
chunk__16426 = G__16818;
count__16427 = G__16819;
i__16428 = G__16820;
continue;
} else {
var role = cljs.core.first(seq__16425__$1);
var temp__5804__auto___16821__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___16821__$2)){
var spec_16822 = temp__5804__auto___16821__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_16822)], 0));
} else {
}


var G__16823 = cljs.core.next(seq__16425__$1);
var G__16824 = null;
var G__16825 = (0);
var G__16826 = (0);
seq__16425 = G__16823;
chunk__16426 = G__16824;
count__16427 = G__16825;
i__16428 = G__16826;
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
var map__16480 = datafied_throwable;
var map__16480__$1 = cljs.core.__destructure_map(map__16480);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16480__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16480__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16480__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16481 = cljs.core.last(via);
var map__16481__$1 = cljs.core.__destructure_map(map__16481);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16481__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16481__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16482 = data;
var map__16482__$1 = cljs.core.__destructure_map(map__16482);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16482__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16482__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16482__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16483 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__16483__$1 = cljs.core.__destructure_map(map__16483);
var top_data = map__16483__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__16487 = phase;
var G__16487__$1 = (((G__16487 instanceof cljs.core.Keyword))?G__16487.fqn:null);
switch (G__16487__$1) {
case "read-source":
var map__16496 = data;
var map__16496__$1 = cljs.core.__destructure_map(map__16496);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16498 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__16498__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16498,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16498);
var G__16498__$2 = (cljs.core.truth_((function (){var fexpr__16500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16500.cljs$core$IFn$_invoke$arity$1 ? fexpr__16500.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16500.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16498__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16498__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16498__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16498__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16501 = top_data;
var G__16501__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16501,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16501);
var G__16501__$2 = (cljs.core.truth_((function (){var fexpr__16502 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16502.cljs$core$IFn$_invoke$arity$1 ? fexpr__16502.cljs$core$IFn$_invoke$arity$1(source) : fexpr__16502.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16501__$1);
var G__16501__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16501__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16501__$2);
var G__16501__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16501__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16501__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16501__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16501__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16504 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16504,(3),null);
var G__16508 = top_data;
var G__16508__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16508,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16508);
var G__16508__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16508__$1);
var G__16508__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16508__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16508__$2);
var G__16508__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16508__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16508__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16508__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16508__$4;
}

break;
case "execution":
var vec__16512 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16512,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16467_SHARP_){
var or__5002__auto__ = (p1__16467_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__16519 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__16519.cljs$core$IFn$_invoke$arity$1 ? fexpr__16519.cljs$core$IFn$_invoke$arity$1(p1__16467_SHARP_) : fexpr__16519.call(null, p1__16467_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__16521 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16521__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16521,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16521);
var G__16521__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16521__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16521__$1);
var G__16521__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16521__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16521__$2);
var G__16521__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16521__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16521__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16521__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16521__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16487__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16639){
var map__16640 = p__16639;
var map__16640__$1 = cljs.core.__destructure_map(map__16640);
var triage_data = map__16640__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__16646 = phase;
var G__16646__$1 = (((G__16646 instanceof cljs.core.Keyword))?G__16646.fqn:null);
switch (G__16646__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__16651 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__16652 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16653 = loc;
var G__16654 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16655_16869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16656_16870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16657_16871 = true;
var _STAR_print_fn_STAR__temp_val__16658_16872 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16657_16871);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16658_16872);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16656_16870);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16655_16869);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16651,G__16652,G__16653,G__16654) : format.call(null, G__16651,G__16652,G__16653,G__16654));

break;
case "macroexpansion":
var G__16667 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__16668 = cause_type;
var G__16669 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16670 = loc;
var G__16671 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16667,G__16668,G__16669,G__16670,G__16671) : format.call(null, G__16667,G__16668,G__16669,G__16670,G__16671));

break;
case "compile-syntax-check":
var G__16676 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__16677 = cause_type;
var G__16678 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16679 = loc;
var G__16680 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16676,G__16677,G__16678,G__16679,G__16680) : format.call(null, G__16676,G__16677,G__16678,G__16679,G__16680));

break;
case "compilation":
var G__16681 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__16682 = cause_type;
var G__16683 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16684 = loc;
var G__16685 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16681,G__16682,G__16683,G__16684,G__16685) : format.call(null, G__16681,G__16682,G__16683,G__16684,G__16685));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__16686 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__16687 = symbol;
var G__16688 = loc;
var G__16689 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16690_16882 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16691_16883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16692_16884 = true;
var _STAR_print_fn_STAR__temp_val__16693_16885 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16692_16884);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16693_16885);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16637_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16637_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16691_16883);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16690_16882);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__16686,G__16687,G__16688,G__16689) : format.call(null, G__16686,G__16687,G__16688,G__16689));
} else {
var G__16694 = "Execution error%s at %s(%s).\n%s\n";
var G__16695 = cause_type;
var G__16696 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__16697 = loc;
var G__16698 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__16694,G__16695,G__16696,G__16697,G__16698) : format.call(null, G__16694,G__16695,G__16696,G__16697,G__16698));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16646__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
