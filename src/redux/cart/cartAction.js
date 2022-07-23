import { cartTypes } from "./cartTypes";

const toggleCartDropdownHidden = () => {
  return {
    type: cartTypes.toggleCartDropdownHidden,
  }
}

export default toggleCartDropdownHidden