import Style from "./button.module.css";
// import { Link, useLocation } from "react-router-dom";

export const Button = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className={Style.button}>
      {text}
    </button>
  );
};

// export const ButtonHome = () => {
//   const location = useLocation();

//   let buttonText = "Home";
//   if (location.pathname === "/") {
//     buttonText = "Ingresar";
//   }

//   return (
//     <Link to="/">
//       <button className={Style.ButtonHome}>{buttonText}</button>
//     </Link>
//   );
// };
