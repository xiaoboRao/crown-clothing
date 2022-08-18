import { connect } from 'react-redux'
import { compose } from '@reduxjs/toolkit'
import { createStructuredSelector } from 'reselect'
import { selectIsShopLoaded } from '../../redux/shop/shopSelector'
import WithSpinner from '../../components/withSpinner/withSpinner'
import CollectionPage from './collection'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsShopLoaded(state)
  ,
})
const CollectionContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionContainer
