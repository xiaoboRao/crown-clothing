import React from 'react'
import CustomButton from '../customButtom/customButtom'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cartAction'
import './collectionItems.scss'

const CollectionItems = ({ item, addItem }) => {
  const { imageUrl, name, price } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(CollectionItems)
