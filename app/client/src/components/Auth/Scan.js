import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';
class Scan extends Component {
  constructor() {
    super()
    this.state = {
      result: '',
      auth: 'None',
      response: ""
    }
  }

  handleScan = data => {
    if (data) {
      console.log(this.props)

      this.setState({
        result: data,
      })
      axios.post('/api/validation/qr', {id: this.props.userID, AuthToken: data, name: this.props.userName, phone: this.props.phone})
      .then((res) => {
        this.setState({response: res.data.message})
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="scanner-container">
            {(this.state.result ? <p className="scanner-response">{this.state.response}</p> :
              <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '300px', height: '300px', margin: 'auto' }}
            />
            )}
            </div>
          </div>
        </div>
      </div>

    )
  }
}



export default Scan;
