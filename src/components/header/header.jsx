import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import { signOutWithGoogle } from '../../firebase/firebase.utils'
const Header = ({ user})=> {
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
        {
          user.currentUser ? <div className="option" onClick={ signOutWithGoogle}>SIGN OUT</div> : <Link className="option" to="/siginIn">SIGN IN</Link>
        }
      </div>
    </div>
  )
}
export default Header