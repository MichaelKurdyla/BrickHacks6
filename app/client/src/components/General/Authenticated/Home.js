import React from 'react';
import Green from '../../../assets/green-min.jpg';
import Cap from '../../../assets/10Dolla.png';
import Slippers from '../../../assets/12Dolla.png';
import Visor from '../../../assets/15Visor.png';
import Sombrero from '../../../assets/15Sombrero.png';
import Cooler from '../../../assets/20Dolla.png';
import Hat from '../../../assets/28Dolla.png';
import Chair from '../../../assets/30Dolla.png';

export default function Home() {
  return (
    <div className="homepage">
      <h1>Corona Rewards</h1>
      <div className="rewards-grid" >
        <div className="custom-card">
          <img src={Green} />
          <div className="content">
            <h3>Plant a tree</h3>
            <p>Redeem your points for our planet.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>15 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Slippers} />
          <div className="content">
            <h3>Comfortable House Slippers</h3>
            <p>Redeem your points for comfortable, black slippers.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>50 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Green} />
          <div className="content">
            <h3>Plant 5 trees</h3>
            <p>Redeem your points for our planet.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>50 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Sombrero} />
          <div className="content">
            <h3>Fun Sombrero</h3>
            <p>Trade in your points for a fun, corona sombrero.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>40 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Cap} />
          <div className="content">
            <h3>Corona Ball Cap</h3>
            <p>Redeem your points for a nice Baseball Cap.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>50 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Visor} />
          <div className="content">
            <h3>Summer Visor</h3>
            <p>Trade your points in for a fun summer visor.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>45 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Hat} />
          <div className="content">
            <h3>Funky Reef Hat</h3>
            <p>Trade your points in for a colourful cap.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>50 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Chair} />
          <div className="content">
            <h3>Fold-Out Chair</h3>
            <p>Use your points to redeem a fold out chair perfect for camping.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>90 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={Cooler} />
          <div className="content">
            <h3>Drink Cooler</h3>
            <p>Use your points to redeem a cooler.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>100 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
