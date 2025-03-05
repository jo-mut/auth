goog.provide('frontend.pages.email_verification');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$framer_motion$dist$cjs$index=shadow.js.require("module$node_modules$framer_motion$dist$cjs$index", {});
var module$node_modules$react_router_dom$dist$main=shadow.js.require("module$node_modules$react_router_dom$dist$main", {});
frontend.pages.email_verification.handle_on_change = (function frontend$pages$email_verification$handle_on_change(input_refs,code,set_code,index,value){
var new_code_13848 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code,index,value);
(set_code.cljs$core$IFn$_invoke$arity$1 ? set_code.cljs$core$IFn$_invoke$arity$1(new_code_13848) : set_code.call(null, new_code_13848));

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,"")) && ((index < (5))))){
var temp__5804__auto__ = (input_refs.current[(index + (1))]);
if(cljs.core.truth_(temp__5804__auto__)){
var next_input = temp__5804__auto__;
return next_input.focus();
} else {
return null;
}
} else {
return null;
}
});
frontend.pages.email_verification.handle_on_key_down = (function frontend$pages$email_verification$handle_on_key_down(code,input_refs,index,e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Backspace")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code,index),"")) && ((index > (0))))))){
var temp__5804__auto__ = (input_refs.current[(index - (1))]);
if(cljs.core.truth_(temp__5804__auto__)){
var prev_input = temp__5804__auto__;
return prev_input.focus();
} else {
return null;
}
} else {
return null;
}
});
frontend.pages.email_verification.handle_submit = (function frontend$pages$email_verification$handle_submit(code,event){
event.preventDefault();

console.log("submited ",code);

return frontend.api.core.verify_email(code).then((function (){
var navigate = module$node_modules$react_router_dom$dist$main.useNavigate();
return (navigate.cljs$core$IFn$_invoke$arity$1 ? navigate.cljs$core$IFn$_invoke$arity$1("/") : navigate.call(null, "/"));
}));
});
frontend.pages.email_verification.f_view = (function frontend$pages$email_verification$f_view(props){
var vec__13845 = module$node_modules$react$index.useState(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","","","",""], null));
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(0),null);
var set_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13845,(1),null);
var input_refs = module$node_modules$react$index.useRef(cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl \n                         rounded-2xl shadow-xl overflow-hidden"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$framer_motion$dist$cjs$index.motion.div,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(-50)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),0.5], null),new cljs.core.Keyword(null,"className","className",-1983287057),"bg-gray-800 bg-opacity-50 backdrop-filter background-blur-xl \n                      rounded-2xl shadow-2xl p-8 w-full max-w-md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-emerald-500 \n                          text-transparent bg-clip-text"], null),"Verify Your Email"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"text-center text-gray-300 mb-6 text-center bg-gradient-to-r from-yellow-400 to-emerald-500 \n                       text-transparent bg-clip-text"], null),"Enter the 6 digit code sent to your email"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__13842_SHARP_){
return frontend.pages.email_verification.handle_submit(code,p1__13842_SHARP_);
}),new cljs.core.Keyword(null,"className","className",-1983287057),"space-y-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"flex justify-between"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,digit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.input.view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (e){
return (input_refs.current[index] = e);
}),new cljs.core.Keyword(null,"max-length","max-length",-254826109),(6),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return frontend.pages.email_verification.handle_on_key_down(input_refs,code,index,e.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),digit,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return frontend.pages.email_verification.handle_on_change(input_refs,code,set_code,index,e.target.value);
})], null)], null);
}),code)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$framer_motion$dist$cjs$index.motion.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white \n                           font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none\n                           focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition \n                           duration-200",new cljs.core.Keyword(null,"whileHover","whileHover",-678588413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.02], null),new cljs.core.Keyword(null,"whileTop","whileTop",340419246),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.98], null),new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Verify email"], null)], null)], null)], null);
});
frontend.pages.email_verification.view = (function frontend$pages$email_verification$view(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),frontend.pages.email_verification.f_view,props], null);
});

//# sourceMappingURL=frontend.pages.email_verification.js.map
