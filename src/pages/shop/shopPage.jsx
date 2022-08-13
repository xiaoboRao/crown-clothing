import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { updateCollections } from '../../redux/shop/shopAction'
import CollectionOverview from '../../components/collectionOverview/collectionOverview'
import CollectionPage from '../collection/collection'
import { getMapDataByName } from '../../firebase/firebase.utils'
const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    getMapDataByName('collections', (docs) => {
      const transformedcollection = []
      docs.forEach((doc) => {
        transformedcollection.push(doc.data())
      })

      const mapData = transformedcollection.reduce((accumlator, collecton) => {
        accumlator[collecton.title.toLowerCase()] = collecton
        return accumlator
      }, {})
      updateCollections(mapData)
    })
  }, [])
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview}></Route>
      <Route path={`${match.path}/:collection`} component={CollectionPage}></Route>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (mapData) => {
    dispatch(updateCollections(mapData))
  },
})

export default connect(null, mapDispatchToProps)(ShopPage)
