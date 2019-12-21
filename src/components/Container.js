import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

const Container = props => {
  const [cart, setCart] = useState([]);
  const [clearCartClicked, setClearCartClicked] = useState(false);

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
    let filteredCart = updatedCart.filter(function(item) {
      return item.quantity > 0;
    });
    setCart([...filteredCart]);
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
          clearCartClicked={clearCartClicked}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Footer
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          setCart={setCart}
          setClearCartClicked={setClearCartClicked}
        />
      </div>
    </div>
  );
};

export default Container;
