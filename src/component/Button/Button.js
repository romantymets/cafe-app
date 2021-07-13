import React, { useContext } from "react";
import { ContextApp } from "../../App";
const Button = ({ title, cocktails, id, drink }) => {
  const { addCocktailToButton } = useContext(ContextApp);
  return (
    <div className="btnContainer">
      <button onClick={() => addCocktailToButton(cocktails, id, drink)} className="btn">
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
