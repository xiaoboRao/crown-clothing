import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartDropdownHidden } from '../../redux/cart/cartAction'
import { selectCartItemsCount } from '../../redux/cart/cartSelector'
import { createStructuredSelector } from 'reselect'

import './cartIcon.scss'
const CartIcon = ({ cartItemsCount, toggleCartDropdownHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartItemsCount}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden()),
  }
}
const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
