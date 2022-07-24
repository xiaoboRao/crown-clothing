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