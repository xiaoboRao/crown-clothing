import { shopActionTypes } from "./shopType";
import { getMapDataByName } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.UPDATE_COLLECTION_START,
})

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.UPDATE_COLLECTION_SUCCESS,
  payload: collectionMap,
})
export const fetchCollectionsFail = (errorMessage) => ({
  type: shopActionTypes.UPDATE_COLLECTION_SUCCESS,
  payload: errorMessage,
})

export const fetchCollectionsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCollectionsStart())
      const collectionMap = await getMapDataByName('collections')
      dispatch(fetchCollectionsSuccess(collectionMap))
    } catch (error) {
      dispatch(fetchCollectionsFail(error.message))
    }
  }
}