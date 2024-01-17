import Style from "./button.module.css";

export const Button = ({ text, onClick, style, additionalClassName }) => {
  return (
    <div className={`${Style.buttonContainer} ${additionalClassName || ''}`}>
      <button onClick={onClick} style={style} className={`${Style.button}`}>
        {text}
      </button>
    </div>
  );
};