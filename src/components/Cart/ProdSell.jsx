import React, { useContext } from "react";
import { GoX } from "react-icons/go";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { productsContext } from "../../contexts/productsContext";
import "./cartStyling.css";

function ProdSell({ product, amount }) {
  const { clearFromCart, editProductAmount } = useContext(productsContext);
  return (
    <div className="prod-sell">
      <div className="left">
        <div className="image">
          <img src={product.images[0]} alt="Product" />
        </div>
        <div className="info">
          <h1>{product.title}</h1>
          <p>2022/12/25</p>
        </div>
      </div>
      <div className="right">
        <div className="amount">
          <button>
            <HiMinusSm onClick={() => editProductAmount(product, -1)} />
          </button>
          <div>{amount}</div>
          <button>
            <HiPlusSm onClick={() => editProductAmount(product, 1)} />
          </button>
        </div>
        <span>
          <div className="total-price">{product.price * amount}$</div>
          <GoX className="delete-icon" onClick={() => clearFromCart(product)} />
        </span>
      </div>
    </div>
  );
}

export default ProdSell;
