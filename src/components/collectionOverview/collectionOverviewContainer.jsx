import { connect } from 'react-redux'
import { compose } from '@reduxjs/toolkit'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../withSpinner/withSpinner'

import CollectionOverview from './collectionOverview'

import { selectIsShopFetching } from '../../redux/shop/shopSelector'
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsShopFetching(state),
})

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview)
export default CollectionOverviewContainer
