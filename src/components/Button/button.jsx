import Style from "./button.module.css";

export const Button = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className={Style.button}>
      {text}
    </button>
  );
};