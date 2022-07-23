import React, { useState, useEffect } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/shop/shopPage'
import Header from './components/header/header'
import SignInAndSignUp from './pages/signInAndSignUp/signInAndSignUp'
import { auth, onGoogleAuthStateChanged, userRefOnSnapshot } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setCurrentUser from './redux/user/userAction'
const App = ({ currentUser, setCurrentUser }) => {
  // const [user, setUser] = useState({ currentUser: '' })
  // when componentDidMount trigger, and just trigger once
  useEffect(() => {
    onGoogleAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        userRefOnSnapshot(userAuth, {}, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }, [])
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/siginIn">{currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}</Route>
      </Switch>
    </div>
  )
}
const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
