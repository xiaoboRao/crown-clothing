export const addItemTOCart = (cartItems, addToCartItem) =>{
  const exitItem = cartItems.find((item) => item.id === addToCartItem.id)
  if(exitItem) {
    return cartItems.map((item) => {
      if(item.id === addToCartItem.id) {
        item.quantity += 1
      }
      return item
    })
  } 
  return [ ...cartItems, { ...addToCartItem, quantity: 1}]
}