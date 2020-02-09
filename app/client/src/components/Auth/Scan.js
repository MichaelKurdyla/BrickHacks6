import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import Nav from '../General/Nav';
//import Validate from '../../../../api/validation/validateQR';
import axios from 'axios';

class Scan extends Component {
  state = {
    result: 'No result'
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
      <div className="page">
        <Nav />
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
      </div>
    )
  }
}

export default Scan;