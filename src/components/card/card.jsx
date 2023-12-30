import Style from "./card.module.css";
import {Button} from "../Index";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  return (
    <figure className={Style.card}>
      <Link to={`/${props.id}`}>
        <img src={props.image} alt={props.name} />
        <h2 title={props.name}>{props.name}</h2>
        <h3>{props.model}</h3>
        <h4 className={Style.card_price}>${props.price}</h4>
      </Link>
      <Button
        text="Añadir"
        onClick={() => console.log("añadido")}
        style={{ width: "80px", height: "40px", marginBottom: "6px" }}
      />
    </figure>
  );
};

export default Card;