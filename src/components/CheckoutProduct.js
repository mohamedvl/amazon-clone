import React from 'react'
import stare from "../imeges/star.png"
import { useAuth } from '../context/GlobalState'
import "./CheckoutProduct.css"


const CheckoutProduct = ({item}) => {
  const {dispatch}=useAuth()

  const removFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:item.id
    })
  }
  return (
    <div className='checkoutProduct'>
    
    <img className='checkoutProduct-image' alt=' ' src={item.image}/>
    <div className='checkoutProduct-info'>
    <p className='checkoutProduct-title'>{item.title}</p>
    <p className='checkoutProduct-price'>
    <small>$</small>
    <strong>{item.price}</strong>
    </p>
    <div className='checkoutProduct-rating'>
    {Array(item.rating).fill().map((e,i)=>(
        <p><img alt='' src={stare}/></p>
    ))}
    </div>
    <button onClick={removFromBasket}>Remove from Basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct