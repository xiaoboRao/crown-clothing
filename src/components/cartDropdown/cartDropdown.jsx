import React from 'react'
import CartItem from '../cartItem/cartItem'
import CustomButton from '../customButtom/customButtom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { withRouter } from 'react-router'
import './cartDropdown.scss'
import { toggleCartDropdownHidden } from '../../redux/cart/cartAction'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">YOUR CART IS EMPTY </span>
        )}
      </div>
      <CustomButton onClick={() =>{ dispatch(toggleCartDropdownHidden());  history.push('/checkout')}}> GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
