goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17347){
var map__17348 = p__17347;
var map__17348__$1 = cljs.core.__destructure_map(map__17348);
var m = map__17348__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17348__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17349_17547 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17350_17548 = null;
var count__17351_17549 = (0);
var i__17352_17550 = (0);
while(true){
if((i__17352_17550 < count__17351_17549)){
var f_17551 = chunk__17350_17548.cljs$core$IIndexed$_nth$arity$2(null, i__17352_17550);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17551], 0));


var G__17552 = seq__17349_17547;
var G__17553 = chunk__17350_17548;
var G__17554 = count__17351_17549;
var G__17555 = (i__17352_17550 + (1));
seq__17349_17547 = G__17552;
chunk__17350_17548 = G__17553;
count__17351_17549 = G__17554;
i__17352_17550 = G__17555;
continue;
} else {
var temp__5804__auto___17556 = cljs.core.seq(seq__17349_17547);
if(temp__5804__auto___17556){
var seq__17349_17557__$1 = temp__5804__auto___17556;
if(cljs.core.chunked_seq_QMARK_(seq__17349_17557__$1)){
var c__5525__auto___17558 = cljs.core.chunk_first(seq__17349_17557__$1);
var G__17560 = cljs.core.chunk_rest(seq__17349_17557__$1);
var G__17561 = c__5525__auto___17558;
var G__17562 = cljs.core.count(c__5525__auto___17558);
var G__17563 = (0);
seq__17349_17547 = G__17560;
chunk__17350_17548 = G__17561;
count__17351_17549 = G__17562;
i__17352_17550 = G__17563;
continue;
} else {
var f_17564 = cljs.core.first(seq__17349_17557__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17564], 0));


var G__17565 = cljs.core.next(seq__17349_17557__$1);
var G__17566 = null;
var G__17567 = (0);
var G__17568 = (0);
seq__17349_17547 = G__17565;
chunk__17350_17548 = G__17566;
count__17351_17549 = G__17567;
i__17352_17550 = G__17568;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17569 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17569], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17569)))?cljs.core.second(arglists_17569):arglists_17569)], 0));
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
var seq__17356_17570 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17357_17571 = null;
var count__17358_17572 = (0);
var i__17359_17573 = (0);
while(true){
if((i__17359_17573 < count__17358_17572)){
var vec__17372_17574 = chunk__17357_17571.cljs$core$IIndexed$_nth$arity$2(null, i__17359_17573);
var name_17575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17372_17574,(0),null);
var map__17375_17576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17372_17574,(1),null);
var map__17375_17577__$1 = cljs.core.__destructure_map(map__17375_17576);
var doc_17578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17375_17577__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17375_17577__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17575], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17579], 0));

if(cljs.core.truth_(doc_17578)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17578], 0));
} else {
}


var G__17580 = seq__17356_17570;
var G__17581 = chunk__17357_17571;
var G__17582 = count__17358_17572;
var G__17583 = (i__17359_17573 + (1));
seq__17356_17570 = G__17580;
chunk__17357_17571 = G__17581;
count__17358_17572 = G__17582;
i__17359_17573 = G__17583;
continue;
} else {
var temp__5804__auto___17584 = cljs.core.seq(seq__17356_17570);
if(temp__5804__auto___17584){
var seq__17356_17586__$1 = temp__5804__auto___17584;
if(cljs.core.chunked_seq_QMARK_(seq__17356_17586__$1)){
var c__5525__auto___17587 = cljs.core.chunk_first(seq__17356_17586__$1);
var G__17588 = cljs.core.chunk_rest(seq__17356_17586__$1);
var G__17589 = c__5525__auto___17587;
var G__17590 = cljs.core.count(c__5525__auto___17587);
var G__17591 = (0);
seq__17356_17570 = G__17588;
chunk__17357_17571 = G__17589;
count__17358_17572 = G__17590;
i__17359_17573 = G__17591;
continue;
} else {
var vec__17376_17592 = cljs.core.first(seq__17356_17586__$1);
var name_17593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376_17592,(0),null);
var map__17379_17594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376_17592,(1),null);
var map__17379_17595__$1 = cljs.core.__destructure_map(map__17379_17594);
var doc_17596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17379_17595__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17379_17595__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17593], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17597], 0));

if(cljs.core.truth_(doc_17596)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17596], 0));
} else {
}


var G__17598 = cljs.core.next(seq__17356_17586__$1);
var G__17599 = null;
var G__17600 = (0);
var G__17601 = (0);
seq__17356_17570 = G__17598;
chunk__17357_17571 = G__17599;
count__17358_17572 = G__17600;
i__17359_17573 = G__17601;
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

var seq__17380 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17381 = null;
var count__17382 = (0);
var i__17383 = (0);
while(true){
if((i__17383 < count__17382)){
var role = chunk__17381.cljs$core$IIndexed$_nth$arity$2(null, i__17383);
var temp__5804__auto___17603__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17603__$1)){
var spec_17604 = temp__5804__auto___17603__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17604)], 0));
} else {
}


