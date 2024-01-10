import React from "react";
import Style from "./reviewCard.module.css";

const ReviewCard = ({ userName, stars, productName, title, description }) => {
  return (
    <div className={Style.reviewCard}>
      <h2>{userName}</h2>
      <div className={Style.starsContainer}>
        {Array.from({ length: stars }, (_, index) => (
          <span key={index} className={Style.starFilled}>
            &#9733;
          </span>
        ))}
      </div>
      <p>Producto: {productName}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ReviewCard;