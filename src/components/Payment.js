import React from "react";
import { useAuth } from "../context/GlobalState";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const { basket, user } = useAuth();

  const totalPrice = basket.reduce((amount, item) => {
    return (amount += item.price);
  }, 0);
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket.length} itmes</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user && user.email}</p>
            <p>Alexandeia, Egypt</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-details">
            <form>
              <div className="payment-priceContainer">
                <h3>Order Total : {totalPrice}</h3>
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
