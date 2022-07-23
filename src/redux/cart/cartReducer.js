import { cartTypes } from './cartTypes'
const INIT_STATE = {
  cartDropdownHidden: true,
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartTypes.toggleCartDropdownHidden:
      return {
        cartDropdownHidden: !state.cartDropdownHidden,
      }
    default:
      return state
  }
}

export default cartReducer
