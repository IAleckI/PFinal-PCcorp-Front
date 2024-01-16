import Style from "./button.module.css";

export const Button = ({ text, onClick, style }) => {

  return (
    <div className={Style.button_container}>
      <button onClick={onClick} style={style}>
        {text}
      </button>
    </div>
  );
};
