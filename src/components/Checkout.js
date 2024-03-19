import React from "react";
import checkoutimg from "../imeges/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./chekout.css";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-lift">
        <img alt="" src={checkoutimg} className="checkout-ad" />

        <h3>Hello,{user && user.email}</h3>
        <h2 className="checkout-title">Yout Shopping Basket</h2>
        {basket.length > 0 ? (
          basket.map((item) => <CheckoutProduct item={item} key={item.id} />)
        ) : (
          <h3>You have no items in your basket.To buy one or more items,click "Add to basket".</h3>
        )}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
