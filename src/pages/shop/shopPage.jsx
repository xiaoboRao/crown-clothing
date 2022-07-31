import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopData } from '../../redux/shop/shopSelector'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
const ShopPage = ({shopData }) => {
  return (
    <div className="shopPage">
      {shopData.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />
      })}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  shopData: selectShopData
})
export default connect(mapStateToProps)(ShopPage)