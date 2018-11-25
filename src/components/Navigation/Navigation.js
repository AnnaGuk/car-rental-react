import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <a className="nav_item" href="http://localhost:3000/">
        Home
      </a>
      <a className="nav_item" href="http://localhost:3000/cars">
        Car rental
      </a>
      <a className="nav_item" href="http://localhost:3000/bikes">
        Motorbikes
      </a>
    </nav>
  );
};

export default Navigation;
