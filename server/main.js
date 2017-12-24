import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { WebApp } from 'meteor/webapp';
import prerenderio from 'prerender-node';

Meteor.startup(() => {
  prerenderio.set('host', 'localhost:10000');
  prerenderio.set('protocol', 'http');
  prerenderio.set('forwardHeaders', true);
  prerenderio.set('afterRender', function afterRender(error) {
      if (error) {
         console.log('prerenderio error', error);
         return;
      }
 });
 WebApp.rawConnectHandlers.use(prerenderio);
});

// Meteor.startup(() => {
//   // code to run on server at startup
// });

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
