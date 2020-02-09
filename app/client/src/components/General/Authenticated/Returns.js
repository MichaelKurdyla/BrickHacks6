import React from 'react';

export default function Returns(props) {
    return(
      <div className="returns-page">
        <div className="container">
          <div className="row">
            <div className='col-sm-12'>
                {props.points.purchases.map((purchase, index) => (
                  <div className="purchase" key={index}>
                    <div className="info">
                      <h3>Purchase ID: {purchase.AuthToken}</h3>
                      <p>Redeemed Amount: {purchase.Points}</p>
                    </div>
                    <div className={"redeem-button " + (props.returned ? "returned" : '')}>
                      {(props.returned ? <p>Returned</p> : <button>Returned</button>)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
}
