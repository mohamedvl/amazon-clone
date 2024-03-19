import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../imeges/Amazon-Logo-e1550238111866.png"
import searchIcon from "../imeges/icons/search-interface-symbol.png"
import shopingCart from "../imeges/icons/shopping-cart.png"
import { useAuth } from '../context/GlobalState'
import { auth } from '../firebase'
import "./Header.css"

const Header = () => {
  const {user,basket}=useAuth()

  const handleAuth=()=>{
    auth.signOut()

  }



  return (
    <div className='header'>
    <Link to={"/"}>
    <img src={logo} alt='' className='header-logo'/>
    </Link>
    <div className='header-search'>
    <input className='header-searchInput'/>
    <img src={searchIcon} alt='' className='header-searchIcon'/>
    </div>
    <div className='header-nav'>
    <Link to={!user&&"/login"}>
    <div className='header-option' onClick={handleAuth}>
    <div className='header-optionLineOne'>Hello {user?user.email:"Guest"} </div>
    <div className='header-optionLineTwo'>{user?"Sign Out":"Sign In"}</div>
    </div>
    </Link>
    <Link to={"/order"}>
    <div className='header-option'>
    <div className='header-option-linOne'>Returns</div>
    <div className='header-option-linTwo'>& Orders</div>
    </div>
    </Link>
    <div className='header-option'>
    <div className='header-option-linOne'>Your</div>
    <div className='header-option-linTwo'>Prime</div>
    </div>
    
    <Link to={"/checkout"}>
    <div className='header-optionBasket'>
    <img src={shopingCart} alt=''/>
    <span className='header-option-linTwo header-basketCount'>{basket.length}</span>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default Header