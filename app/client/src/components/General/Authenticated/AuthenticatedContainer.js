import React, {Component} from "react";
import { Link } from "react-router-dom";
import Nav from '../Nav';
import Merch from '../../../assets/bg-home-video.jpg';
import Green from '../../../assets/green-min.jpg';
import Footer from '../Footer';
import Scan from '../../Auth/Scan';
class AuthenticatedContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="authenticated-container">
        <div className="side-nav">

        </div>
        <Scan />
      </div>
    )
  }
}

export default AuthenticatedContainer;
