import React, { useState, useEffect } from "react";

// import Menu from '../../microfrontend-menu-module/menu';
import {
  render,
  unmount,
  subscribe,
  unsubscribe,
  Events,
} from "../../microfrontend-menu-module/";

const Homepage = () => {
  const MENU_DIV_ID = "menus-container";
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    subscribe(Events.ADD_TO_CART, updateMenuCount);

    return () => {
      unsubscribe(Events.ADD_TO_CART, updateMenuCount);
    };
  });

  useEffect(() => {
    render(MENU_DIV_ID, {});
    return () => {
      unmount(MENU_DIV_ID);
    };
  }, []);

  const updateMenuCount = ({ detail }) => {
    setItemsCount(itemsCount + detail);
  };

  return (
    <React.Fragment>
      <div style={MenuCount} onClick={updateMenuCount}>
        Menu Count {itemsCount}
      </div>
      <div id={MENU_DIV_ID}></div>
    </React.Fragment>
  );
};

const MenuCount = {
  backgroundColor: "#e2e2e2",
  padding: "2rem",
  textAlign: "right",
};

export default Homepage;
