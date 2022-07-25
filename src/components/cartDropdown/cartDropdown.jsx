import React from 'react'
import CartItem from '../cartItem/cartItem'
import CustomButton from '../customButtom/customButtom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelector'
import './cartDropdown.scss'

const CartDropdown = ({ cartItems }) => {
  console.log('cartItems', cartItems)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  }
}

export default connect(mapStateToProps)(CartDropdown)
