import React from 'react'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
export default function Header() {
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
      </div>
    </div>
  )
}
