goog.provide('backend.utils.core');
backend.utils.core.date = Date;
backend.utils.core.error = Error;
backend.utils.core.get_env = (function backend$utils$core$get_env(key){
return (process.env[key]);
});
backend.utils.core.math = Math;
backend.utils.core.generate_code = (function backend$utils$core$generate_code(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100000) + backend.utils.core.math.floor(((900000) * backend.utils.core.math.random()))));
});

//# sourceMappingURL=backend.utils.core.js.map
