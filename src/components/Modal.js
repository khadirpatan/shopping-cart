import React, { useState } from "react";
import "../css/Modal.css";
const Modal = props => {
  const [buyOptionClicked, setBuyPotionClicked] = useState(false);

  const handleBuyNow = () => {
    setBuyPotionClicked(true);
    props.setCart([]);
    props.setClearCartClicked(true);
    setTimeout(() => {
      props.setClearCartClicked(false);
    }, 2000);
  };

  const getOrderSuccess = () => {
    return (
      <div className="modalContainer">
        <div className="modalWindow">
          <div className="modlaTilte">
            &nbsp;&nbsp;&nbsp;Order is successfull
            <span
              className="closeButton"
              onClick={() => props.setOpenModal(false)}
            >
              {" "}
              X{" "}
            </span>
          </div>
          <div className="modalContent">
            <div className="noItemsMsg">
              Your Order is successfull .<br></br> Will be delivered by{" "}
              {new Date().toLocaleDateString()}
            </div>

            <div className="modalFooter">
              <button
                className="closeBtn"
                onClick={() => props.setOpenModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getOrderDetails = () => {
    return (
      <div className="modalContainer">
        <div className="modalWindow">
          <div className="modlaTilte">
            <>&nbsp;&nbsp;&nbsp;Check out Confirmation</>

            <span
              className="closeButton"
              onClick={() => props.setOpenModal(false)}
            >
              {" "}
              X{" "}
            </span>
          </div>
          {props.price && props.price !== 0 ? (
            <div className="modalContent">
              {buyOptionClicked ? (
                <>
                  <div className="noItemsMsg">
                    Your Order is successfull .<br></br> Will be delivered by{" "}
                    {new Date().toLocaleDateString()}
                  </div>
                </>
              ) : (
                props.cart.map((item, index) => (
                  <div className="itemDescription" key={index}>
                    {item.name}
                    &nbsp;&nbsp;
                    <br></br>
                    &nbsp;{" "}
                    <span
                      style={{ display: "inline-block", margin: "8px 0px" }}
                    >
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
                    <hr
                      style={{ width: "98%", backgroundColor: "lightgrey" }}
                    />
                  </div>
                ))
              )}

              <div className="totalAmount">
                Total Price : &#8377; <strong>{props.price}</strong>
              </div>

              <div className="modalFooter">
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
                <button
                  className="closeBtn"
                  onClick={() => props.setOpenModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <div className="modalContent">
              <div className="noItemsMsg">No items added to cart.</div>
              <div className="modalFooter">
                <button
                  className="closeBtn"
                  onClick={() => props.setOpenModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  return <>{buyOptionClicked ? getOrderSuccess() : getOrderDetails()}</>;
};

export default Modal;
