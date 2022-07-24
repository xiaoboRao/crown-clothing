import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartDropdownHidden } from '../../redux/cart/cartAction'
import './cartIcon.scss'
const CartIcon = ({ toggleCartDropdownHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden()),
  }
}

export default connect(null, mapDispatchToProps)(CartIcon)
