import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { CounterA } from "./features/counter/Counter";
import { Calculator } from "./features/counter/Calculator";

import { AddToCartFeature } from "./features/AddToCart/AddToCartFeature";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AddToCartFeature />
  </Provider>
);