var G__17605 = seq__17380;
var G__17606 = chunk__17381;
var G__17607 = count__17382;
var G__17608 = (i__17383 + (1));
seq__17380 = G__17605;
chunk__17381 = G__17606;
count__17382 = G__17607;
i__17383 = G__17608;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17380);
if(temp__5804__auto____$1){
var seq__17380__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17380__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17380__$1);
var G__17609 = cljs.core.chunk_rest(seq__17380__$1);
var G__17610 = c__5525__auto__;
var G__17611 = cljs.core.count(c__5525__auto__);
var G__17612 = (0);
seq__17380 = G__17609;
chunk__17381 = G__17610;
count__17382 = G__17611;
i__17383 = G__17612;
continue;
} else {
var role = cljs.core.first(seq__17380__$1);
var temp__5804__auto___17613__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17613__$2)){
var spec_17614 = temp__5804__auto___17613__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17614)], 0));
} else {
}


var G__17615 = cljs.core.next(seq__17380__$1);
var G__17616 = null;
var G__17617 = (0);
var G__17618 = (0);
seq__17380 = G__17615;
chunk__17381 = G__17616;
count__17382 = G__17617;
i__17383 = G__17618;
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
var map__17389 = datafied_throwable;
var map__17389__$1 = cljs.core.__destructure_map(map__17389);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17389__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17389__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17389__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17390 = cljs.core.last(via);
var map__17390__$1 = cljs.core.__destructure_map(map__17390);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17390__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17390__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17391 = data;
var map__17391__$1 = cljs.core.__destructure_map(map__17391);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17392 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17392__$1 = cljs.core.__destructure_map(map__17392);
var top_data = map__17392__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17392__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17393 = phase;
var G__17393__$1 = (((G__17393 instanceof cljs.core.Keyword))?G__17393.fqn:null);
switch (G__17393__$1) {
case "read-source":
var map__17394 = data;
var map__17394__$1 = cljs.core.__destructure_map(map__17394);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17395 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17395__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17395,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17395);
var G__17395__$2 = (cljs.core.truth_((function (){var fexpr__17396 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17396.cljs$core$IFn$_invoke$arity$1 ? fexpr__17396.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17396.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17395__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17395__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17395__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17397 = top_data;
var G__17397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17397);
var G__17397__$2 = (cljs.core.truth_((function (){var fexpr__17399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17399.cljs$core$IFn$_invoke$arity$1 ? fexpr__17399.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17399.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17397__$1);
var G__17397__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17397__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17397__$2);
var G__17397__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17397__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17397__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17397__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17397__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17400 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17400,(3),null);
var G__17403 = top_data;
var G__17403__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17403);
var G__17403__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17403__$1);
var G__17403__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17403__$2);
var G__17403__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17403__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17403__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17403__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17403__$4;
}

break;
case "execution":
var vec__17405 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17388_SHARP_){
var or__5002__auto__ = (p1__17388_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__17408 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17408.cljs$core$IFn$_invoke$arity$1 ? fexpr__17408.cljs$core$IFn$_invoke$arity$1(p1__17388_SHARP_) : fexpr__17408.call(null, p1__17388_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17409__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17409,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17409);
var G__17409__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17409__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17409__$1);
var G__17409__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17409__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17409__$2);
var G__17409__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17409__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17409__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17409__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17409__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17393__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17420){
var map__17430 = p__17420;
var map__17430__$1 = cljs.core.__destructure_map(map__17430);
var triage_data = map__17430__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17438 = phase;
var G__17438__$1 = (((G__17438 instanceof cljs.core.Keyword))?G__17438.fqn:null);
switch (G__17438__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17439 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17441 = loc;
var G__17442 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17450_17636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17451_17637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17452_17638 = true;
var _STAR_print_fn_STAR__temp_val__17453_17639 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17452_17638);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17453_17639);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17410_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17410_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17451_17637);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17450_17636);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17439,G__17440,G__17441,G__17442) : format.call(null, G__17439,G__17440,G__17441,G__17442));

break;
case "macroexpansion":
var G__17476 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17477 = cause_type;
var G__17478 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17479 = loc;
var G__17480 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17476,G__17477,G__17478,G__17479,G__17480) : format.call(null, G__17476,G__17477,G__17478,G__17479,G__17480));

break;
case "compile-syntax-check":
var G__17490 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17491 = cause_type;
var G__17492 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17493 = loc;
var G__17494 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17490,G__17491,G__17492,G__17493,G__17494) : format.call(null, G__17490,G__17491,G__17492,G__17493,G__17494));

break;
case "compilation":
var G__17495 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17496 = cause_type;
var G__17497 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17498 = loc;
var G__17499 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17495,G__17496,G__17497,G__17498,G__17499) : format.call(null, G__17495,G__17496,G__17497,G__17498,G__17499));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17500 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17501 = symbol;
var G__17502 = loc;
var G__17503 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17511_17641 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17512_17642 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17513_17643 = true;
var _STAR_print_fn_STAR__temp_val__17514_17644 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17513_17643);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17514_17644);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17411_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17411_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17512_17642);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17511_17641);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17500,G__17501,G__17502,G__17503) : format.call(null, G__17500,G__17501,G__17502,G__17503));
} else {
var G__17526 = "Execution error%s at %s(%s).\n%s\n";
var G__17527 = cause_type;
var G__17528 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17529 = loc;
var G__17530 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17526,G__17527,G__17528,G__17529,G__17530) : format.call(null, G__17526,G__17527,G__17528,G__17529,G__17530));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17438__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
