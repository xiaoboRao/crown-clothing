import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelector'
import CollectionItems from '../../components/collectionItems/collectionItems'
import "./collection.scss"
const CollectionPage = ({ collection }) => {
  const { title, items} = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
        <div className='items'>
          {
            items.map((item)=> <CollectionItems key={item.id} item ={item} />)
          }
        </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) =>(
  {collection: selectCollection(state,ownProps.match.params.collection)}
)

export default connect(mapStateToProps)(CollectionPage) 