import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const selectCartHidden = createSelector([selectCart], (cart) => cart.cartDropdownHidden)

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((initQuantity, cartItem) => initQuantity + cartItem.quantity, 0)
)

export const selectCartTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((initQuantity, cartItem) => initQuantity + cartItem.price * cartItem.quantity, 0)
)
