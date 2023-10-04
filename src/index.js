import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import userReducer from "../src/helpers/UserSlice";
import "./index.css";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const root = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
