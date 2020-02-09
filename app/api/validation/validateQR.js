const QRCode = require("../../database/models/QRCode");
const accountSid = 'AC5f2e5759efeae7d1653175746a1262ae';
const authToken = '52ca7ac391ae281afcb154e6116b771a';
exports.validate = (req, response) => {
  const code = req.body.AuthToken;

  console.log(code)
  const filter = {
    AuthToken: code
  }
  console.log(filter)
  QRCode.findOne(filter, (err, res) => {
    console.log(res)
  })
  const update = {
    validCode: false,
    whenUsed: new Date()
  }
  QRCode.findOne(filter, (err, res) => {
    if (err) throw err;
    if(res) {
      if(res.validCode) {
        QRCode.findOneAndUpdate(filter, update)
        .then((res) => {
          // put my shit !!
          const timer = setTimeout(() => {
          console.log("would send the text");
          reminder_text('alec','9053766343');
          },30000);
          return () => clearTimeout(timer);
        });
      }
      else {
        response.send("This is an invaid key")
      }
    } else {
      response.send("There was no Token with code: " + code)
    }
  })

}

function reminder_text(name, phone){
// putting in a text verification of the account !!
const client = require('twilio')(accountSid, authToken);
attach = '+1'
realNumber = attach.concat(phone)
console.log("We are trying to text: " + realNumber)
client.messages.create({
    body: 'Hey ' + name + '!, just a friendly reminder to return your bottles your local liquor store !:)',
    from: '+18509404806',
    to: realNumber
  })
 .then((message) => {
     console.log(message.sid)
 })
 .catch((err) => {
     throw err
 });
}
 