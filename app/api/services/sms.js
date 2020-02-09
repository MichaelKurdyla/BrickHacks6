const accountSid = 'AC5f2e5759efeae7d1653175746a1262ae';
const authToken = '52ca7ac391ae281afcb154e6116b771a';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'this is a text from your freindly neighbourhood rabbi',
     from: '+18509404806',
     to: '+19053766343'
   })
  .then(message => console.log(message.sid));