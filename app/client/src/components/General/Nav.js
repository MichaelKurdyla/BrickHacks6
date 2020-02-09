import React, {Component} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/corona-logo.png"

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      mobileNavToggle: false
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <nav className="header-nav">
              <div className="logo-container">
                <Link to='/'>
                  <img className="nav-logo" src={Logo} />
                </Link>
              </div>
              <div className="nav-items">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/scan">QR Scanner</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

    )
  }
}
export default Nav;
