import React, { useContext } from "react";
import Categories from "../components/Aside/Categories";
import Price from "../components/Aside/Price";
import Products from "../components/Products/Products";
import "../components/Aside/asideStyling.css";
import { productsContext } from "../contexts/productsContext";

function ProductsPage() {
  const { filterShow } = useContext(productsContext);
  return (
    <main>
      <aside className={`${filterShow ? "mobile" : ""}`}>
        <Categories />
        <Price />
      </aside>
      <Products />
    </main>
  );
}

export default ProductsPage;
