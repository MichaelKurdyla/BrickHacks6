const QRCode = require("../../database/models/QRCode");
const User = require("../../database/models/User");

const accountSid = 'AC5f2e5759efeae7d1653175746a1262ae';
const authToken = '52ca7ac391ae281afcb154e6116b771a';

exports.purchase = (req, res) => {
  const {name, date, id, price} = req.body;
  User.findOne({_id: id}, (err, user) => {
    if (err) throw err;
    user.purchases.push({name: name, date: date})
    user.points.balance = parseInt(user.points.balance) - parseInt(price);
    user.save()
    res.status(200).json({ message: "Your purchase was successful" })

  })
}


exports.return = (req, res) => {
  const {id, uid} = req.body;
  User.findOne({_id: uid}, (err, user) => {
    if (err) throw err;
    const pid = user.points.purchases.findIndex((purchase) => purchase._id = id);
    user.points.purchases[pid].returned = true;
    console.log(user.points.purchases[pid]);
    user.points.balance = parseInt(user.points.balance) + parseInt(user.points.purchases[pid].Points);
    user.save().then(() => {
      res.status(200).json({ message: "Your purchase was successful" })
    })

  })
}
exports.validate = (req, response) => {
  const code = req.body.AuthToken;
  const {phone, name, id} = req.body;
  console.log(code)
  const filter = {
    AuthToken: code
  }
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
          User.findOne({_id: id}, (err, user) => {
            if(err) throw err;
            user.points.balance = parseInt(user.points.balance) + parseInt(res.Points);
            user.points.purchases.push(res);
            user.save();
          })
          const timer = setTimeout(() => {
          reminder_text(name,phone);
          },3000);
          return response.status(200).json({ message: "Your QR code was accepted adding " + res.Points + " points to your account." })

        });
      }
      else {
        return response.status(200).json({ message: "Your QR code has already been redeemed!" })

      }
    } else {
      return response.status(200).json({ message: "This QR code is not registered in our system." })
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
