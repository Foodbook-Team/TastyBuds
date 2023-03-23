import React from 'react'
import './KitchenTips.css'

function KitchenTips({img, text}) {
    console.log(img, text)
  return (
    <>
   
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={img} alt="kitchen"></img>
  <div className="card-body">
    <p className="card-text">{text}</p>
  
</div>
</div>
</>
  );
};

export default KitchenTips;