const mongoose = require("mongoose")

function Validate() {
    if(QRCodeSchema.AuthToken.find(this.state.result).count() > 0) {
      let currentResults = QRCodeSchema.AuthToken.find(this.state.result)
      if (currentResults.validCode) {
        currentResults.validCode = False;
        currentResults.whenUsed = date.now();
        return "WOoooo"
      }  
      else{
        return "This code has been scanned already"
      }
    }
    else {
      return "This is not a valid QR code"
    }
  }