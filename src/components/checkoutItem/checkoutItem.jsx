import React from 'react'
import './checkoutItem.scss'
const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  )
}

export default CheckoutItem
