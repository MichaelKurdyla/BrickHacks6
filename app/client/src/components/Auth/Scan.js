import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
//import Validate () from ../../../../../api/

class Scan extends Component {
  state = {
    result: 'No result',
    auth: 'None',
  }

  handleScan = data => {
    if (data) {

      this.setState({
        result: data,
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>
          {this.state.result}
          <br />
          {Validate(QRCodeSchema, this.state.result)}
        </p>
      </div>
    )
  }
}

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


export default Scan;
