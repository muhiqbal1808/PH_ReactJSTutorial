import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";

import Home from "./container/Home/Home";

import reportWebVitals from "./reportWebVitals";

const initialState = {
  totalOrder: 5,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const storeRedux = createStore(rootReducer);

// Dispatching Actions

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
