import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from "../../components/collectionOverview/collectionOverview"
import CollectionPage from '../collection/collection'
const ShopPage = ({ match}) => {
  return (
    <div className="shopPage">
      <Route exact path= { match.path} component ={CollectionOverview}></Route>
      <Route path={`${match.path}/:collectionID`} component ={CollectionPage}></Route>
    </div>
  )
}

export default ShopPage