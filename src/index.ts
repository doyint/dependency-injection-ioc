import container from "./container";
export * as store from "./store/store";

// MainStore;
const store = container.get("store");
const content = store.content;
console.log("Container Size ", container.providers);
