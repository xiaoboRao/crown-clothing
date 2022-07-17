import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/shop/shopPage'
import Header from './components/header/header'
import SignIn from './components/signIn/signIn'
import { auth, onGoogleAuthStateChanged, userRefOnSnapshot } from './firebase/firebase.utils'
function App() {
  const [user, setUser] = useState({ currentUser: '' })
  // when componentDidMount trigger, and just trigger once
  useEffect(() => {
    onGoogleAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        userRefOnSnapshot(userAuth, {}, (snapshot) => {
          setUser(() => {
            const user = {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            }
            return user
          })
        })
      } else {
        setUser({ currentUser: userAuth })
      }
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
