import React, { useState } from 'react'
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/collectionPreview/collectionPreview'
export default function ShopPage() {
  const [shopData, setShopData] = useState(SHOP_DATA)
  return (
    <div className="shopPage">
      {shopData.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />
      })}
    </div>
  )
}
