import React, { useContext } from "react";
import { ContextApp } from "../../App";
import "./Footer.css";

const ABC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Footer = () => {
  const { searchWithLetter } = useContext(ContextApp);
  return (
    <footer>
      <ul className="footer">
        {
          ABC.map(letter => (<li
            className="footerLi"
            onClick={
              searchWithLetter(letter)
            }
            key={letter}>{letter}</li>))
        }
      </ul>
    </footer>
  );
};

export default Footer;
