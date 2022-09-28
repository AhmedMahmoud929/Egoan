import React, { useEffect, useState, useContext } from "react";
import "../components/Cart/cartStyling.css";
import ProdSell from "../components/Cart/ProdSell";
import { productsContext } from "../contexts/productsContext";

function CartPage() {
  // States
  const { cartProducts, clearCart, calcCartTotal, cartTotal } =
    useContext(productsContext);

  // Effects
  useEffect(() => {
    calcCartTotal();
  }, []);

  return (
    cartProducts && (
      <section id="cart">
        <div className="top">
          <h1>Total : {cartTotal}$</h1>
          <button onClick={clearCart}>Clear ({cartProducts.length})</button>
        </div>
        <section>
          {cartProducts.map((ele) => {
            return (
              <ProdSell
                key={ele.id}
                product={ele.product}
                amount={ele.amount}
              />
            );
          })}
        </section>
      </section>
    )
  );
}

export default CartPage;
