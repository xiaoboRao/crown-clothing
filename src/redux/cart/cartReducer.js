import { CartTypes } from './cartTypes'
import { addItemTOCart } from './cartUtils'
const INIT_STATE = {
  cartDropdownHidden: true,
  cartItems: []
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLECARTDROPDOWNHIDDEN:
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      }
    case CartTypes.ADDITEM:
      return {
        ...state,
        cartItems: addItemTOCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
