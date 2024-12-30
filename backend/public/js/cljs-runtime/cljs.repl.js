goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21377){
var map__21378 = p__21377;
var map__21378__$1 = cljs.core.__destructure_map(map__21378);
var m = map__21378__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21386_21735 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21387_21736 = null;
var count__21388_21737 = (0);
var i__21389_21738 = (0);
while(true){
if((i__21389_21738 < count__21388_21737)){
var f_21739 = chunk__21387_21736.cljs$core$IIndexed$_nth$arity$2(null, i__21389_21738);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21739], 0));


var G__21741 = seq__21386_21735;
var G__21742 = chunk__21387_21736;
var G__21743 = count__21388_21737;
var G__21744 = (i__21389_21738 + (1));
seq__21386_21735 = G__21741;
chunk__21387_21736 = G__21742;
count__21388_21737 = G__21743;
i__21389_21738 = G__21744;
continue;
} else {
var temp__5804__auto___21745 = cljs.core.seq(seq__21386_21735);
if(temp__5804__auto___21745){
var seq__21386_21747__$1 = temp__5804__auto___21745;
if(cljs.core.chunked_seq_QMARK_(seq__21386_21747__$1)){
var c__5525__auto___21748 = cljs.core.chunk_first(seq__21386_21747__$1);
var G__21750 = cljs.core.chunk_rest(seq__21386_21747__$1);
var G__21751 = c__5525__auto___21748;
var G__21752 = cljs.core.count(c__5525__auto___21748);
var G__21753 = (0);
seq__21386_21735 = G__21750;
chunk__21387_21736 = G__21751;
count__21388_21737 = G__21752;
i__21389_21738 = G__21753;
continue;
} else {
var f_21756 = cljs.core.first(seq__21386_21747__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21756], 0));


var G__21757 = cljs.core.next(seq__21386_21747__$1);
var G__21758 = null;
var G__21759 = (0);
var G__21760 = (0);
seq__21386_21735 = G__21757;
chunk__21387_21736 = G__21758;
count__21388_21737 = G__21759;
i__21389_21738 = G__21760;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21762 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21762], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21762)))?cljs.core.second(arglists_21762):arglists_21762)], 0));
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
var seq__21408_21768 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21409_21769 = null;
var count__21410_21770 = (0);
var i__21411_21771 = (0);
while(true){
if((i__21411_21771 < count__21410_21770)){
var vec__21437_21773 = chunk__21409_21769.cljs$core$IIndexed$_nth$arity$2(null, i__21411_21771);
var name_21774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21437_21773,(0),null);
var map__21440_21775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21437_21773,(1),null);
var map__21440_21776__$1 = cljs.core.__destructure_map(map__21440_21775);
var doc_21777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440_21776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440_21776__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21774], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21778], 0));

if(cljs.core.truth_(doc_21777)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21777], 0));
} else {
}


var G__21779 = seq__21408_21768;
var G__21780 = chunk__21409_21769;
var G__21781 = count__21410_21770;
var G__21782 = (i__21411_21771 + (1));
seq__21408_21768 = G__21779;
chunk__21409_21769 = G__21780;
count__21410_21770 = G__21781;
i__21411_21771 = G__21782;
continue;
} else {
var temp__5804__auto___21784 = cljs.core.seq(seq__21408_21768);
if(temp__5804__auto___21784){
var seq__21408_21785__$1 = temp__5804__auto___21784;
if(cljs.core.chunked_seq_QMARK_(seq__21408_21785__$1)){
var c__5525__auto___21786 = cljs.core.chunk_first(seq__21408_21785__$1);
var G__21787 = cljs.core.chunk_rest(seq__21408_21785__$1);
var G__21788 = c__5525__auto___21786;
var G__21789 = cljs.core.count(c__5525__auto___21786);
var G__21790 = (0);
seq__21408_21768 = G__21787;
chunk__21409_21769 = G__21788;
count__21410_21770 = G__21789;
i__21411_21771 = G__21790;
continue;
} else {
var vec__21444_21792 = cljs.core.first(seq__21408_21785__$1);
var name_21793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21444_21792,(0),null);
var map__21447_21794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21444_21792,(1),null);
var map__21447_21795__$1 = cljs.core.__destructure_map(map__21447_21794);
var doc_21796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21447_21795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21447_21795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21793], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21797], 0));

if(cljs.core.truth_(doc_21796)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21796], 0));
} else {
}


var G__21800 = cljs.core.next(seq__21408_21785__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21408_21768 = G__21800;
chunk__21409_21769 = G__21801;
count__21410_21770 = G__21802;
i__21411_21771 = G__21803;
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

var seq__21453 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21454 = null;
var count__21455 = (0);
var i__21456 = (0);
while(true){
if((i__21456 < count__21455)){
var role = chunk__21454.cljs$core$IIndexed$_nth$arity$2(null, i__21456);
var temp__5804__auto___21807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21807__$1)){
var spec_21810 = temp__5804__auto___21807__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21810)], 0));
} else {
}


