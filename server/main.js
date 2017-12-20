import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    'enviaCorreu'(from, text) {
        this.unblock();
        Email.send({
            from,
            to: "ventas@latinmoda.info",
            subject: "Mensaje de BlusasColombianas.es",
            text
        });
    }
});
