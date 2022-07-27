import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cartSelector'
import CheckoutItem from '../../components/checkoutItem/checkoutItem'
import './checkout.scss'

const checkoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page ">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block" >
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem)=> {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        })
      }
      <div className="total">{totalPrice}</div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
})
export default connect(mapStateToProps)(checkoutPage)
