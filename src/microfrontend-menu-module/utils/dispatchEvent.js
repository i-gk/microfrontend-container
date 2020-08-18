export function subscribeEvent(eventName, eventHandler) {
    window.addEventListener(eventName, eventHandler);
}

export function unsubscribeEvent(eventName, eventHandler) {
    window.removeEventListener(eventName, eventHandler);
}

export const dispatchEvent = (event, data) => {
    window.dispatchEvent(new CustomEvent(event, {detail: data}));
}