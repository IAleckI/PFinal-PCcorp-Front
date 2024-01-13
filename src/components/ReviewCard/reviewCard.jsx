import React from "react";
import Slider from "react-slick";
import Style from "./reviewCard.module.css";

const ReviewCard = ({ userId, rating, tittle, comment }) => {
  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings} className={Style.reviewCard}>
      <div className={Style.cardContent}>
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
    </Slider>
  );
};

export default ReviewCard;