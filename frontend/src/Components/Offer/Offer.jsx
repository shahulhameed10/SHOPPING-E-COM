import React from "react";
import "./Offer.css";
import exclusive_img from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button>Check Out</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt=""/>


      </div>
    </div>
  );
};

export default Offer;
