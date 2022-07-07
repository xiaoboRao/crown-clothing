import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'
import ShopPage from './pages/shop/shopPage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
