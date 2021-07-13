import React, { useContext } from "react";
import "./contentContainer.css";
import { ContextApp } from "../../App";

const ContentContainer = () => {
  const { selectCocktail, drinks, isLoading } = useContext(ContextApp);
  return (
    <div>
      {isLoading ? <p>loading</p> : null}
      {(drinks)
        ? <ul>
          <div className="contentContainer">
            {drinks.map((cocktail) => <li className="listContainer" key={cocktail.idDrink} onClick={() => selectCocktail(cocktail, cocktail.idDrink)}>
              <div className="smallImageContainer">
                <img className="imageContainer" id={cocktail.idDrink} loading="lazy" width="220"
                     height="291"
                     src={cocktail.strDrinkThumb}
                     alt="loading ..."/>
              </div>
              <div className="titleCocktailContainer">{cocktail.strDrink}</div>
            </li>)}
          </div>
        </ul>
        : <div className="notfound"><p>Нічого не знайдено. Спробуйте ще раз</p></div>}
    </div>);
};

export default ContentContainer;
