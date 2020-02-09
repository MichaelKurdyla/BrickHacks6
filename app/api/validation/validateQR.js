const QRCode = require("../../database/models/QRCode");

exports.validate = (req, response) => {
  const code = req.body.AuthToken;
  
  console.log(code)
  const filter = {
    AuthToken: code
  }
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
        findOneAndUpdate(filter, update)
        response.send("Found one. Setting Token to Null");
      }
      else {
        response.send("This is an invaid key")
      }
    } else {
      response.send("There was no Token with code: " + code)
    }
  })

}
