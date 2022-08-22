import { UserActionTypes } from './userTypes'

export const googleSingInStart = () => ({
  type: UserActionTypes.GOOLE_SIGNIN_START,
})

export const googleSingInSuccess = (payload) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: payload
})

export const googleSingInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
})

export const emailSingInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
  
})

export const emailSingInSuccess = (payload) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: payload
})


export const emailSingInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,  
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
  payload: null
})


export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
})


export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})
