goog.provide('backend.mailtrap.emails');
backend.mailtrap.emails.send_verification_email = (function backend$mailtrap$emails$send_verification_email(email,verification_token){
var recipients = [({"email": email})];
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(backend.mailtrap.core.send(recipients,verification_token),(function (err){
return console.log("failed to send email",err);
}));
});

//# sourceMappingURL=backend.mailtrap.emails.js.map
