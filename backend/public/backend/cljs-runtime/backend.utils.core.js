goog.provide('backend.utils.core');
backend.utils.core.math = Math;
backend.utils.core.date = Date;
backend.utils.core.error = Error;
backend.utils.core.get_env = (function backend$utils$core$get_env(key){
return (process.env[key]);
});
backend.utils.core.generate_code = (function backend$utils$core$generate_code(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((backend.utils.core.math.random() * (900000)) + (100000)).floor(backend.utils.core.math));
});

//# sourceMappingURL=backend.utils.core.js.map
