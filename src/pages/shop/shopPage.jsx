import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsAsync } from '../../redux/shop/shopAction'
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverviewContainer'
import CollectionContainer from '../collection/collectionContainer'

const ShopPage = ({ match, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync()
  }, [])
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverviewContainer}></Route>

      <Route path={`${match.path}/:collection`} component={CollectionContainer}></Route>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => {
    dispatch(fetchCollectionsAsync())
  },
})

export default connect(null, mapDispatchToProps)(ShopPage)
