import { CartTypes } from "./cartTypes";

export  const toggleCartDropdownHidden = () => {
  return {
    type: CartTypes.TOGGLECARTDROPDOWNHIDDEN,
  }
}

export const addItem = (item) => {
  return {
    type: CartTypes.ADDITEM,
    payload: item
  }
}

export const clearItemFromCart = (item) => {
  return {
    type: CartTypes.CLEAT_ITEM_FROM_CART,
    payload: item,
  }
}

export const clearCart = () => {
  return {
    type: CartTypes.CLEAR_CART,
  }
}

export const removeItem = (item) => {
  return {
    type: CartTypes.REMOVEITEM,
    payload: item,
  }
}