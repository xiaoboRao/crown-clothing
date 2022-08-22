import React, { useEffect } from 'react'
import './App.css'
import CartCheckout from './pages/cartCheckout/checkout'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Header from './components/header/header'
import HomePage from './pages/homePage/homePage'
import { selectCurrentUser } from './redux/user/userSelect'
import { checkUserSession } from './redux/user/userAction'
import ShopPage from './pages/shop/shopPage'
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
import { Switch, Route, Redirect } from 'react-router-dom'
const App = ({ currentUser, onCheckUserSession }) => {
  // when componentDidMount trigger, and just trigger once
  useEffect(() => {
    onCheckUserSession()
  }, [])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/siginIn">{currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}</Route>
        <Route path="/checkout" component={CartCheckout}></Route>
      </Switch>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  onCheckUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
