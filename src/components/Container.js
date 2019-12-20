import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

const Container = props => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    let found = false;
    let updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        found = true;
        cartItem.quantity++;
        return cartItem;
      } else {
        return cartItem;
      }
    });

    if (!found) {
      updatedCart.push({
        id: item.id,
        name: item.productName,
        price: item.price,
        quantity: 1
      });
    }

    setCart(updatedCart);
  };

  const removeFromCart = item => {
    let updatedCart = cart.map((cartItem, index) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity >= 1) {
          cartItem.quantity--;
        }

        return cartItem;
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  };
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div style={{ paddingBottom: "120px" }}>
        <Products
          productData={props.productData}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Footer cart={cart} />
      </div>
    </div>
  );
};

export default Container;
