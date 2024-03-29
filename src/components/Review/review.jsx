import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { CREATE_USER_REVIEW_MUTATION } from "../../utils/graphql/mutations/review/review";
import { Button, ReviewCard } from "../Index";
import Style from "./review.module.css";
import { GET_ALL_PRODUCT_REVIEWS } from "../../utils/graphql/querys/products/reviews/getAllProductReviews";
import swal from "sweetalert";

const Reviews = () => {
  const { id: productId } = useParams();
  const [rating, setRating] = useState(0);
  const [tittle, setTitle] = useState("");
  const [comment, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [createUserReview] = useMutation(CREATE_USER_REVIEW_MUTATION);
  const [showPopup, setShowPopup] = useState(false);


  const { loading: reviewsLoading, error: reviewsError, data: reviewsData } = useQuery(GET_ALL_PRODUCT_REVIEWS, {
    variables: { productId },
  });

  useEffect(() => {
    if (reviewsData && reviewsData.getAllProductReviews) {
      setReviews(reviewsData.getAllProductReviews);
    }
  }, [reviewsData]);

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
      swal("Error", "Por favor, complete todos los campos.", "error");
      return;
    }

    try {
      let userId = "";
      try {
        const userInfo = localStorage.getItem("USER_INFO");
        if (userInfo) {
          const decodedToken = jwtDecode(userInfo);
          userId = decodedToken.email;
        } else {
  
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

      swal({
        title: "¡Gracias!",
        text: "Tu reseña ha sido cargada.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
  
      setTimeout(() => {
   
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error creating review:", error);
      
    }
  };

  return (
    <div>
      <h1 className={Style.reviewsTitle1}>Reseñas</h1>
      <div className={Style.cardContainer}>
        <div className={Style.reviewsContainer}>
          <h1 className={Style.reviewsTitle}>
            Ayuda a los demás con su compra! ¡Deja tu reseña!
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

      <div className={Style.reviewCardSection}>
        {reviews.length > 0 ? (
          <ReviewCard reviews={reviews} />
        ) : (
          <p>No hay reseñas disponibles.</p>
        )}
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
