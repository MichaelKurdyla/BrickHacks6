import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Mongoose } from 'mongoose'
import db from Mongoose

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
        </p>
      </div>
    )
  }
}

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


export default Scan;
