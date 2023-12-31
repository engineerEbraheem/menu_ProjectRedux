import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { menuStoreData } from "./redux/store/menuStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={menuStoreData}>
      <App />
    </Provider>
  </HashRouter>
);
