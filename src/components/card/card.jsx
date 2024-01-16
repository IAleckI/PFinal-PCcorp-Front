import Style from "./card.module.css";
import React, { useState, useEffect } from "react";
import { Button } from "../Index";
import { NavLink } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_FAV } from "../../utils/graphql/querys/products/favs/addFav";
import { DELETE_FAV } from "../../utils/graphql/querys/products/favs/deleteFav";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";
import Corazon from "../../Assets/Logos/Corazon.png";
import Corazon2 from "../../Assets/Logos/Corazon2.png";
import { useAddProductToCart } from "../../utils/hooks/products/useMutationProducts";
import { jwtDecode } from "jwt-decode";
import swal from "sweetalert";


const Card = ({ props, isWishlist, onDelete }) => {
  let email = "";
  try {
    const userInfo = localStorage.getItem("USER_INFO");
    if (userInfo) {
      const decodedToken = jwtDecode(userInfo);
      email = decodedToken.email;
    } else {
      email = "";
    }
  } catch (error) {
    console.error("Error decoding USER_INFO:", error);
    email = "";
  }

  const [hovered, setHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [addFavMutation] = useMutation(ADD_FAV, {
    refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: email } }],
  });
  const [deleteFavMutation] = useMutation(DELETE_FAV, {
    refetchQueries: [{ query: GET_ALL_FAVS, variables: { userId: email } }],
  });
  const { addProductToCart, addLoading } = useAddProductToCart(props.id);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDeletePopupFromButton, setShowDeletePopupFromButton] =
    useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsInWishlist(favorites.includes(props.id));
  }, [props.id]);

  const handleFavToggle = async () => {
    try {
      if (!email) {
        swal(
          "Inicia sesión",
          "Antes debes iniciar sesión para agregar productos a favoritos",
          "info"
        ).then(() => {
          window.location.href = "/login";
        });
        return;
      }

      if (isInWishlist) {
        await deleteFavMutation({
          variables: { productId: props.id, userId: email },
        });
        setShowDeletePopup(true);
        setShowDeletePopupFromButton(false);
        swal({
          title: "Producto eliminado de favoritos",
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      } else {
        await addFavMutation({
          variables: { productId: props.id, userId: email },
        });
        setShowPopup(true);
        swal({
          title: "Producto agregado a favoritos",
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      }

      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (isInWishlist) {
        localStorage.setItem(
          "favorites",
          JSON.stringify(favorites.filter((id) => id !== props.id))
        );
      } else {
        localStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, props.id])
        );
      }

      setIsInWishlist(!isInWishlist);

      setTimeout(() => {
        setShowPopup(false);
        setShowDeletePopup(false);
      }, 2000);
    } catch (error) {
      console.error("Error al añadir/eliminar de favoritos:", error);
    }
  };

  const handleAddToCart = () => {
    console.log("Adding to Cart...");

    if (!email) {
      swal(
        "Inicia sesión",
        "Antes debes iniciar sesión para agregar productos al carrito",
        "info"
      ).then(() => {
        window.location.href = "/login";
      });
    } else {
      addProductToCart();
      swal({
        title: "Producto agregado al carrito",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
      setShowCartPopup(true);
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
        <h4 className={Style.card_price}>
          ${props.price.toLocaleString("es-ES", { maximumFractionDigits: 0 })}
        </h4>
      </NavLink>
      <button onClick={handleAddToCart} className={Style.cart_button}/>
    </figure>
  );
};

export default Card;
