import React from 'react';

import MenuItem from "./menuItem";

const Menu = ({ ItemsList }) => {
    const ITEMS = [
      { title: "Burger", color: "black" },
      { title: "Brisket", color: "blue" },
      { title: "Steak", color: "black" },
      { title: "Sandwidch", color: "blue" },
      { title: "Wraps", color: "black" },
      { title: "Chicken Salad", color: "blue" },
      { title: "Garden Salad", color: "black" },
    ];
    return (
      <div id="menu-list" style={MENU_LIST}>
        {ITEMS.map((item) => (
          <MenuItem
            key={item.title}
            title={item.title}
            color={item.color}
          />
        ))}
      </div>
    );
  };
  
  const MENU_LIST = {
    display: "flex",
    flexWrap: "wrap",
  };
  
  export default Menu;