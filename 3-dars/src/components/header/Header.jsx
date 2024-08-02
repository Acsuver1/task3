import React from 'react'
import './header.css'
import HeaderLogo from '../../assets/headLogo.png'
import head1 from '../../assets/head1.svg'
import vidio from '../../assets/vidio.svg'
import burgerLogo from '../../assets/burger.png'

const Header = () => {
  return (
    <div className='container'>
       <div className='header_wrapper'>
       <div className='header__content'>
       <div className='header__img'>
            <img src= {head1} alt="" />
          </div>
          <div className='header__text'> 
            <h1>Fastest</h1>
            <h2>Delivery <span>&</span> </h2>
            <h3>Esay <b>Pickup.</b></h3>
          </div>
          <div className='header__title'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Imperdiet tempus felis vitae sit est quisque.</p>
          </div>
          <div className='header__btn'>
            <button>Order Now</button>
            <div className='header__vidio'>
              <img className='vidio' src={vidio} alt="" />
             <p className='text'>Watch Video</p>
            </div>
          </div>
       </div>
         <div className='header__logo-wrapper'>
          <div className='header__logo'>
              <img src={HeaderLogo}  alt=""  />
            </div>
            <div className='burger'>
            <img  src={burgerLogo}  alt=""  />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Header