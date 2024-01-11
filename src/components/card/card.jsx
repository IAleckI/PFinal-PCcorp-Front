import Style from "./card.module.css";
import React, { useState, useEffect } from "react";
import { Button } from "../Index";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_FAV } from "../../utils/graphql/querys/products/favs/addFav";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import Corazon from '../../Assets/Logos/Corazon.png';
import Corazon2 from "../../Assets/Logos/Corazon2.png";
import { useAddProductToCart } from "../../utils/hooks/products/useMutationProducts";
import { jwtDecode } from "jwt-decode";


const Card = ({ props, isWishlist, onDelete }) => {
  let email = '';
  try {
    const userInfo = localStorage.getItem('USER_INFO');
    if (userInfo) {
      const decodedToken = jwtDecode(userInfo);
      email = decodedToken.email;
    } else {
      console.warn("User is not logged in. USER_INFO not found in localStorage.");
      
      email = ''; 
    }
  } catch (error) {
    console.error("Error decoding USER_INFO:", error);

    email = ''; 
  }

  
  const { addProductToCart, addLoading } = useAddProductToCart(props.id)
  const [hovered, setHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addFavMutation] = useMutation(ADD_FAV, { refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: email } }] });
  const [deleteFavMutation] = useMutation(DELETE_FAV, { refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: email } }] });
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDeletePopupFromButton, setShowDeletePopupFromButton] = useState(false);
  
  useEffect(() => {
    // Actualiza el estado isInWishlist cuando cambia la prop isWishlist
    setIsInWishlist(isWishlist);
  }, [isWishlist]);
  
 
  const handleFavToggle = async () => {
    try {
      if (isInWishlist) {
        await deleteFavMutation({ variables: { productId: props.id, userId: email } });
        setShowDeletePopup(true);
        setShowDeletePopupFromButton(false);
      } else {
        await addFavMutation({ variables: { productId: props.id, userId: email } });
        setShowPopup(true);
      }

      // Actualiza el estado isInWishlist después de la mutación
      setIsInWishlist(!isInWishlist);

      setTimeout(() => {
        setShowPopup(false);
        setShowDeletePopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error al añadir/eliminar de favoritos:", error);
    }
  };
  
  return (
    <figure className={Style.card}>
      <img
        className={Style.corazon}
        src={hovered || isInWishlist ? Corazon2 : Corazon}
        alt="Corazón"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleFavToggle}
      />
      <NavLink to={`/${props.id}`} className={Style.card_text}>
        <img src={props.image} alt={props.name} />
        <h2 title={props.name}>{props.name}</h2>
        <h3>{props.model}</h3>
        <h4 className={Style.card_price}>${props.price}</h4>
      </NavLink>
      {isWishlist && (
        <Button
          className={Style.deleteButton}
          text="Eliminar"
          onClick={() => {
            onDelete && onDelete(props.id);
            setShowDeletePopupFromButton(true);
          }}
        />
      )}
      <Button
        text= "Añadir"
        onClick={addProductToCart}
        style={{ width: "80px", height: "40px", marginBottom: "6px" }}
      />

      {showPopup && ( 
        <div className={Style.popup}>
          <p>Agregado a Favoritos</p>
        </div>
      )}

      {(showDeletePopup || showDeletePopupFromButton) && ( 
        <div className={Style.popupDel}>
          <p>Eliminado de Favoritos</p>
        </div>
      )}
    </figure>
  );
};

export default Card;