var G__21812 = seq__21453;
var G__21813 = chunk__21454;
var G__21814 = count__21455;
var G__21815 = (i__21456 + (1));
seq__21453 = G__21812;
chunk__21454 = G__21813;
count__21455 = G__21814;
i__21456 = G__21815;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21453);
if(temp__5804__auto____$1){
var seq__21453__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21453__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21453__$1);
var G__21819 = cljs.core.chunk_rest(seq__21453__$1);
var G__21820 = c__5525__auto__;
var G__21822 = cljs.core.count(c__5525__auto__);
var G__21823 = (0);
seq__21453 = G__21819;
chunk__21454 = G__21820;
count__21455 = G__21822;
i__21456 = G__21823;
continue;
} else {
var role = cljs.core.first(seq__21453__$1);
var temp__5804__auto___21825__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21825__$2)){
var spec_21827 = temp__5804__auto___21825__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21827)], 0));
} else {
}


var G__21831 = cljs.core.next(seq__21453__$1);
var G__21832 = null;
var G__21833 = (0);
var G__21834 = (0);
seq__21453 = G__21831;
chunk__21454 = G__21832;
count__21455 = G__21833;
i__21456 = G__21834;
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
var map__21519 = datafied_throwable;
var map__21519__$1 = cljs.core.__destructure_map(map__21519);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21519__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21520 = cljs.core.last(via);
var map__21520__$1 = cljs.core.__destructure_map(map__21520);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21521 = data;
var map__21521__$1 = cljs.core.__destructure_map(map__21521);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21521__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21522 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21522__$1 = cljs.core.__destructure_map(map__21522);
var top_data = map__21522__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21556 = phase;
var G__21556__$1 = (((G__21556 instanceof cljs.core.Keyword))?G__21556.fqn:null);
switch (G__21556__$1) {
case "read-source":
var map__21559 = data;
var map__21559__$1 = cljs.core.__destructure_map(map__21559);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21568__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21568,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21568);
var G__21568__$2 = (cljs.core.truth_((function (){var fexpr__21577 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21577.cljs$core$IFn$_invoke$arity$1 ? fexpr__21577.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21577.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21568__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21568__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21568__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21582 = top_data;
var G__21582__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21582,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21582);
var G__21582__$2 = (cljs.core.truth_((function (){var fexpr__21593 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21593.cljs$core$IFn$_invoke$arity$1 ? fexpr__21593.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21593.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21582__$1);
var G__21582__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21582__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21582__$2);
var G__21582__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21582__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21582__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21582__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21582__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21610 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21610,(3),null);
var G__21615 = top_data;
var G__21615__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21615,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21615);
var G__21615__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21615__$1);
var G__21615__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21615__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21615__$2);
var G__21615__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21615__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21615__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21615__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21615__$4;
}

break;
case "execution":
var vec__21631 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21497_SHARP_){
var or__5002__auto__ = (p1__21497_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21635.cljs$core$IFn$_invoke$arity$1 ? fexpr__21635.cljs$core$IFn$_invoke$arity$1(p1__21497_SHARP_) : fexpr__21635.call(null, p1__21497_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21638 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21638__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21638,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21638);
var G__21638__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21638__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21638__$1);
var G__21638__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21638__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21638__$2);
var G__21638__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21638__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21638__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21638__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21638__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21556__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21652){
var map__21653 = p__21652;
var map__21653__$1 = cljs.core.__destructure_map(map__21653);
var triage_data = map__21653__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21653__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21660 = phase;
var G__21660__$1 = (((G__21660 instanceof cljs.core.Keyword))?G__21660.fqn:null);
switch (G__21660__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21662 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21664 = loc;
var G__21665 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21667_21911 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21668_21912 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21669_21913 = true;
var _STAR_print_fn_STAR__temp_val__21670_21914 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21669_21913);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21670_21914);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21646_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21646_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21668_21912);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21667_21911);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21662,G__21663,G__21664,G__21665) : format.call(null, G__21662,G__21663,G__21664,G__21665));

break;
case "macroexpansion":
var G__21677 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21678 = cause_type;
var G__21680 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21681 = loc;
var G__21682 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21677,G__21678,G__21680,G__21681,G__21682) : format.call(null, G__21677,G__21678,G__21680,G__21681,G__21682));

break;
case "compile-syntax-check":
var G__21684 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21685 = cause_type;
var G__21686 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21687 = loc;
var G__21688 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21684,G__21685,G__21686,G__21687,G__21688) : format.call(null, G__21684,G__21685,G__21686,G__21687,G__21688));

break;
case "compilation":
var G__21690 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21691 = cause_type;
var G__21692 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21693 = loc;
var G__21694 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21690,G__21691,G__21692,G__21693,G__21694) : format.call(null, G__21690,G__21691,G__21692,G__21693,G__21694));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21697 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21698 = symbol;
var G__21699 = loc;
var G__21700 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21701_21930 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21702_21931 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21703_21932 = true;
var _STAR_print_fn_STAR__temp_val__21704_21933 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21703_21932);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21704_21933);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21648_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21648_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21702_21931);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21701_21930);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21697,G__21698,G__21699,G__21700) : format.call(null, G__21697,G__21698,G__21699,G__21700));
} else {
var G__21708 = "Execution error%s at %s(%s).\n%s\n";
var G__21709 = cause_type;
var G__21710 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21711 = loc;
var G__21712 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21708,G__21709,G__21710,G__21711,G__21712) : format.call(null, G__21708,G__21709,G__21710,G__21711,G__21712));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21660__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
