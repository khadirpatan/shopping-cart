import React from "react";
import Product from "./Product";
const Products = props => {
  return (
    <>
      {props.productData &&
        props.productData.map((product, index) => (
          <Product
            key={index}
            product={product}
            index={index}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cart={props.cart}
          />
        ))}
    </>
  );
};

export default Products;
