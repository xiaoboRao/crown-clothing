import { all, call } from 'redux-saga/effects'
import { fetchCollectionStart } from '../redux/shop/shopSaga'
export default function* rootSaga() {
  yield all([call(fetchCollectionStart)])
  // code after all-effect
}
