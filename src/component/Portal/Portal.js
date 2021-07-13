import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ContextApp } from "../../App";

const Portal = ({ Component }) => {
  const { state, isModalOpen } = useContext(ContextApp);
  return state.isOpen &&
    ReactDOM.createPortal(
      <div className="PopUp">
        <div className="closeButton">
          <span onClick={isModalOpen}>x</span></div>
        <Component/>
      </div>, document.getElementById("modal")
    );
};

export default Portal;
