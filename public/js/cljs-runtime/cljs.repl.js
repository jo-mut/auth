goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17351){
var map__17353 = p__17351;
var map__17353__$1 = cljs.core.__destructure_map(map__17353);
var m = map__17353__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17353__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17355_17560 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17357_17561 = null;
var count__17358_17562 = (0);
var i__17359_17563 = (0);
while(true){
if((i__17359_17563 < count__17358_17562)){
var f_17564 = chunk__17357_17561.cljs$core$IIndexed$_nth$arity$2(null, i__17359_17563);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17564], 0));


var G__17565 = seq__17355_17560;
var G__17566 = chunk__17357_17561;
var G__17567 = count__17358_17562;
var G__17568 = (i__17359_17563 + (1));
seq__17355_17560 = G__17565;
chunk__17357_17561 = G__17566;
count__17358_17562 = G__17567;
i__17359_17563 = G__17568;
continue;
} else {
var temp__5804__auto___17569 = cljs.core.seq(seq__17355_17560);
if(temp__5804__auto___17569){
var seq__17355_17570__$1 = temp__5804__auto___17569;
if(cljs.core.chunked_seq_QMARK_(seq__17355_17570__$1)){
var c__5525__auto___17571 = cljs.core.chunk_first(seq__17355_17570__$1);
var G__17572 = cljs.core.chunk_rest(seq__17355_17570__$1);
var G__17573 = c__5525__auto___17571;
var G__17574 = cljs.core.count(c__5525__auto___17571);
var G__17575 = (0);
seq__17355_17560 = G__17572;
chunk__17357_17561 = G__17573;
count__17358_17562 = G__17574;
i__17359_17563 = G__17575;
continue;
} else {
var f_17576 = cljs.core.first(seq__17355_17570__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17576], 0));


var G__17577 = cljs.core.next(seq__17355_17570__$1);
var G__17578 = null;
var G__17579 = (0);
var G__17580 = (0);
seq__17355_17560 = G__17577;
chunk__17357_17561 = G__17578;
count__17358_17562 = G__17579;
i__17359_17563 = G__17580;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17581 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17581], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17581)))?cljs.core.second(arglists_17581):arglists_17581)], 0));
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
var seq__17362_17582 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17363_17583 = null;
var count__17364_17584 = (0);
var i__17365_17585 = (0);
while(true){
if((i__17365_17585 < count__17364_17584)){
var vec__17375_17586 = chunk__17363_17583.cljs$core$IIndexed$_nth$arity$2(null, i__17365_17585);
var name_17587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375_17586,(0),null);
var map__17378_17588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17375_17586,(1),null);
var map__17378_17589__$1 = cljs.core.__destructure_map(map__17378_17588);
var doc_17590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17378_17589__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17378_17589__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17587], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17591], 0));

if(cljs.core.truth_(doc_17590)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17590], 0));
} else {
}


var G__17592 = seq__17362_17582;
var G__17593 = chunk__17363_17583;
var G__17594 = count__17364_17584;
var G__17595 = (i__17365_17585 + (1));
seq__17362_17582 = G__17592;
chunk__17363_17583 = G__17593;
count__17364_17584 = G__17594;
i__17365_17585 = G__17595;
continue;
} else {
var temp__5804__auto___17596 = cljs.core.seq(seq__17362_17582);
if(temp__5804__auto___17596){
var seq__17362_17597__$1 = temp__5804__auto___17596;
if(cljs.core.chunked_seq_QMARK_(seq__17362_17597__$1)){
var c__5525__auto___17598 = cljs.core.chunk_first(seq__17362_17597__$1);
var G__17599 = cljs.core.chunk_rest(seq__17362_17597__$1);
var G__17600 = c__5525__auto___17598;
var G__17601 = cljs.core.count(c__5525__auto___17598);
var G__17602 = (0);
seq__17362_17582 = G__17599;
chunk__17363_17583 = G__17600;
count__17364_17584 = G__17601;
i__17365_17585 = G__17602;
continue;
} else {
var vec__17380_17603 = cljs.core.first(seq__17362_17597__$1);
var name_17604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380_17603,(0),null);
var map__17383_17605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380_17603,(1),null);
var map__17383_17606__$1 = cljs.core.__destructure_map(map__17383_17605);
var doc_17607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383_17606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17383_17606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17604], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17608], 0));

if(cljs.core.truth_(doc_17607)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17607], 0));
} else {
}


var G__17609 = cljs.core.next(seq__17362_17597__$1);
var G__17610 = null;
var G__17611 = (0);
var G__17612 = (0);
seq__17362_17582 = G__17609;
chunk__17363_17583 = G__17610;
count__17364_17584 = G__17611;
i__17365_17585 = G__17612;
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

var seq__17385 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17386 = null;
var count__17387 = (0);
var i__17388 = (0);
while(true){
if((i__17388 < count__17387)){
var role = chunk__17386.cljs$core$IIndexed$_nth$arity$2(null, i__17388);
var temp__5804__auto___17613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17613__$1)){
var spec_17614 = temp__5804__auto___17613__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17614)], 0));
} else {
}


