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

export const emailSingInSuccess = (emailAndPwd) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: emailAndPwd
})

export const emailSingInFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
})

