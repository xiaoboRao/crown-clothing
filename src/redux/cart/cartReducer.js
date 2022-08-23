import { CartTypes } from './cartTypes'
import { addItemTOCart, clearItemFromCart, removeItemFromCart } from './cartUtils'
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
      case CartTypes.CLEAT_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: clearItemFromCart(state.cartItems, action.payload)
        }
      case CartTypes.CLEAR_CART: 
        return {
          ...state,
          cartItems: []
        }
      case CartTypes.REMOVEITEM:
        return {
          ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
    default:
      return state
  }
}

export default cartReducer
