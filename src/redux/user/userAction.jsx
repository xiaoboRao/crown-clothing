import { UerActionTypes } from './userTypes'
const setCurrentUser = (user) => {
  return {
    type: UerActionTypes.SET_CURRENT_USER,
    payload: user
  }
}

export default setCurrentUser
