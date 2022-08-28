import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStart } from "../../redux/shop/shopAction"
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverviewContainer'
import CollectionContainer from '../collection/collectionContainer'

const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart])
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverviewContainer}></Route>

      <Route path={`${match.path}/:collection`} component={CollectionContainer}></Route>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => {
    dispatch(fetchCollectionsStart())
  },
})

export default connect(null, mapDispatchToProps)(ShopPage)
