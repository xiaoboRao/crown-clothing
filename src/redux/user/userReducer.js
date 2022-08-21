import { UserActionTypes } from './userTypes'

const INIT_STATE = {
  currentUser: null,
  error: null,
}

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      }
    case UserActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
