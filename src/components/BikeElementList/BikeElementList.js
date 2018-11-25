import React from "react";

import Element from "../Element/Element";
import Element1 from "../Bikes/BMW_C_Evolution.png";
import Element2 from "../Bikes/BMW_G310_GS.png";
import Element3 from "../Bikes/BMW_R_Nine_T.png";
import Element4 from "../Bikes/BMW_R1200_GS.jpg";
import Element5 from "../Bikes/BMW_R1200_RT.png";

import "./BikeElementList.css";

const bikes = [
  {
    photo: Element1,
    text: "BMW C Evolution"
  },
  { photo: Element2, text: "BMW G310 GS" },
  { photo: Element3, text: "BMW R Nine T" },
  { photo: Element4, text: "BMW R1200 GS" },
  { photo: Element5, text: "BMW R1200 RT" }
];

const BikeElementList = () => {
  return (
    <>
      <ul className="BikeElementList">
        {bikes.map(item => (
          <Element photo={item.photo} text={item.text} key={`pref-${item}`} />
        ))}
      </ul>
    </>
  );
};
export default BikeElementList;
