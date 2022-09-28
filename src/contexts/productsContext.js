import React, { createContext, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

function ProductsState(props) {
  // States
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filterShow, setFilterShow] = useState(false);

  // Functoins
  const getAllProducts = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setAllProducts(res.data));
  };

  const getProductById = (id) => {
    return axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        return res.data;
      });
  };

  const addToCart = (product, amount) => {
    const index = cartProducts.findIndex((e) => e.id === product.id);
    // Exist
    if (index >= 0) {
      cartProducts[index].amount += amount;
    }
    // Not Exist
    else {
      const newSell = {
        id: product.id,
        product: product,
        amount: amount,
      };
      setCartProducts([...cartProducts, newSell]);
    }
  };

  const calcCartTotal = () => {
    let total = 0;
    cartProducts.map((ele) => {
      total += ele.product.price * ele.amount;
    });
    setCartTotal(total);
  };

  const clearFromCart = (product) => {
    const index = cartProducts.findIndex((e) => e.id === product.id);
    cartProducts.splice(index, 1);
    setCartProducts([...cartProducts]);
    calcCartTotal();
  };

  const clearCart = () => {
    setCartProducts([]);
    setCartTotal(0);
  };

  const editProductAmount = (product, payload) => {
    const index = cartProducts.findIndex((e) => e.id === product.id);
    // Skip (only one condition)
    if (payload === -1 && cartProducts[index].amount === 1);
    else {
      cartProducts[index].amount += payload;
      calcCartTotal();
    }
  };

  const getAllCategories = () => {
    axios.get(" https://api.escuelajs.co/api/v1/categories").then((res) => {
      setCategories(res.data);
    });
  };

  const getFilteredProducts = (filter = []) => {
    if (filter.length) {
      const filtered = [];
      filter.map((e) => {
        axios
          .get(`https://api.escuelajs.co/api/v1/categories/${e}/products`)
          .then((res) => {
            filtered.push(res.data);
          })
          .then(() => {
            setFilteredProducts(filtered.flat());
          });
      });
    } else setFilteredProducts([]);
  };

  const filterByPrice = (min, max) => {
    if (filteredProducts.length) {
      const filtered = filteredProducts.filter((prod) => {
        return prod.price >= min && prod.price <= max;
      });
      setFilteredProducts(filtered);
    } else {
      const filtered = allProducts.filter((prod) => {
        return prod.price >= min && prod.price <= max;
      });
      setAllProducts(filtered);
    }
  };

  return (
    <productsContext.Provider
      value={{
        allProducts,
        filteredProducts,
        cartProducts,
        cartTotal,
        categories,
        filterShow,
        setFilterShow,
        getAllCategories,
        getAllProducts,
        getProductById,
        addToCart,
        clearCart,
        calcCartTotal,
        clearFromCart,
        editProductAmount,
        getFilteredProducts,
        filterByPrice,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
}
export default ProductsState;
