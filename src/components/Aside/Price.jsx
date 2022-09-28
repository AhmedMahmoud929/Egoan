import React, { useState, useContext } from "react";
import { productsContext } from "../../contexts/productsContext";

function Price() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const { filterByPrice } = useContext(productsContext);

  return (
    <form
      className="filter-form"
      onSubmit={(e) => {
        e.preventDefault();
        filterByPrice(min, max);
      }}
    >
      <h1>Price</h1>
      <div className="range">
        <input
          type="number"
          min="10"
          max="10000"
          placeholder="Min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          min="10"
          max="10000"
          placeholder="Max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button className="cssbuttons-io">
        <span>Set Price</span>
      </button>
    </form>
  );
}

export default Price;
