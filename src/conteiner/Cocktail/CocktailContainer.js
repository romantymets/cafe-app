import React, { useContext } from "react";
import { ContextApp } from "../../App";
import Button from "../../component/Button/Button";
import "./cocktailContainer.css";

const CocktailContainer = () => {
  const { state, drinks, isLoading } = useContext(ContextApp);
  const { basketDrinks } = state;
  const [drink] = drinks;
  return (
    <div className="contentContainer">
      {isLoading ? <p>loading</p> : null}
      {drink
        ? <div className="wrapCocktail">
          <div className="titleContainer" id={drink.idDrink}>
            <div className="text" id="text">{drink.strDrink} </div>
          </div>
          <div>
            <img className="imageContainer" id={drink.idDrink} loading="lazy" width="700"
                 height="700"
                 src={drink.strDrinkThumb}
                 alt="loading ..."/>
          </div>
          <div className="instruction">
            <div>Instruction:  </div>
            <br/>
            <div className="text" id="text">{drink.strInstructions} </div>
          </div>
          <div>
            <Button
              title={"В корзину"}
              cocktails={basketDrinks}
              drink={drink}
              id={drink.idDrink}
            />
          </div>
        </div>
        : null}
    </div>
  );
};

export default CocktailContainer;
