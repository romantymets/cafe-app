import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Basket from "../images/Basket";
import Search from "../images/Search";
import { FaCocktail } from "react-icons/fa";
import { ContextApp } from "../../App";
import "./header.css";

const Header = () => {
  const { state, goHome, updateModal, updateSearch, onChangeInputText } = useContext(ContextApp);
  const { basketDrinks, inputValue } = state;
  const basketItemCont = Object.keys(basketDrinks).length;
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <Link onClick={() => goHome} to="/cafe-app" className="logo"><FaCocktail/>NALUVAYKO</Link>
        </div>
        <div className="formContainer">
          <form id="new-film-search" className="form">
            <input
              id="input" name="text" placeholder="Search" value={inputValue} className="searchData"
              onChange={onChangeInputText}/>
            <button
              className="searchButton" id="submit" disabled={inputValue === ""}
              onClick={updateSearch(inputValue)}>
              <Search/>
            </button>
          </form>
        </div>
        <div
          className="basket"
          onClick={() => updateModal(basketItemCont)}>{basketItemCont !== 0 ? <div className="buble"><span>{basketItemCont}</span></div> : null}
          <Basket/>
        </div>
      </div>
    </header>
  );
};

export default Header;
