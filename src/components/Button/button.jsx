import Style from "./button.module.css";

export const Button = ({ text, onClick, style }) => {
  return (
    <div className={Style.buttonContainer}>
      <button onClick={onClick} style={style} className={Style.button}>
        {text}
      </button>
    </div>
  );
};
