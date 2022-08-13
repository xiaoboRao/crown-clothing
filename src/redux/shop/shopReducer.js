import { shopActionTypes } from "./shopType"

const INIT_STATE = {
  shopData: null
}

const shopReducer = ( state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        shopData: action.payload
      }
    default:
      return state
  }
}

export default shopReducer