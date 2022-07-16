import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/shop/shopPage'
import Header from './components/header/header'
import SignIn from './components/signIn/signIn'
import { auth } from './firebase/firebase.utils'
function App() {
  const [user, setUser] = useState({ currentUser: '' })
  // when componentDidMount trigger
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser({ currentUser: user })
      console.log(user)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header user={user} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/siginIn" component={SignIn}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
