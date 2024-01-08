import Style from "./card.module.css";
import React, { useState } from "react";
import { Button } from "../Index";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_FAV } from "../../utils/graphql/querys/products/favs/addFav";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import Corazon from '../../Assets/Logos/Corazon.png';
import Corazon2 from "../../Assets/Logos/Corazon2.png";
import cruz from "../../Assets/Logos/cruz.png"
import { useAddProductToCart } from "../../utils/hooks/products/useMutationProducts";

const Card = ({ props, isWishlist, onDelete }) => {
  const hardcodedUserId = "pepona@pepona.com";
  const [hovered, setHovered] = useState(false);
  const isFav = props.isFav;

  const [addFavMutation] = useMutation(ADD_FAV, { refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: hardcodedUserId } }] });
  const [deleteFavMutation] = useMutation(DELETE_FAV, { refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: hardcodedUserId } }] });

  const handleFavToggle = async () => {
    console.log("userId:", hardcodedUserId);
    console.log("productId:", props.id);
    try {
      await addFavMutation({ variables: { productId: props.id, userId: hardcodedUserId } });
    } catch (error) {
      console.error("Error al añadir a favoritos:", error);
    }
  };

  const handleDelete = async () => {
    console.log("userId:", hardcodedUserId);
    console.log("productId:", props.id);
    try {
      await deleteFavMutation({ variables: { productId: props.id, userId: hardcodedUserId } });
      onDelete(props.id);
    } catch (error) {
      console.error("Error al eliminar de favoritos:", error);
    }
  };

  return (
    <figure className={Style.card}>
      <img
        className={Style.corazon}
        src={isFav ? (hovered ? Corazon2 : Corazon) : Corazon}
        alt="Corazón"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={isWishlist ? handleFavToggle : undefined}
      />
      {isWishlist && (
        <img
          className={Style.deleteIcon}
          src={cruz} 
          alt="Eliminar"
          onClick={isWishlist ? handleDelete : undefined}
        />
      )}
      <NavLink to={`/${props.id}`} className={Style.card_text}>
        <img src={props.image} alt={props.name} />
        <h2 title={props.name}>{props.name}</h2>
        <h3>{props.model}</h3>
        <h4 className={Style.card_price}>${props.price}</h4>
      </NavLink>
      <Button
        text="Añadir al Carrito"
        onClick={() => console.log("añadido al carrito")}
        style={{ width: "80px", height: "40px", marginBottom: "6px" }}
      />
    </figure>
  );
};

export default Card;