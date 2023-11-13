import { setUpStore } from "./app/store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import "./Main.css";

const store = setUpStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
