import React from "react";
import Slider from "react-slick";
import Style from "./reviewCard.module.css";

const ReviewCard = ({ reviews }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  if (!reviews || !Array.isArray(reviews)) {
    return <div>No hay reseñas disponibles.</div>;
  }

  return (
    <Slider {...sliderSettings} className={Style.reviewCard}>
      {reviews.map((review) => (
        <div key={review.id} className={Style.cardContent}>
          <h2>{review.userId}</h2>
          <div className={Style.starsContainer}>
            {[...Array(review.rating)].map((_, index) => (
              <span key={index} className={Style.starFilled}>
                &#9733;
              </span>
            ))}
          </div>
          <h3>{review.tittle}</h3>
          <p>{review.comment}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewCard;
