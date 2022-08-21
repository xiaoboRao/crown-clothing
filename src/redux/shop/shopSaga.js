import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchCollectionsSuccess, fetchCollectionsFail } from '../shop/shopAction'
import { getMapDataByName } from '../../firebase/firebase.utils'
import { shopActionTypes } from './shopType'

export function* fetchCollectionAsync() {
  yield console.log('saga start')
  try {
    const collectionMap = yield call(getMapDataByName, 'collections')
    yield put(fetchCollectionsSuccess(collectionMap))
  } catch (error) {
    yield put(fetchCollectionsFail(error.message))
  }
  // create and yield a dispatch Effect
}

export function* fetchCollectionStart() {
  yield takeEvery(shopActionTypes.UPDATE_COLLECTION_START, fetchCollectionAsync)
}
