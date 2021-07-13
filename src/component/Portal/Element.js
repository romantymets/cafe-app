import React, { useContext } from "react";
import { ContextApp } from "../../App";

export const Element = () => {
  const { state, onRemoveItemClick, onItemSendClick } = useContext(ContextApp);
  const { basketDrinks } = state;
  const list = Object.keys(basketDrinks);

  return (
    <div>
      {list.length
        ? <ul className="ulBasket">
          <div className="contentBasketContainer">
            {list.map((cocktailId) => <li key={cocktailId}>
              <div className="deleteAndCount">
                <div className="delete" onClick={onRemoveItemClick(cocktailId)}>X</div>
              </div>
              <div className="smallImageContainer">
                <img className="imageContainer" loading="lazy" width="100"
                     height="100"
                     src={basketDrinks[cocktailId].drink.strDrinkThumb}
                     alt="loading ..."/>
              </div>
              <div className="titleCocktailContainer">{basketDrinks[cocktailId].drink.strDrink}</div>
              <div> Замовлено: {basketDrinks[cocktailId].count}</div>
            </li>)}
          </div>
        </ul>
        : null}
      <div className="btnBasketContainer">
        <button className="btn" onClick={() => onItemSendClick(list)}>Підтвердити
        </button>
      </div>
    </div>
  );
};