var G__17617 = seq__17385;
var G__17620 = chunk__17386;
var G__17621 = count__17387;
var G__17622 = (i__17388 + (1));
seq__17385 = G__17617;
chunk__17386 = G__17620;
count__17387 = G__17621;
i__17388 = G__17622;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17385);
if(temp__5804__auto____$1){
var seq__17385__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17385__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17385__$1);
var G__17623 = cljs.core.chunk_rest(seq__17385__$1);
var G__17624 = c__5525__auto__;
var G__17625 = cljs.core.count(c__5525__auto__);
var G__17626 = (0);
seq__17385 = G__17623;
chunk__17386 = G__17624;
count__17387 = G__17625;
i__17388 = G__17626;
continue;
} else {
var role = cljs.core.first(seq__17385__$1);
var temp__5804__auto___17627__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17627__$2)){
var spec_17629 = temp__5804__auto___17627__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17629)], 0));
} else {
}


var G__17630 = cljs.core.next(seq__17385__$1);
var G__17631 = null;
var G__17632 = (0);
var G__17633 = (0);
seq__17385 = G__17630;
chunk__17386 = G__17631;
count__17387 = G__17632;
i__17388 = G__17633;
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
var map__17419 = datafied_throwable;
var map__17419__$1 = cljs.core.__destructure_map(map__17419);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17419__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17420 = cljs.core.last(via);
var map__17420__$1 = cljs.core.__destructure_map(map__17420);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17420__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17421 = data;
var map__17421__$1 = cljs.core.__destructure_map(map__17421);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17421__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17421__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17421__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17422 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17422__$1 = cljs.core.__destructure_map(map__17422);
var top_data = map__17422__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17423 = phase;
var G__17423__$1 = (((G__17423 instanceof cljs.core.Keyword))?G__17423.fqn:null);
switch (G__17423__$1) {
case "read-source":
var map__17424 = data;
var map__17424__$1 = cljs.core.__destructure_map(map__17424);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17424__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17424__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17425 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17425);
var G__17425__$2 = (cljs.core.truth_((function (){var fexpr__17426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17426.cljs$core$IFn$_invoke$arity$1 ? fexpr__17426.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17426.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17425__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17425__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17425__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17427 = top_data;
var G__17427__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17427,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17427);
var G__17427__$2 = (cljs.core.truth_((function (){var fexpr__17435 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17435.cljs$core$IFn$_invoke$arity$1 ? fexpr__17435.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17435.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17427__$1);
var G__17427__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17427__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17427__$2);
var G__17427__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17427__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17427__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17427__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17427__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17443 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17443,(3),null);
var G__17452 = top_data;
var G__17452__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17452,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17452);
var G__17452__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17452__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17452__$1);
var G__17452__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17452__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17452__$2);
var G__17452__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17452__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17452__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17452__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17452__$4;
}

break;
case "execution":
var vec__17474 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17418_SHARP_){
var or__5002__auto__ = (p1__17418_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__17491 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17491.cljs$core$IFn$_invoke$arity$1 ? fexpr__17491.cljs$core$IFn$_invoke$arity$1(p1__17418_SHARP_) : fexpr__17491.call(null, p1__17418_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17500 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17500__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17500,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17500);
var G__17500__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17500__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17500__$1);
var G__17500__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17500__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17500__$2);
var G__17500__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17500__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17500__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17500__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17500__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17423__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17509){
var map__17510 = p__17509;
var map__17510__$1 = cljs.core.__destructure_map(map__17510);
var triage_data = map__17510__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17510__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17513 = phase;
var G__17513__$1 = (((G__17513 instanceof cljs.core.Keyword))?G__17513.fqn:null);
switch (G__17513__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17514 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17515 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17516 = loc;
var G__17517 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17519_17643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17520_17644 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17521_17645 = true;
var _STAR_print_fn_STAR__temp_val__17522_17646 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17521_17645);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17522_17646);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17507_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17507_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17520_17644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17519_17643);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17514,G__17515,G__17516,G__17517) : format.call(null, G__17514,G__17515,G__17516,G__17517));

break;
case "macroexpansion":
var G__17523 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17524 = cause_type;
var G__17525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17526 = loc;
var G__17527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17523,G__17524,G__17525,G__17526,G__17527) : format.call(null, G__17523,G__17524,G__17525,G__17526,G__17527));

break;
case "compile-syntax-check":
var G__17528 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17529 = cause_type;
var G__17530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17531 = loc;
var G__17532 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17528,G__17529,G__17530,G__17531,G__17532) : format.call(null, G__17528,G__17529,G__17530,G__17531,G__17532));

break;
case "compilation":
var G__17534 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17535 = cause_type;
var G__17536 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17537 = loc;
var G__17538 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17534,G__17535,G__17536,G__17537,G__17538) : format.call(null, G__17534,G__17535,G__17536,G__17537,G__17538));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17539 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17540 = symbol;
var G__17541 = loc;
var G__17542 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17543_17651 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17544_17652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17545_17653 = true;
var _STAR_print_fn_STAR__temp_val__17546_17654 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17545_17653);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17546_17654);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17544_17652);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17543_17651);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17539,G__17540,G__17541,G__17542) : format.call(null, G__17539,G__17540,G__17541,G__17542));
} else {
var G__17547 = "Execution error%s at %s(%s).\n%s\n";
var G__17548 = cause_type;
var G__17549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17550 = loc;
var G__17551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17547,G__17548,G__17549,G__17550,G__17551) : format.call(null, G__17547,G__17548,G__17549,G__17550,G__17551));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17513__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
