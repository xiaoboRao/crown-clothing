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

export const clearItem = (item) => {
  return {
    type: CartTypes.CLEATITEM,
    payload: item,
  }
}

export const removeItem = (item) => {
  return {
    type: CartTypes.REMOVEITEM,
    payload: item,
  }
}