import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../imeges/Amazon-Logo.png"
import "./Login.css"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import { useAuth } from '../context/GlobalState'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const {user} =useAuth()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const register=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((auth)=>navigate("/"))
        .catch((error)=>alert(error.message))
        
    }

    const signin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((auth)=>{
            if(auth){
                navigate("/")
            }
        })
        .catch((error)=>{
            alert(error.message)
        })
        
    }




  return (
    <div className='login'>
    
    <Link to={"/"}>
    <img src={logo} alt='' className='header-logo'/>
    </Link>
    <div className='login-container'>
    <h1>Sign In</h1>
    <form>
    <h5>Email</h5>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    
    <h5>Password</h5>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} onClick={signin}/>
    <button className='login-signInBtn' type='submit'>
    Sign in
    </button>
    <p>
    By continuing, you agree to Amazon Fake Clone condition of Use
    and Privacy Notice.
    </p>
    <button className='login-registerBtn' onClick={register}>Create your Amazon Account</button>
    </form>
    </div>
    </div>
  )
}

export default Login