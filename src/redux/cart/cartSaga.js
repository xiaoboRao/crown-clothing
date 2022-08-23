import { takeLatest, all, call, put } from 'redux-saga/effects'
import { UserActionTypes } from '../user/userTypes';
import { clearCart } from "./cartAction"
export function* onClearCart() {
  try {
    yield put(clearCart())
  } catch (error) {
    console.log(error);
  }
}
// when SIGNOUT_SUCCESS action triggered, the clearItem function is called
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, onClearCart)
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)])
}