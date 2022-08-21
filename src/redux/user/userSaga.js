import { takeLatest, all, call, put } from 'redux-saga/effects'
import { UserActionTypes } from './userTypes'
import { googleSingInSuccess, googleSingInFailure, emailSingInSuccess, emailSingInFailure } from './userAction'
import { signInWithGoogle, signInWithEmailAndpwd } from '../../firebase/firebase.utils'

export function* signInWithGoogleAsync() {
  yield console.log('signInWithGoogle start')
  try {
    const user = yield signInWithGoogle()
    yield put(googleSingInSuccess({ ...user }))
  } catch (error) {
    yield put(googleSingInFailure(error))
  }
}

export function* signInWithEmailAsync({payload: {email, password}}) {
  try {
    const user = yield signInWithEmailAndpwd(email, password)
    yield put(emailSingInSuccess(user))
  } catch (error) {
    yield put(emailSingInFailure(error))
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(UserActionTypes.GOOLE_SIGNIN_START, signInWithGoogleAsync)
}

export function* onSignInWithEmailStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmailAsync)
}

export function* userSaga() {
  yield all([call(onSignInWithGoogleStart), call(onSignInWithEmailStart)])
}
