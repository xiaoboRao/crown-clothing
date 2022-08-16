import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectIsShopFetching } from '../../redux/shop/shopSelector'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collectionOverview/collectionOverview'
import CollectionPage from '../collection/collection'
import WithSpinner from '../../components/withSpinner/withSpinner'
import { fetchCollectionsAsync } from '../../redux/shop/shopAction'
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, isFetchingAsync, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync()
  }, [])
  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingAsync} {...props} />}
      ></Route>
      <Route
        path={`${match.path}/:collection`}
        render={(props) => <CollectionPageWithSpinner isLoading={isFetchingAsync} {...props} />}
      ></Route>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  isFetchingAsync: selectIsShopFetching,
})
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => {
    dispatch(fetchCollectionsAsync())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
