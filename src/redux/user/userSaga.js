import { takeLatest, all, call, put } from 'redux-saga/effects'
import { UserActionTypes } from './userTypes'
import { googleSingInSuccess, googleSingInFailure, emailSingInSuccess, emailSingInFailure, signOutSuccess, signOutFailure } from './userAction'
import { signInWithGoogle, signInWithEmailAndpwd, getUser, signOutStart } from '../../firebase/firebase.utils'

export function* signInWithGoogleAsync() {
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

export function* checkUserSession() {
  
  try {
    const  user  = yield getUser()
    if(!user) return;
    yield put(googleSingInSuccess({ ...user }))
  } catch (error) {
    yield put(googleSingInSuccess(error))
  }
}

export function* signOut() {
  try {
    yield signOutStart()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
    
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(UserActionTypes.GOOLE_SIGNIN_START, signInWithGoogleAsync)
}

export function* onSignInWithEmailStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmailAsync)
}

export function* onCheckUserStart() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
}

export function* userSaga() {
  yield all([call(onSignInWithGoogleStart), call(onSignInWithEmailStart), call(onCheckUserStart), call(onSignOutStart)])
}
