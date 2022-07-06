import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/homePage'

const HatsPage = () => {
  return <div>Hats Page</div>
}
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}>
           
          </Route>
          <Route path="/shop/hats" component={HatsPage}>
           
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
