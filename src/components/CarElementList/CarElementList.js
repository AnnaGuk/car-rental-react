import React from "react";

import Element from "../Element/Element";
import Elem1 from "../Cars/Fiat500.jpg";
import Elem2 from "../Cars/Ford_Focus.jpg";
import Elem3 from "../Cars/Kia_Picanto.jpg";
import Elem4 from "../Cars/Nissan_Micra.jpg";
import Elem5 from "../Cars/Toyota_Auris.jpg";
import Elem6 from "../Cars/Toyota_Aygo.jpg";

import "./CarElementList.css";

const cars = [
  {
    photo: Elem1,
    text: "Fiat 500"
  },
  { photo: Elem2, text: "Ford Focus" },
  { photo: Elem3, text: "Kia Picanto" },
  { photo: Elem4, text: "Nissan Micra" },
  { photo: Elem5, text: "Toyota Auris" },
  { photo: Elem6, text: "Toyota Aygo" }
];

const CarElementList = () => {
  return (
    <>
      <ul className="CarElementList">
        {cars.map(item => (
          <Element photo={item.photo} text={item.text} key={`pref-${item}`} />
        ))}
      </ul>
    </>
  );
};
export default CarElementList;
