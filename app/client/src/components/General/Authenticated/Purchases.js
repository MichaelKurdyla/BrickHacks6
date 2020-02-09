import React from 'react';
import axios from 'axios';

export default function Purchases(props) {
  const returnEmpties = (id, uid) => {
    console.log(id, uid)
    axios.post('/api/validation/return', {id: id, uid: uid})
    .then((res) => {
      console.log(res);
    })
  }
    return(
      <div className="purchases-page">
        <div className="container">
          <div className="row">
            <div className='col-sm-12'>
              {console.log(props.purchases)}
                {props.purchases.map((purchase, index) => (
                  <div className="purchase" key={index}>
                    <h3>{purchase.name}</h3>
                    <p>{purchase.date}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
}
