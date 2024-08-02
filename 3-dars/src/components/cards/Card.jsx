import React from 'react'
import './card.css'
import like from '../../images/like.svg'
import star from '../../images/star.svg'
import bike from '../../images/bike.svg'
import time from '../../images/time.svg'


const Card = ({product, likeIcon, starIcon, bikeIcon, timeIcon}) => {
  return (
    <div className='product__card'>
      <img className='product__image' src={product.image} alt={product.name} />
      <button className="product__image__like">
        <img src={likeIcon} alt="Like" />
      </button>
      <div className="product__content">
        <div className="product__card__top">
          <h3 className='product__card__title'>{product.name}</h3>
          <div className="product__card__top__right">
            <img src={starIcon} alt="Star" />
            <p className='product__card__rate'>{product.rate}</p>
          </div>
        </div>
        <div className="product__card__middle">
          <div className="product__card__middle__left">
            <img src={bikeIcon} alt="Delivery" />
            <span className='product__card__service'>{product.service}</span>
          </div>
          <div className="border"></div>
          <div className="product__card__middle__right">
            <img src={timeIcon} alt="Time" />
            <p className='product__card__time'>{product.time}</p>
          </div>
        </div>
        <div className="card__link">
          <a className='product__card__link' href="#">Order Now</a>
        </div>
      </div>
    </div>
  )
};

export default Card