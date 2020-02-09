const accountSid = 'AC5f2e5759efeae7d1653175746a1262ae';
const authToken = '52ca7ac391ae281afcb154e6116b771a';

exports.SignUpText = (req, res) => {
    // append a 1 onto the number
    const client = require('twilio')(accountSid, authToken);

    const {name, number} = req.body;
    console.log("we are in the texting code")
    attach = '+1'
    realNumber = attach.concat(number)
    console.log("We are tryuing to text: " + realNumber)
    client.messages.create({
        body: 'Hey ' + name + '!, super excited to have you on board :)',
        from: '+18509404806',
        to: realNumber
      })
     .then((message) => {
         res.send("We sent it")
         console.log(message.sid)
     })
     .catch((err) => {
         throw err
     });
};


