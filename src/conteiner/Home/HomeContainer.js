import React, { useContext } from "react";
import { ContextApp } from "../../App";
import Button from "../../component/Button/Button";
import "./HomeContainer.css";

const HomeContainer = () => {
  const { state, selectCocktail, drinks, isLoading } = useContext(ContextApp);
  const { basketDrinks } = state;
  const [drink] = drinks || [];
  return (
    <div className="HomeContainer">
      <div>Для вибору коктейлю скористайтесь пошуком або фільтром</div>
      {isLoading ? <p>loading</p> : null}
      {drink
        ? <div className="wrapCocktail">
          <div className="titleContainer" id={drink.idDrink}>
            <div className="text" id="text"> Персональна рекомендація: </div>
            <div className="text">{drink.strDrink}</div>
          </div>
          <div onClick={() => selectCocktail(drink, drink.idDrink)} className="homeImage">
            <img className="imageContainer" id={drink.idDrink} loading="lazy" width="500"
                 height="500"
                 src={drink.strDrinkThumb}
                 alt="loading ..."/>
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

export default HomeContainer;
