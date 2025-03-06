goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17714){
var map__17715 = p__17714;
var map__17715__$1 = cljs.core.__destructure_map(map__17715);
var m = map__17715__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17715__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17715__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17716_17938 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17717_17939 = null;
var count__17718_17940 = (0);
var i__17719_17941 = (0);
while(true){
if((i__17719_17941 < count__17718_17940)){
var f_17943 = chunk__17717_17939.cljs$core$IIndexed$_nth$arity$2(null, i__17719_17941);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17943], 0));


var G__17944 = seq__17716_17938;
var G__17945 = chunk__17717_17939;
var G__17946 = count__17718_17940;
var G__17947 = (i__17719_17941 + (1));
seq__17716_17938 = G__17944;
chunk__17717_17939 = G__17945;
count__17718_17940 = G__17946;
i__17719_17941 = G__17947;
continue;
} else {
var temp__5804__auto___17948 = cljs.core.seq(seq__17716_17938);
if(temp__5804__auto___17948){
var seq__17716_17949__$1 = temp__5804__auto___17948;
if(cljs.core.chunked_seq_QMARK_(seq__17716_17949__$1)){
var c__5525__auto___17950 = cljs.core.chunk_first(seq__17716_17949__$1);
var G__17951 = cljs.core.chunk_rest(seq__17716_17949__$1);
var G__17952 = c__5525__auto___17950;
var G__17953 = cljs.core.count(c__5525__auto___17950);
var G__17954 = (0);
seq__17716_17938 = G__17951;
chunk__17717_17939 = G__17952;
count__17718_17940 = G__17953;
i__17719_17941 = G__17954;
continue;
} else {
var f_17955 = cljs.core.first(seq__17716_17949__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17955], 0));


var G__17956 = cljs.core.next(seq__17716_17949__$1);
var G__17957 = null;
var G__17958 = (0);
var G__17959 = (0);
seq__17716_17938 = G__17956;
chunk__17717_17939 = G__17957;
count__17718_17940 = G__17958;
i__17719_17941 = G__17959;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17960 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17960], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17960)))?cljs.core.second(arglists_17960):arglists_17960)], 0));
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
var seq__17786_17967 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17787_17968 = null;
var count__17788_17969 = (0);
var i__17789_17970 = (0);
while(true){
if((i__17789_17970 < count__17788_17969)){
var vec__17829_17972 = chunk__17787_17968.cljs$core$IIndexed$_nth$arity$2(null, i__17789_17970);
var name_17973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17829_17972,(0),null);
var map__17832_17974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17829_17972,(1),null);
var map__17832_17975__$1 = cljs.core.__destructure_map(map__17832_17974);
var doc_17976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832_17975__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832_17975__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17973], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17977], 0));

if(cljs.core.truth_(doc_17976)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17976], 0));
} else {
}


var G__17980 = seq__17786_17967;
var G__17981 = chunk__17787_17968;
var G__17982 = count__17788_17969;
var G__17983 = (i__17789_17970 + (1));
seq__17786_17967 = G__17980;
chunk__17787_17968 = G__17981;
count__17788_17969 = G__17982;
i__17789_17970 = G__17983;
continue;
} else {
var temp__5804__auto___17984 = cljs.core.seq(seq__17786_17967);
if(temp__5804__auto___17984){
var seq__17786_17985__$1 = temp__5804__auto___17984;
if(cljs.core.chunked_seq_QMARK_(seq__17786_17985__$1)){
var c__5525__auto___17986 = cljs.core.chunk_first(seq__17786_17985__$1);
var G__17987 = cljs.core.chunk_rest(seq__17786_17985__$1);
var G__17988 = c__5525__auto___17986;
var G__17989 = cljs.core.count(c__5525__auto___17986);
var G__17990 = (0);
seq__17786_17967 = G__17987;
chunk__17787_17968 = G__17988;
count__17788_17969 = G__17989;
i__17789_17970 = G__17990;
continue;
} else {
var vec__17833_17991 = cljs.core.first(seq__17786_17985__$1);
var name_17992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833_17991,(0),null);
var map__17836_17993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17833_17991,(1),null);
var map__17836_17994__$1 = cljs.core.__destructure_map(map__17836_17993);
var doc_17995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836_17994__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836_17994__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17992], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17996], 0));

if(cljs.core.truth_(doc_17995)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17995], 0));
} else {
}


var G__18000 = cljs.core.next(seq__17786_17985__$1);
var G__18001 = null;
var G__18002 = (0);
var G__18003 = (0);
seq__17786_17967 = G__18000;
chunk__17787_17968 = G__18001;
count__17788_17969 = G__18002;
i__17789_17970 = G__18003;
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

var seq__17840 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17841 = null;
var count__17842 = (0);
var i__17843 = (0);
while(true){
if((i__17843 < count__17842)){
var role = chunk__17841.cljs$core$IIndexed$_nth$arity$2(null, i__17843);
var temp__5804__auto___18004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18004__$1)){
var spec_18008 = temp__5804__auto___18004__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18008)], 0));
} else {
}


