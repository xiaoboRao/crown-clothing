import { shopActionTypes } from "./shopType"

const INIT_STATE = {
  shopData: null,
  isFetching: false,
  errorMessage: '',
}

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      }
    case shopActionTypes.UPDATE_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shopData: action.payload,
      }
    case shopActionTypes.UPDATE_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer