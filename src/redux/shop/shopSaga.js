import { takeEvery } from 'redux-saga/effects'
import { shopActionTypes } from './shopType'

export function* fetchCollectionAsync() {
  yield console.log('start')
}

export function* fetchCollectionStart() {
  yield takeEvery(shopActionTypes.UPDATE_COLLECTION_START, fetchCollectionAsync)
}
