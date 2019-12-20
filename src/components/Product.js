import React, { useState } from "react";
import "../css/products.css";

const Product = props => {
  const { addToCart, removeFromCart, product, index } = props;
  const [count, setCount] = useState(0);
  const add = product => {
    setCount(count + 1);
    addToCart(product);
  };

  const remove = product => {
    if (count >= 1) {
      setCount(count - 1);
    }
    removeFromCart(product);
  };
  return (
    <div className="productsContainer" key={index}>
      <div className="productsLeft">
        <img
          src={require(`../images/${product.imgUrl}`)}
          className="productImage"
          alt={product.imgUrl}
        />
        <br></br>
        <br></br>

        <div>{product.OfferText}</div>
      </div>

      <div className="productsRight">
        <div className="productTitle">
          <strong>{product.brandName}</strong>
        </div>
        <div className="productDetails">
          {product.productName}
          <br></br>
          {product.quantity}
          <br></br>
          MRP {product.mrp}
          <br></br>
          <strong>RS {product.price}</strong>
        </div>

        <div className="addingToCart">
          <div className="addToCartDiv">
            <button
              className="addTocartBtn"
              onClick={() => {
                add(product);
              }}
            >
              ADD TO CART
            </button>
          </div>
          <div className="incrimentDecerementDiv">
            <span
              className="roundBorder"
              onClick={() => {
                remove(product);
              }}
            >
              {" "}
              -{" "}
            </span>
            &nbsp;&nbsp;
            {count}
            &nbsp;&nbsp;
            <span
              className="roundBorder2"
              onClick={() => {
                add(product);
              }}
            >
              +{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
