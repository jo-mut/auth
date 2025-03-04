goog.provide('frontend.components.password_meter');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$lucide_react$dist$cjs$lucide_react=shadow.js.require("module$node_modules$lucide_react$dist$cjs$lucide_react", {});
frontend.components.password_meter.creteria = (function frontend$components$password_meter$creteria(password){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"At least 6 characters",new cljs.core.Keyword(null,"met","met",-378954951),(cljs.core.count(password) >= (6))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Contains uppercase letter",new cljs.core.Keyword(null,"met","met",-378954951),cljs.core.re_find(/[A-Z]/,password)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Contains lowercase letter",new cljs.core.Keyword(null,"met","met",-378954951),cljs.core.re_find(/[a-z]/,password)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Contains a number",new cljs.core.Keyword(null,"met","met",-378954951),cljs.core.re_find(/\d/,password)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Contains special character",new cljs.core.Keyword(null,"met","met",-378954951),cljs.core.re_find(/[^A-Za-z0-9]/,password)], null)], null);
});
frontend.components.password_meter.strength_meter = (function frontend$components$password_meter$strength_meter(password){
var password_strength = cljs.core.count(password);
var strength = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((password_strength > (6))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(strength,cljs.core.inc);
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.re_find(/[a-z]/,password);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.re_find(/[A-Z]/,password);
} else {
return and__5000__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(strength,cljs.core.inc);
} else {
}

if(cljs.core.truth_(cljs.core.re_find(/\d/,password))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(strength,cljs.core.inc);
} else {
}

if(cljs.core.truth_(cljs.core.re_find(/[^A-Za-z0-9]/,password))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(strength,cljs.core.inc);
} else {
}

return cljs.core.deref(strength);
});
frontend.components.password_meter.strength_title = (function frontend$components$password_meter$strength_title(password){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.password_meter.strength_meter(password),(0))){
return "Very weak";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.password_meter.strength_meter(password),(1))){
return "Weak";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.password_meter.strength_meter(password),(2))){
return "Fair";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.components.password_meter.strength_meter(password),(3))){
return "Good";
} else {
return "Very weak";

}
}
}
}
});
frontend.components.password_meter.get_color = (function frontend$components$password_meter$get_color(strength){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strength,(0))){
return "bg-red-500";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strength,(1))){
return "bg-red-400";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strength,(2))){
return "bg-yellow-500";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strength,(3))){
return "bg-yellow-400";
} else {
return "bg-green-500";

}
}
}
}
});
frontend.components.password_meter.view = (function frontend$components$password_meter$view(password){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex justify-between items-center mb-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-xs text-gray-400 "], null),"Password strength"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-xs text-gray-400"], null),frontend.components.password_meter.strength_title(password)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex space-x-1"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
console.log("item: ",frontend.components.password_meter.strength_meter(password));

var strength = frontend.components.password_meter.strength_meter(password);
var color = (((item < strength))?frontend.components.password_meter.get_color(strength):"bg-gray-600");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),item,new cljs.core.Keyword(null,"className","className",-1983287057),["h-1 w-1/4 rounded-full transition-colors duration-300 ",color].join('')], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-2 space-y-1"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"className","className",-1983287057),"flex items-center text-xs"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"met","met",-378954951).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$lucide_react$dist$cjs$lucide_react.Check,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"size-4 text-orange-500 mr-2"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$lucide_react$dist$cjs$lucide_react.X,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"size-4 text-gray-500 mr-2"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(new cljs.core.Keyword(null,"met","met",-378954951).cljs$core$IFn$_invoke$arity$1(item))?"text-orange-500":"text-gray-400")], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null);
}),frontend.components.password_meter.creteria(password))], null)], null);
});

//# sourceMappingURL=frontend.components.password_meter.js.map
