import React from 'react';
import Logo from '../../assets/corona-logo.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="footer-logo" src={Logo} />
          </div>
          <div className="col-sm-6 my-auto">
            <div className="social-container">
              <div className="social-icon">
                <a href="https://www.facebook.com/CoronaUSA">
                  <img src="https://img.icons8.com/material/96/000000/facebook-f.png" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://twitter.com/CoronaExtraUSA">
                  <img src="https://img.icons8.com/material/96/000000/twitter-squared.png" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.instagram.com/coronausa/">
                  <img src="https://img.icons8.com/material/96/000000/instagram-new--v1.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
