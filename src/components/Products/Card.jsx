import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

function Card({ product }) {
  const { addToCart } = useContext(productsContext);
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.images[0]} alt="product img" />
        <div className="label">Category : {product.category.name}</div>
      </div>
      <div className="card-body">
        <NavLink to={`/products/${product.id}`} className="title">
          {product.title}
        </NavLink>
        <div className="bottom">
          <div className="price">
            <div>Price</div>
            <div>$ {product.price}</div>
          </div>
          <button onClick={() => addToCart(product, 1)}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
