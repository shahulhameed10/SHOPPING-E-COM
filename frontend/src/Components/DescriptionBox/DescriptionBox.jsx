import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(155)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Meet our innovative Product, crafted for efficiency and convenience.
          Featuring a sleek design and user-friendly interface, it’s perfect for
          all purpose. Made from durable materials, it’s built to last and
          withstand daily use. Lightweight and portable, it easily fits into
          your routine. Upgrade your experience with this essential tool today
        </p>
        <p>
          we are dedicated to delivering high-quality products that enhance
          everyday life. Our commitment to innovation and sustainability drives
          us to create solutions that meet the needs of our customers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
