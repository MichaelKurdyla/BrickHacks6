import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import Merch from '../../assets/bg-home-video.jpg';
import Green from '../../assets/green-min.jpg';
import SnapCode from '../../assets/snapcode.svg';
import Footer from './Footer';
export default function Landing() {
  return (
    <div className="page">
      <Nav />
      <header className="landing-header">

      </header>
      <section className="centered-info">
        <div className="container">
          <div className="row">
          <div className="col-sm-3"></div>

            <div className="col-sm-6">
              <h3>Loyalty Program</h3>
              <h2>Purchase Return Redeem</h2>
              <p>To celebrate the launch of the Corona Hard Seltzer we want to reward our customers all summer long. The Corona loyalty program allows you to earn points for purchasing and returning products. The points can be used to redeem limited edition merch or a cause of your choice!</p>
              <Link to='/rewards'>View Rewards</Link>
            </div>
            <div className="col-sm-3"></div>

          </div>
        </div>
      </section>
      <section className="img-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center">
              <img className='col-6-img' src={Merch} />
            </div>
            <div className="col-lg-6 my-auto">
              <h2>Earn limited edition merch</h2>
              <p>Instead of giving our customers small pieces of merch in each case of seltzer we wanted to think bigger. Imagine a Corona X Patigonia Fleece that you could use for multiple years?</p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature">
                    <h3>Sustainable</h3>
                    <p>A couple <strong>quality</strong> items over many low quality items</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature">
                    <h3>Cooler Stuff</h3>
                    <p>We can invest more money in merch you will love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="img-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h2>A Green Initiative</h2>
              <p>Recycling used bottles and cans is something that our company wants to support. By returning your empties we will reward you extra points.</p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature">
                    <h3>Recycle</h3>
                    <p>More recycling means less waste and we need your help</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature">
                    <h3>Earn more</h3>
                    <p>Help the planet and be rewarded. Earn <strong>Extra</strong> points when you return your empties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img className='col-6-img' src={Green} />
            </div>
          </div>
        </div>
      </section>
      <section className="snap-code">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 text-center"></div>

          <div className="col-lg-6 text-center">
            <img className='snap-img' src={SnapCode} />
            <h2>Scan our Snapchat code for a unique Lens</h2>
            <p>Bring the fun of Corona with you where ever you go with our custom SnapChat lens. Just scan this code in the Snapchat app to get the lens for 48 hours!</p>
          </div>
          <div className="col-lg-3 text-center"></div>

        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
}
