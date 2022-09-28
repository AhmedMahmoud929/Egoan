import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import prodImg from "../../assets/imgs/lenouvo.png";
import "./productInfo.css";
import { useContext } from "react";

const ProdInfo = () => {
  // States
  const [activeProduct, setActiveProduct] = useState(null);
  const [amount, setAmount] = useState(1);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(0);
  const id = useParams().id;
  const { getProductById, addToCart } = useContext(productsContext);

  // Functions
  const slideTo = (dir = "") => {
    if (dir === "next") {
      if (activeImage < 2) {
        setActiveImage((prev) => prev + 1);
      }
    } else if (dir === "prev") {
      if (activeImage > 0) {
        setActiveImage((prev) => prev - 1);
      }
    }
  };

  // Effects
  useEffect(() => {
    getProductById(id).then((prod) => {
      setActiveProduct(prod);
      setImages(prod.images);
    });
  }, []);
  return (
    activeProduct && (
      <main className="prod-info">
        <div className="left">
          <img className="active-img" src={images[activeImage]} alt="" />
          <div className="slides">
            <span className="after" onClick={() => slideTo("next")}>
              {">"}
            </span>
            <div>
              <img src={images[0]} alt="" />
            </div>
            <div>
              <img src={images[1]} alt="" />
            </div>
            <div>
              <img src={images[2]} alt="" />
            </div>
            <span className="before" onClick={() => slideTo("prev")}>
              {"<"}
            </span>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="category">
              Category : <span>{activeProduct.category.name}</span>
            </div>
            <h1>{activeProduct.title}</h1>
            <p className="disc">{activeProduct.description}</p>
            <h2>$ {activeProduct.price}</h2>
            <h3>ID : {id}</h3>
          </div>
          <div className="middle">
            <div className="info">
              <div>
                <h3>Quantity</h3>
                <div className="btn-group">
                  <button
                    className="btn"
                    id="plusBtn"
                    onClick={() => setAmount((prev) => prev + 1)}
                  >
                    +
                  </button>
                  <span className="btn" id="amount">
                    {amount}
                  </span>
                  <button
                    className="btn"
                    id="minusBtn"
                    onClick={() => {
                      amount > 1 && setAmount((prev) => prev - 1);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <h1>
                Total : <span>{activeProduct.price * amount} $</span>
              </h1>
            </div>
            <div className="add-to-cart">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(activeProduct, amount)}
              >
                ADD TO CARD
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  );
};

export default ProdInfo;
