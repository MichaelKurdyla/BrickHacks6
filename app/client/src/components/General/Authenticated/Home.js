import React from 'react';
import Green from '../../../assets/green-min.jpg';
import Cap from '../../../assets/10Dolla.png';
import Slippers from '../../../assets/12Dolla.png';
import Visor from '../../../assets/15Visor.png';
import Sombrero from '../../../assets/15Sombrero.png';
import Cooler from '../../../assets/20Dolla.png';
import Hat from '../../../assets/28Dolla.png';
import Chair from '../../../assets/30Dolla.png';
import bathingsuit from '../../../assets/bathingsuit.png';
import MEC from '../../../assets/MEC.png';
import pata from '../../../assets/patagonia.png';
import tree from '../../../assets/10tree.png';

export default function Home() {
  return (
    <div className="homepage">
      <h1>Corona Rewards</h1>
      <div className="rewards-grid">
        <div className="custom-card">
          <img src={Green} width="400" height="250" />
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
          <img src={Slippers} width="400" height="250" />
          <div className="content">
            <h3>Comfortable House Slippers</h3>
            <p>Redeem your points for house slippers.</p>
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
          <img src={Green} width="400" height="250" />
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
          <img src={Cap} width="400" height="250" />
          <div className="content">
            <h3>Corona Ball Cap</h3>
            <p>Trade your points for a nice Baseball Cap.</p>
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
          <img src={Sombrero} width="400" height="250" />
          <div className="content">
            <h3>Fun Sombrero</h3>
            <p>Trade your points for a fun, corona sombrero.</p>
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
          <img src={Visor} width="400" height="250" />
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
          <img src={Chair} width="400" height="350" />
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
          <img src={Cooler} width="400" height="350" />
          <div className="content">
            <h3>Drink Cooler</h3>
            <p>Use your points to redeem a cooler to keep your corona cooler for longer.</p>
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

        <div className="custom-card">
          <img src={bathingsuit} width="400" height="350" />
          <div className="content">
            <h3>Bikini</h3>
            <p>Redeem points for a customized two-piece bathing suit.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>150 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={tree} width="200" height="350" />
          <div className="content">
            <h3>10 Tree Sweater</h3>
            <p>Trade your points in for a customized 10 tree sweater.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>200 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>
        
        <div className="custom-card">
          <img src={pata} width="400" height="350" />
          <div className="content">
            <h3>Custom Patagonia</h3>
            <p>Redeem points for a customized quarter-zip patagonia sweater.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>250 Points</p>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </div>

        <div className="custom-card">
          <img src={MEC} width="200" height="350" />
          <div className="content">
            <h3>Down Jacket</h3>
            <p>Redeem points for a customized MEC down jacket.</p>
          </div>
          <div className="pricing">
            <div className="price">
              <p>300 Points</p>
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
