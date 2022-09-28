import React, { useContext } from "react";
import "./navStyling.css";
import logoImg from "../../assets/imgs/logo.png";
import shoppingIcon from "../../assets/icons/shopping-bag.png";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

function Nav() {
  const { cartProducts } = useContext(productsContext);
  return (
    <nav>
      <NavLink to="/">
        <img src={logoImg} alt="Egoan logo" className="left" />
      </NavLink>
      {/* <ul className="center">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Offers</a>
        <a href="/" className="active">
          Products
        </a>
        <a href="/">Contact</a>
      </ul> */}
      <div className="right">
        <NavLink to="/cart" className="cart">
          <img src={shoppingIcon} alt="shopping-bag" className="shopping-bag" />
          {cartProducts.length ? (
            <div className="cart-count">{cartProducts.length}</div>
          ) : (
            ""
          )}
        </NavLink>
        <NavLink to="/cart" className="user">
          <FaUser className="user-icon" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
