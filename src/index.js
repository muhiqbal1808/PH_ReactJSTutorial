import React from "react";
import ReactDOM from "react-dom/client";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

import "./index.css";

import Home from "./container/Home/Home";

// import rootReducer from "./redux/reducer/globalReducer";

import reportWebVitals from "./reportWebVitals";

// Store
// const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={storeRedux}>
      <Home />
    </Provider> */}
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
