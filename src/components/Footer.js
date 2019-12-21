import React, { useState, useEffect } from "react";
import "../css/headerAndFooter.css";
import Modal from "./Modal";
const Footer = props => {
  const [qty, setQty] = useState(null);
  const [price, setPrice] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (props.cart && props.cart.length >= 0) {
      let totalQty = 0;
      let totalPrice = 0;
      for (let product of props.cart) {
        // console.log("FFF", product);
        totalQty = Number(totalQty) + Number(product.quantity);
        totalPrice =
          totalPrice + Number(product.quantity) * Number(product.price);
      }
      setQty(totalQty);
      setPrice(totalPrice);
    }
  }, [props.cart]);

  return (
    <div className="footer">
      <div className="footerInnerDiv">
        <div className="left">
          <div className="h4">Qty : {qty}</div>
          <br></br>
          <div className="h4">Total : {price}</div>
        </div>
        <div className="right">
          <button
            type="submit"
            className="button"
            onClick={() => setOpenModal(true)}
            // disabled={!props.cart.length >= 1}
          >
            CHECKOUT
          </button>
        </div>
      </div>

      {openModal ? (
        <Modal
          cart={props.cart}
          price={price}
          qty={qty}
          setOpenModal={setOpenModal}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          setCart={props.setCart}
          setClearCartClicked={props.setClearCartClicked}
        />
      ) : null}
    </div>
  );
};

export default Footer;
