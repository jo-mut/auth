goog.provide('backend.mailtrap.core');
shadow.js.shim.module$dotenv.config();
backend.mailtrap.core.TOKEN = process.env.MAILTRAP_TOKEN;
backend.mailtrap.core.sender = ({"email": "hello@demomailtrap.com", "name": "JMN"});
backend.mailtrap.core.mailtrap_client = (new shadow.js.shim.module$mailtrap.MailtrapClient(({"token": backend.mailtrap.core.TOKEN})));
backend.mailtrap.core.send = (function backend$mailtrap$core$send(recipients,verification_token){
console.log("called: ",recipients,verification_token);

return backend.mailtrap.core.mailtrap_client.send(({"from": backend.mailtrap.core.sender, "to": recipients, "subject": "Verify your email!", "html": backend.mailtrap.email_templates.verification_email_template(verification_token), "category": "Email verification"})).then((function (res){
return console.log("Email sent succefully",res);
})).catch((function (err){
return console.log("Failed to send email",err);
}));
});

//# sourceMappingURL=backend.mailtrap.core.js.map
