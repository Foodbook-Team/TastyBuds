import React, {useState} from "react";
import KitchenTips from "./KitchenTips.js";
import './KitchenTips.css'

function KitchenCard() {

const [tips, useTips] = useState(
  [

    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img1.jpeg?raw=true",
      text: "Use a damp towel or paper towel under your cutting board to prevent it from slipping around while you work.",
    },
    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img2.jpeg?raw=true",
      text: "Use a timer when cooking to prevent overcooking or undercooking food. This is especially useful for items like eggs or pasta that require precise timing.",
    },
    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img3.jpeg?raw=true",
      text: "Keep a bowl or container nearby while cooking to collect scraps and waste. This makes it easier to clean up and reduces the risk of cross-contamination.",
    },
    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img4.jpeg?raw=true",
      text: "Keep your knives sharp. A sharp knife is not only safer, but it also makes cutting and chopping tasks easier and more efficient.",
    },
    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img5.jpeg?raw=true",
      text: "Taste as you go. This allows you to adjust the seasoning and flavor of your dish as you cook, rather than having to make major adjustments at the end.",
    },
    {
      img: "https://github.com/Foodbook-Team/TastyBuds/blob/main/src/assets/img6.jpeg?raw=true",
      text: "Keep your pantry and fridge organized. This makes it easier to find what you need and helps prevent food waste.",
    },
  ]
)

  return (
    <>
   
      <div id="chop-vegetables-tips" style={{ fontSize: "2rem" }}>
      <div className="header" style={{fontSize: "2rem"}}>
        <p>Top 6 Kitchen Tips for Efficient and Enjoyable Cooking</p>
   
    </div>


      </div>
      
      <div className="tips-container">
        {tips.map((tip, index) => {
          {console.log(tip)}
          return <KitchenTips img={tip.img} text={tip.text} key={index} />
})}
</div>
      
     
    </>
  );
}
export default KitchenCard;
