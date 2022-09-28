import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

function Categories() {
  // States
  const { getAllCategories, getFilteredProducts, categories } =
    useContext(productsContext);

  // Effects
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <form
      className="filter-form"
      onSubmit={(e) => {
        e.preventDefault();
        const keys = [];
        // HTML Collection => checkboxes
        const arr = e.target.children[1].children;
        // Get the checked inputs
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].children[0].checked) {
            keys.push(arr[i].children[0].value);
          }
        }
        getFilteredProducts(keys);
      }}
    >
      <h1>Categories</h1>
      <div className="options">
        {categories.map((ele) => {
          return (
            <p key={ele.id}>
              <input
                type="checkbox"
                id={ele.name}
                name="categories"
                value={ele.id}
              />
              <label htmlFor={ele.name}>{ele.name}</label>
            </p>
          );
        })}
      </div>
      <button className="cssbuttons-io">
        <span>Filter</span>
      </button>
    </form>
  );
}

export default Categories;
