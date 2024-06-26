import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.jsx";
import { Provider } from "react-redux";

// 2. Adım: store main.jsx'e import edilir ve Provider redux'tan import edildikten sonra App'e kapsayıcı olarak atanır. store içine verilir.
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
