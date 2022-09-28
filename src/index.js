import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// Styling
import "./index.css";
// Context
import ProductsState from "./contexts/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsState>
  </React.StrictMode>
);
