import React from "react";
import { dispatchEvent } from "../utils/dispatchEvent";
import { ADD_TO_CART } from "../utils/events";

const MenuItem = ({ title, color }) => {
  const ItemStyle = {
    height: "200px",
    width: "200px",
    margin: "1rem",
    backgroundColor: color,
    color: "white",
  };

  const addItem = () => {
    dispatchEvent(ADD_TO_CART, 1)
  };

  return (
    <div style={ItemStyle} onClick={addItem}>
      {title}
    </div>
  );
};

export default MenuItem;
