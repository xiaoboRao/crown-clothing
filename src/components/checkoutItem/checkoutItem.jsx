import React from 'react'
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cartAction'
import { connect } from 'react-redux'
import './checkoutItem.scss'

const CheckoutItem = ({ addItem, cartItem, clearItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() =>{addItem(cartItem)} }>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => {
          clearItem(cartItem)
        }}
      >
        &#10005;
      </span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (cartItem) => dispatch(addItem(cartItem)),
    clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  }
}
export default connect(null, mapDispatchToProps)(CheckoutItem)
