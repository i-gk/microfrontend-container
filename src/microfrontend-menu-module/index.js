import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";

import { subscribeEvent, unsubscribeEvent } from './utils/dispatchEvent';
import * as Events from './utils/events';

export const render = (containerId, menuData) => {
  const containerElement = document.getElementById(containerId);
  if (!containerElement) return;

  ReactDOM.render(<Menu {...menuData} />, containerElement);
};

export const unmount = (containerId) => {
  const containerElement = document.getElementById(containerId);
  if (!containerElement) return;

  ReactDOM.unmountComponentAtNode(containerElement);
};

export const subscribe = (eventName, handler) => {
    console.log('Subscribing to ', eventName);
    subscribeEvent(eventName, handler);
}

export const unsubscribe = (eventName, handler) => {
    console.log('unsubscribing', eventName);
    unsubscribeEvent(eventName, handler);
}

export { Events };