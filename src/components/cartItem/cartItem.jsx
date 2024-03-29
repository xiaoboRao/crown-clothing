import React from 'react'
import "./cartItem.scss"
const CartItem = ({item: { imageUrl, name,  price, quantity}}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="img" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className='price'>
          {quantity} x {price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
