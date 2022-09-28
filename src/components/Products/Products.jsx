import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { productsContext } from "../../contexts/productsContext";
import "./productsStyling.css";
import { useSearchParams } from "react-router-dom";
import { GoSettings } from "react-icons/go";
function Products() {
  // States
  const {
    allProducts,
    filteredProducts,
    getAllProducts,
    filterShow,
    setFilterShow,
  } = useContext(productsContext);
  // Effects
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <section>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: " 10px",
          gap: "20px",
        }}
      >
        <input type="text" className="search-input" placeholder="Search" />
        <GoSettings
          className="filter-icon"
          onClick={() => setFilterShow(!filterShow)}
        />
      </div>
      <div className="products-container">
        {filteredProducts.length
          ? filteredProducts.map((ele) => <Card key={ele.id} product={ele} />)
          : allProducts.map((ele) => <Card key={ele.id} product={ele} />)}
      </div>
    </section>
  );
}

export default Products;
