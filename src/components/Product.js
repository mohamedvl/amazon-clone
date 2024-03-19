import React from "react";
import stare from "../imeges/star.png";
import {useAuth} from "../context/GlobalState"
import "./Product.css";

const Product = ({ id, price, image, title, rating }) => {
    const {dispatch,basket}=useAuth()
    console.log(basket)

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id,
                title,
                price,
                image,
                rating
            }
        })

    }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((e, i) => (
            <p>
              <img src={stare} alt="" />
            </p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;
