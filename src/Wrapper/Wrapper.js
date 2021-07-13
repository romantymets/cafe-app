import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useFetchMovies from "../hooks/useFetch";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Portal from "../component/Portal/Portal";
import { Element } from "../component/Portal/Element";
import { ContextApp } from "../App";
import "./Wrapper.css";

const RANDOM = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const getSingleCocktail = (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const getSearchData = (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
const getSearchWithLetter = (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

const initialState = {

  url: RANDOM,
  isOpen: false,
  inputValue: "",
  letter: "///",
  basketDrinks: {}

};

const Wrapper = ({ children }) => {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const { url, isOpen } = state;
  const [isLoading, drinks] = useFetchMovies(url);
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");

  useEffect(() => {
    const [, query, value] = path;
    if (query === "") {
      setState({ ...state, url: RANDOM });
    }
    if (query === "letter") {
      setState({ ...state, letter: value, url: getSearchWithLetter(value) });
    }
    if (query === "search") {
      setState({ ...state, url: getSearchData(value) });
    }
    if (query === "cocktail") {
      setState({ ...state, url: getSingleCocktail(value) });
    }
  }, [location.pathname]);

  const searchWithLetter = (letter) => (e) => {
    e.preventDefault();
    setState({ ...state, letter: letter, url: getSearchWithLetter(letter) });
    history.push(`/letter/${letter}`);
  };

  const goHome = () => {
    setState({ ...state, url: RANDOM });
  };

  const selectCocktail = (cocktail, id) => {
    history.push(`/cocktail/${id}`);
    setState({ ...state, url: getSingleCocktail(id) });
  };

  const isModalOpen = () => setState({ ...state, isOpen: !state.isOpen });

  const updateModal = (buskedItemCont) => {
    if (buskedItemCont !== 0) {
      setState({ ...state, isOpen: !state.isOpen });
    } else {
      alert("Спочатку оберіть коктейль");
    }
  };

  const updateSearch = (text) => (e) => {
    e.preventDefault();
    history.push(`/search/${text}`);
    setState({ ...state, url: getSearchData(text), inputValue: "" });
  };

  const onChangeInputText = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const addCocktailToButton = ( basket, id, drink) => {
    const count= ( basket[id] &&  basket[id].count) || 0;
    const newBasket= { [id]: { drink, count: count + 1 } };
    setState({ ...state,  basketDrinks: { ...state.basketDrinks, ...newBasket } });
  };

  const onRemoveItemClick = (cocktailId) => () => {
    const newBasket = { ...state.basketDrinks };
    if (newBasket[cocktailId].count === 1) {
      delete newBasket[cocktailId];
    } else {
      newBasket[cocktailId].count = newBasket[cocktailId].count - 1;
    }
    setState({ ...state, basketDrinks: newBasket });
  };

  const onItemSendClick = (list) => {
    if (list.length !== 0) {
      console.log("Ви замовили", state.basketDrinks);
    }
    setState({ ...state, basketDrinks: {}, isOpen: !isOpen });
  };

  return (
    <ContextApp.Provider value={
      {
        state,
        drinks,
        selectCocktail,
        addCocktailToButton,
        updateModal,
        updateSearch,
        onChangeInputText,
        goHome,
        searchWithLetter,
        isModalOpen,
        onRemoveItemClick,
        onItemSendClick,
        isLoading
      }}>

      <div className={isOpen ? "WrapperBlur" : "Wrapper"}>
        <Header/>
        {children}
        <Footer/>
        <Portal
          Component={Element}
        />
      </div>
    </ContextApp.Provider>
  );
};

export default Wrapper;
