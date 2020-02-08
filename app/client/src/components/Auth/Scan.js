import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class Scan extends Component {
  state = {
    result: 'No result',
    auth: 'None',
  }

  handleScan = data => {
    if (data) {

      this.setState({
        result: data,
        auth: data.slice(-2)
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
        <p>{this.state.result}
        <br/>
          {this.state.auth}
        </p>
      </div>
    )
  }
}

export default Scan;
