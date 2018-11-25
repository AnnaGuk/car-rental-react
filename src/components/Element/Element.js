import React from "react";

import "./Element.css";

const Element = props => {
  return (
    <ul className="element">
      <img src={props.photo} alt="not available" thumbnail responsive />
      <p className="text">{props.text}</p>
    </ul>
  );
};

export default Element;
