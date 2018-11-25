import React from "react";

import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="container">
      <div className="box">
        <h1 className="title">Search for a car:</h1>
        <input
          className="search"
          type="text"
          placeholder="Which car would you like to drive?"
        />
        <button className="btn">Go!</button>
      </div>
    </div>
  );
};

export default Searchbar;
