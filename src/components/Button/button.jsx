import React from 'react';
import Style from "./button.module.css";

export const Button = ({ text, onClick, style, isDeleteButton }) => {
  const buttonClassName = isDeleteButton ? `${Style.button} ${Style.deleteButton}` : Style.button;

  return (
    <button onClick={onClick} style={style} className={buttonClassName}>
      {text}
    </button>
  );
};
