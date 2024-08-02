import React from 'react'
import './nav.css'
import logo from "../../assets/logo.svg"
import icons1 from "../../assets/icons1.svg"
import icons2 from "../../assets/icons2.svg"

const Nav = () => {
  return (

    <div className='container'>
     <div className='nav_wrapper'>
        <div className='logo'>
        <img src= {logo} alt="" />
        </div>
            <div className='links'> 
                <a className='active' href="">Home</a>
                <a className='active'  href="">Service</a>
                <a className='active' href="">Menu</a>
                <a className='active' href="">Help</a>
            </div>
            <div className='icons'>
                <img src={icons1} alt="" />
                <img src={icons2} alt="" />
            </div>
            <div className='button'>
                <button>Login</button>
            </div>
     </div>
    </div>

  )
}

export default Nav