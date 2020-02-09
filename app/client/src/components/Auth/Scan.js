import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';
class Scan extends Component {
  state = {
    result: 'No result',
    auth: 'None',
  }

  handleScan = data => {
    console.log(this.props)
    if (data) {
      this.setState({
        result: data,
      })
      axios.post('/api/validation/qr', {AuthToken: data, name: this.props.name, phone: this.props.phone})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
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



export default Scan;
