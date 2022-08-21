import { all, call } from 'redux-saga/effects'
import { fetchCollectionStart } from '../redux/shop/shopSaga'
import { userSaga } from "../redux/user/userSaga"
export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga)])
  // code after all-effect
}
