import Style from "./card.module.css";
import React, { useState } from "react";
import {Button} from "../Index";
import { NavLink } from "react-router-dom";
import Corazon from '../../Assets/Logos/Corazon.png'
import Corazon2 from "../../Assets/Logos/Corazon2.png";

const Card = ({ props }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <figure className={Style.card}>
      <img
        className={Style.corazon}
        src={hovered ? Corazon2 : Corazon}
        alt="Corazón"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <NavLink to={`/${props.id}`} className={Style.card_text}>
        <img src={props.image} alt={props.name} />
        <h2 title={props.name}>{props.name}</h2>
        <h3>{props.model}</h3>
        <h4 className={Style.card_price}>${props.price}</h4>
      </NavLink>
      <Button
        text="Añadir"
        onClick={() => console.log("añadido")}
        style={{ width: "80px", height: "40px", marginBottom: "6px" }}
      />
    </figure>
  );
};

export default Card;
