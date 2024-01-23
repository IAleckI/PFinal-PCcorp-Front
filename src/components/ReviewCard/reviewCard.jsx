import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./reviewCard.module.css";

const ReviewCard = ({ reviews }) => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
    return <div>No hay reseñas disponibles.</div>;
  }

  return (
    <div className={Style.reviewCardSlider}>
      <Slider {...sliderSettings}>
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
    </div>
  );
};

export default ReviewCard;
