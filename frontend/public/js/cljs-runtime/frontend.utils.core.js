goog.provide('frontend.utils.core');
frontend.utils.core.format_date = (function frontend$utils$core$format_date(date_string){
var date = (new Date(date_string));
if(cljs.core.truth_(date.getTime())){
} else {
}

return date.toLocaleDateString("en-US",({"year": "numeric", "month": "short", "day": "numeric", "hour": "2-digit", "minute": "2-digit", "hour12": true}));
});

//# sourceMappingURL=frontend.utils.core.js.map
