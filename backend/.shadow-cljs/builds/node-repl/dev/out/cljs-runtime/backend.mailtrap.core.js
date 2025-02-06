goog.provide('backend.mailtrap.core');
shadow.js.shim.module$dotenv.config();
backend.mailtrap.core.TOKEN = process.env.MAILTRAP_TOKEN;
backend.mailtrap.core.initialize_client = (function backend$mailtrap$core$initialize_client(){
var client = (new shadow.js.shim.module$mailtrap.MailtrapClient(({"token": backend.mailtrap.core.TOKEN})));
var sender = ({"email": "hello@demomailtrap.com", "name": "JMN"});
var recipients = [({"email": "johnmutuku628@gmail.com"})];
return client.send(({"from": sender, "to": recipients, "subject": "You are awesome!", "text": "Congrats for sending test email with Mailtrap!", "category": "Integration Test"})).then((function (res){
return console.log("Email sent succefully",res);
})).catch((function (err){
return console.log("Failed to send email",err);
}));
});
backend.mailtrap.core.initialize_client();

//# sourceMappingURL=backend.mailtrap.core.js.map