var G__18009 = seq__17840;
var G__18010 = chunk__17841;
var G__18011 = count__17842;
var G__18012 = (i__17843 + (1));
seq__17840 = G__18009;
chunk__17841 = G__18010;
count__17842 = G__18011;
i__17843 = G__18012;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17840);
if(temp__5804__auto____$1){
var seq__17840__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17840__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17840__$1);
var G__18013 = cljs.core.chunk_rest(seq__17840__$1);
var G__18014 = c__5525__auto__;
var G__18015 = cljs.core.count(c__5525__auto__);
var G__18016 = (0);
seq__17840 = G__18013;
chunk__17841 = G__18014;
count__17842 = G__18015;
i__17843 = G__18016;
continue;
} else {
var role = cljs.core.first(seq__17840__$1);
var temp__5804__auto___18017__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18017__$2)){
var spec_18018 = temp__5804__auto___18017__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18018)], 0));
} else {
}


var G__18019 = cljs.core.next(seq__17840__$1);
var G__18020 = null;
var G__18021 = (0);
var G__18022 = (0);
seq__17840 = G__18019;
chunk__17841 = G__18020;
count__17842 = G__18021;
i__17843 = G__18022;
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
var map__17850 = datafied_throwable;
var map__17850__$1 = cljs.core.__destructure_map(map__17850);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17850__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17850__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17851 = cljs.core.last(via);
var map__17851__$1 = cljs.core.__destructure_map(map__17851);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17851__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17852 = data;
var map__17852__$1 = cljs.core.__destructure_map(map__17852);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17852__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17853 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17853__$1 = cljs.core.__destructure_map(map__17853);
var top_data = map__17853__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17856 = phase;
var G__17856__$1 = (((G__17856 instanceof cljs.core.Keyword))?G__17856.fqn:null);
switch (G__17856__$1) {
case "read-source":
var map__17859 = data;
var map__17859__$1 = cljs.core.__destructure_map(map__17859);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17859__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17859__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17866 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17866__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17866,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17866);
var G__17866__$2 = (cljs.core.truth_((function (){var fexpr__17868 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17868.cljs$core$IFn$_invoke$arity$1 ? fexpr__17868.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17868.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17866__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17866__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17866__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17866__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17871 = top_data;
var G__17871__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17871,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17871);
var G__17871__$2 = (cljs.core.truth_((function (){var fexpr__17874 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17874.cljs$core$IFn$_invoke$arity$1 ? fexpr__17874.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17874.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17871__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17871__$1);
var G__17871__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17871__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17871__$2);
var G__17871__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17871__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17871__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17871__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17871__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17879 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879,(3),null);
var G__17882 = top_data;
var G__17882__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17882,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17882);
var G__17882__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17882__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17882__$1);
var G__17882__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17882__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17882__$2);
var G__17882__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17882__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17882__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17882__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17882__$4;
}

break;
case "execution":
var vec__17883 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17849_SHARP_){
var or__5002__auto__ = (p1__17849_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__17886 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17886.cljs$core$IFn$_invoke$arity$1 ? fexpr__17886.cljs$core$IFn$_invoke$arity$1(p1__17849_SHARP_) : fexpr__17886.call(null, p1__17849_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17887 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17887__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17887);
var G__17887__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17887__$1);
var G__17887__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17887__$2);
var G__17887__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17887__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17887__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17887__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17856__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17891){
var map__17894 = p__17891;
var map__17894__$1 = cljs.core.__destructure_map(map__17894);
var triage_data = map__17894__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17895 = phase;
var G__17895__$1 = (((G__17895 instanceof cljs.core.Keyword))?G__17895.fqn:null);
switch (G__17895__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17896 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17897 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17898 = loc;
var G__17899 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17900_18032 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17901_18033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17902_18034 = true;
var _STAR_print_fn_STAR__temp_val__17903_18035 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17902_18034);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17903_18035);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17889_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17889_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17901_18033);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17900_18032);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17896,G__17897,G__17898,G__17899) : format.call(null, G__17896,G__17897,G__17898,G__17899));

break;
case "macroexpansion":
var G__17904 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17905 = cause_type;
var G__17906 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17907 = loc;
var G__17908 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17904,G__17905,G__17906,G__17907,G__17908) : format.call(null, G__17904,G__17905,G__17906,G__17907,G__17908));

break;
case "compile-syntax-check":
var G__17910 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17911 = cause_type;
var G__17912 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17913 = loc;
var G__17914 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17910,G__17911,G__17912,G__17913,G__17914) : format.call(null, G__17910,G__17911,G__17912,G__17913,G__17914));

break;
case "compilation":
var G__17915 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17916 = cause_type;
var G__17917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17918 = loc;
var G__17919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17915,G__17916,G__17917,G__17918,G__17919) : format.call(null, G__17915,G__17916,G__17917,G__17918,G__17919));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17920 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17921 = symbol;
var G__17922 = loc;
var G__17923 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17924_18037 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17925_18038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17926_18039 = true;
var _STAR_print_fn_STAR__temp_val__17927_18040 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17926_18039);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17927_18040);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17890_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17890_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17925_18038);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17924_18037);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17920,G__17921,G__17922,G__17923) : format.call(null, G__17920,G__17921,G__17922,G__17923));
} else {
var G__17928 = "Execution error%s at %s(%s).\n%s\n";
var G__17929 = cause_type;
var G__17930 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17931 = loc;
var G__17932 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17928,G__17929,G__17930,G__17931,G__17932) : format.call(null, G__17928,G__17929,G__17930,G__17931,G__17932));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17895__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
