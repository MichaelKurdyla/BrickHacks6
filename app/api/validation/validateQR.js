const QRSchema = require('./database/models/QRCode');

function Validate() {
    if(QRSchema.AuthToken.find(this.state.result).count() > 0) {
      let currentResults = QRSchema.AuthToken.find(this.state.result)
      if (currentResults.validCode) {
        currentResults.validCode = False;
        currentResults.whenUsed = date.now();
      }  
      else{
        {"This code has been scanned already"}
      }
    }
    else {
      {"This is not a valid QR code"}
    }
    
  }