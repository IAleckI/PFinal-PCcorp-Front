import React from "react";
import Style from "./reviewCard.module.css";

const ReviewCard = ({ userId, rating, tittle, comment }) => {
  return (
    <div className={Style.reviewCard}>
      <h2>{userId}</h2>
      <div className={Style.starsContainer}>
        {[...Array(rating)].map((_, index) => (
          <span key={index} className={Style.starFilled}>
            &#9733;
          </span>
        ))}
      </div>
      <h3>{tittle}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;