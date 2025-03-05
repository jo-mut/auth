goog.provide('frontend.components.input');
frontend.components.input.sub_type_styles = (function frontend$components$input$sub_type_styles(sub_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_type,new cljs.core.Keyword(null,"default","default",-1987822328))){
return "w-full pl-10 pr-3 py-2  bg-gray-800 bg-opacity-100 rounded-lg \n     border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 \n     text-white placeholder-gray-400 transition duration-200";
} else {
return "w-12 h-12 text-center justify-center text-2xl font-bold bg-gray-700 text-white\n     border-2 border-gray-500 rounded-lg focus:border-green-500 focus:outline-none";
}
});
frontend.components.input.view = (function frontend$components$input$view(props){
var map__16561 = props;
var map__16561__$1 = cljs.core.__destructure_map(map__16561);
var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var sub_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16561__$1,new cljs.core.Keyword(null,"sub-type","sub-type",-997954412));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"relative mb-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"absolute inset-y-0 left-0 flex \n                          items-center pl-3 pointer-events-none"], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"size-5 text-orange-500"], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[max_length,key,placeholder,ref,value,type,frontend.components.input.sub_type_styles(sub_type),on_change,on_key_down])], null)], null);
});

//# sourceMappingURL=frontend.components.input.js.map
