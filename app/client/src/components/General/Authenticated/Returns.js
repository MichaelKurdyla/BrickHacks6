import React from 'react';
import axios from 'axios';

export default function Returns(props) {
  const returnEmpties = (id, uid) => {
    console.log(id, uid)
    axios.post('/api/validation/return', {id: id, uid: uid})
    .then((res) => {
      console.log(res);

      //window.location.reload(true);

    })
  }
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
                    <div className={"redeem-button " + (purchase.returned ? "returned" : '')}>
                      {(purchase.returned ? <p>Returned</p> : <button onClick={() => returnEmpties(purchase._id, props.userID)}>Returned</button>)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
}
