import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../redux/shop/shopSelector'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
import "./collectionOverview.scss"
const CollectionOverview = ({ shopData }) => {
  return (
    <div>
       {shopData.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData
})
export default connect(mapStateToProps)(CollectionOverview)