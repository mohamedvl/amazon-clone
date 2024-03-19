import React, { Fragment } from "react";
import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";

const Subtotal = () => {
  const navigate = useNavigate();
  const { basket } = useAuth();
  const totalPrice = basket.reduce((amount, item) => {
    return (amount += item.price);
  }, 0);
  return (
    <div className="subtotal">
      <Fragment>
        <p>
          Subtotal ({basket.length} Items):<strong>{}</strong>
        </p>
        ${totalPrice}
        <small>
          <input type="checkbox" /> This order contains a gift
        </small>
        <button onClick={() => navigate("/payment")}>
          Proceed to Checkout
        </button>
      </Fragment>
    </div>
  );
};


export default Subtotal;

