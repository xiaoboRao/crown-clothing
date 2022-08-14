import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { updateCollections } from '../../redux/shop/shopAction'
import CollectionOverview from '../../components/collectionOverview/collectionOverview'
import CollectionPage from '../collection/collection'
import WithSpinner from '../../components/withSpinner/withSpinner'
import { getMapDataByName } from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}
      ></Route>
      <Route
        path={`${match.path}/:collection`}
        render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      ></Route>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (mapData) => {
    dispatch(updateCollections(mapData))
  },
})

export default connect(null, mapDispatchToProps)(ShopPage)
