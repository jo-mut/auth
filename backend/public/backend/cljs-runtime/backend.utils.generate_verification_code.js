goog.provide('backend.utils.generate_verification_code');
backend.utils.generate_verification_code.generate_code = (function backend$utils$generate_verification_code$generate_code(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((backend.utils.number.math.random() * (900000)) + (100000)).floor(backend.utils.number.math));
});

//# sourceMappingURL=backend.utils.generate_verification_code.js.map
