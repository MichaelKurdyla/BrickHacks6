import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import Validate from '../../../../../api/validate/validateQR.js'

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
          {Validate()}
        </p>
      </div>
    )
  }
}

export default Scan;
