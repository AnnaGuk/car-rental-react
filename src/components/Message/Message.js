import React from "react";
import "./Message.css";

const Message = props => {
  return (
    <div className="msg-container">
      <p className="msg">
        Please see the list of available cars, maybe you can find {props.name}{" "}
        there?
      </p>
      <a href="http://localhost:3000/cars">Our cars</a>
      <p className="msg">Or would you prefer a motorbike instead?</p>
      <a href="http://localhost:3000/bikes">Our bikes</a>
    </div>
  );
};

export default Message;
