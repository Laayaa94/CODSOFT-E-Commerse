import React, { useState } from 'react'
import './NavBar.css'
import logo from"../Assets/laaya-logo.png"
import cart from '../Assets/cart_icon.png'

const NavBar = () => {
    const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="navLogo">
            <img src={logo} alt="" />
        </div>
        <ul className="navMenu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
            <div className="nav-cart-count">
                0
            </div>
        </div>
    </div>
  )
}

export default NavBar
