import React, { useState } from "react";
import { Button } from "../Index";
import { NavLink } from "react-router-dom";
import Style from "./wishlistcard.module.css";

const WishlistCard = ({ props, onRemove }) => {

  return (
    <div className={Style.wishlistCard}>
      
      <div className={Style.wishlistCardDetails}>
        <NavLink to={`/${props.id}`} className={Style.cardText}>
          <img src={props.image} alt={props.name} />
          <div className={Style.cardInfo}>
            <h2 title={props.name}>{props.name}</h2>
            <h3>{props.model}</h3>
            <h4 className={Style.cardPrice}>${props.price}</h4>
          </div>
        </NavLink>
        <Button
          text="Eliminar"
          onClick={onRemove}  // Llama a la función de eliminación
          style={{ width: "80px", height: "40px", marginBottom: "6px" }}
        />
      </div>
    </div>
  );
};

export default WishlistCard;