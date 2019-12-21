import React, { useState } from "react";
import "../css/Modal.css";
const Modal = props => {
  const [buyOptionClicked, setBuyPotionClicked] = useState(false);
  const [showOrderSum, setShowOrderSum] = useState(false);

  const handleBuyNow = () => {
    setBuyPotionClicked(true);
  };
  const handleClose = () => {
    if (buyOptionClicked) {
      props.setCart([]);
      props.setClearCartClicked(true);
      setTimeout(() => {
        props.setClearCartClicked(false);
      }, 2000);
    }
    props.setOpenModal(false);
  };
  const getModalTitle = buyOptionClicked => {
    return (
      <>
        {!buyOptionClicked ? (
          <>Check out Confirmation</>
        ) : (
          <>Order is successfull</>
        )}
      </>
    );
  };

  const handleOrderSummary = () => {
    if (showOrderSum) {
      setShowOrderSum(false);
    } else {
      setShowOrderSum(true);
    }
  };

  const getOrderSuccesBody = cart => {
    return (
      <div className="noItemsMsg">
        Your Order is successfull .<br></br> Will be delivered by{" "}
        {new Date().toLocaleDateString()}
        <br></br>
        <br></br>
        <span
          style={{ color: "#337ab7", cursor: "pointer" }}
          onClick={() => {
            handleOrderSummary();
          }}
        >
          order summary{" "}
          {showOrderSum ? (
            <i className="material-icons icon">keyboard_arrow_up</i>
          ) : (
            <i className="material-icons icon">keyboard_arrow_down</i>
          )}
        </span>
        <br></br>
        <br></br>
        {showOrderSum ? (
          <div className="orderSum">
            {props.cart.map((cartItem, index) => (
              <div key={index} className="orderSumItem">
                {cartItem.name} - {cartItem.quantity} x &#8377; {cartItem.price}
                = &#8377; {cartItem.quantity * cartItem.price}
              </div>
            ))}
            <div className="totalAmount">
              Grand Total Price : &#8377; <strong>{props.price}</strong>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const getNoItemsBody = () => {
    return <div className="noItemsMsg">No items added to cart.</div>;
  };

  const getCartCheckOutBody = () => {
    return (
      <>
        {props.cart.map((item, index) => (
          <div className="itemDescription" key={index}>
            {item.name}
            &nbsp;&nbsp;
            <br></br>
            &nbsp;{" "}
            <span style={{ display: "inline-block", margin: "8px 0px" }}>
              <i
                className="material-icons minus"
                onClick={() => {
                  props.removeFromCart(item);
                }}
              >
                {" "}
                remove
              </i>
              &nbsp;&nbsp;
              {item.quantity}
              &nbsp;&nbsp;
              <i
                className="material-icons plus"
                onClick={() => {
                  props.addToCart(item);
                }}
              >
                {" "}
                add
              </i>
              &nbsp;&nbsp; x &#8377; {item.price} = &#8377;{" "}
              {item.quantity * item.price}
            </span>
            &nbsp;&nbsp;
            <hr style={{ width: "98%", backgroundColor: "lightgrey" }} />
          </div>
        ))}

        <div className="totalAmount">
          Total Price : &#8377; <strong>{props.price}</strong>
        </div>
      </>
    );
  };
  const getModalBody = buyOptionClicked => {
    if (buyOptionClicked) {
      return getOrderSuccesBody(props.cart);
    } else if (props.price === 0) {
      return getNoItemsBody();
    } else {
      return getCartCheckOutBody();
    }
  };
  const getModalFooter = price => {
    return (
      <>
        {price !== 0 && !buyOptionClicked ? (
          <>
            <button
              className="clearBtn"
              onClick={() => {
                props.setCart([]);
                props.setOpenModal(false);
                props.setClearCartClicked(true);
                setTimeout(() => {
                  props.setClearCartClicked(false);
                }, 1000);
              }}
            >
              Clear Cart
            </button>{" "}
            &nbsp;&nbsp;
            <button className="successBtn" onClick={() => handleBuyNow()}>
              Buy Now
            </button>{" "}
            &nbsp;&nbsp;
          </>
        ) : (
          ""
        )}
      </>
    );
  };
  return (
    <div className="modalContainer">
      <div className="modalWindow">
        <div className="modlaTilte">
          &nbsp;&nbsp;&nbsp; {getModalTitle(buyOptionClicked)}
          <span
            className="closeButton"
            onClick={() => props.setOpenModal(false)}
          >
            {" "}
            X{" "}
          </span>
        </div>
        <div className="modalContent">
          {getModalBody(buyOptionClicked)}
          <div className="modalFooter">
            {getModalFooter(props.price)}

            <button className="closeBtn" onClick={() => handleClose()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
