import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { CREATE_USER_REVIEW_MUTATION } from "../../utils/graphql/mutations/review/review";
import { Button, ReviewCard } from "../Index";
import Style from "./review.module.css";

const Reviews = () => {
  const { id: productId } = useParams();
  const [rating, setRating] = useState(0);
  const [tittle, setTitle] = useState("");
  const [comment, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [createUserReview] = useMutation(CREATE_USER_REVIEW_MUTATION);
  const [showPopup, setShowPopup] = useState(false);

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleReviewSubmit = async () => {
    if (!rating || !tittle || !comment) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      // Obtén userId desde el localStorage
      let userId = "";
      try {
        const userInfo = localStorage.getItem("USER_INFO");
        if (userInfo) {
          const decodedToken = jwtDecode(userInfo);
          userId = decodedToken.email;
        } else {
          console.warn("User is not logged in. USER_INFO not found in localStorage.");
        }
      } catch (error) {
        console.error("Error decoding USER_INFO:", error);
      }

      const { data } = await createUserReview({
        variables: {
          userId,
          productId,
          rating,
          tittle: tittle,
          comment: comment,
        },
      });

      const newReview = data.createUserReview;
      setReviews([...reviews, newReview]);

      setRating(0);
      setTitle("");
      setDescription("");

      // Muestra el pop-up después de enviar la reseña
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error creating review:", error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <h1 className={Style.reviewsTitle1}>Reseñas</h1>
      <div className={Style.cardContainer}>
        <div className={Style.reviewsContainer}>
          <h1 className={Style.reviewsTitle}>
            Ayuda a los demás con su compra ! Deja tu reseña !
          </h1>
          <div className={Style.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? Style.starFilled : Style.star}
                onClick={() => handleStarClick(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <div className={Style.formContainer}>
            <input
              type="text"
              placeholder="Título de tu reseña"
              value={tittle}
              onChange={handleTitleChange}
              maxLength={30}
              className={Style.titleInput}
            />
            <textarea
              placeholder="Descripción de tu reseña"
              value={comment}
              onChange={handleDescriptionChange}
              maxLength={50}
              className={Style.descriptionInput}
            />
            <Button
              text="Enviar"
              onClick={handleReviewSubmit}
              style={{
                width: "80px",
                height: "40px",
                marginBottom: "6px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Nueva sección para las ReviewCards */}
      <div className={Style.reviewCardSection}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {showPopup && (
        <div className={Style.popup}>
          <p>Tu reseña ha sido cargada. ¡Gracias!</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;