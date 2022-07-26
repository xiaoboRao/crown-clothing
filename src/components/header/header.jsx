import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOutWithGoogle } from '../../firebase/firebase.utils'
import CartIcon from '../cartIcon/cartIcon'
import CartDropdown from '../cartDropdown/cartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cartSelector'
import { selectCurrentUser } from '../../redux/user/userSelect'
const Header = ({ currentUser, cartDropdownHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONCAt
        </Link>
        {currentUser ? (
          <div className="option sign-out" onClick={signOutWithGoogle}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/siginIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {cartDropdownHidden ? null : <CartDropdown />}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden,
})
export default connect(mapStateToProps)(Header)
