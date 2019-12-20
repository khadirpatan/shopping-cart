import React from "react";
import "../css/Modal.css";
const Modal = props => {
  return (
    <div className="modalContainer">
      <div className="modalWindow">
        <div className="modlaTilte">
          &nbsp;&nbsp;&nbsp;Check out Confirmation
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
            {props.cart.map((cart, index) => (
              <div className="itemDescription" key={index}>
                {cart.name} -
                <span style={{ color: "grey" }}>
                  &nbsp;{cart.quantity} no's - &#8377;{" "}
                  {cart.quantity * cart.price}
                </span>
              </div>
            ))}
            <div className="totalAmount">
              Total Price : &#8377; <strong>{props.price}</strong>
            </div>
          </div>
        ) : (
          <div className="noItemsMsg">No items added to cart.</div>
        )}

        <div className="modalFooter">
          <button
            className="successBtn"
            onClick={() => props.setOpenModal(false)}
          >
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
    </div>
  );
};

export default Modal;
