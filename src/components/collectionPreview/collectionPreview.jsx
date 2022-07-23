import React from 'react'
import './collectionPreview.scss'
import CollectionItems from '../collectionItems/collectionItems'
export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4
          })
          .map(({ id, ...otherItemsProps }) => {
            return <CollectionItems key={id} {...otherItemsProps} />
          })}
      </div>
    </div>
  )
}
