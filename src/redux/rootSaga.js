import { all, call } from 'redux-saga/effects'
import { fetchCollectionStart } from '../redux/shop/shopSaga'
import { userSaga } from "../redux/user/userSaga"
import { cartSaga } from "../redux/cart/cartSaga"
export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga), call(cartSaga)])
  // code after all-effect
}
