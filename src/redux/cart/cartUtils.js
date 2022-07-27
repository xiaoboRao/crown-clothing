export const addItemTOCart = (cartItems, addItem) =>{
  const exitItem = cartItems.find((item) => item.id === addItem.id)
  if(exitItem) {
    return cartItems.map((item) => {
      return item.id === addItem.id ? {...item, quantity: item.quantity + 1 } : item
    })
  } 
  return [ ...cartItems, { ...addItem, quantity: 1}]
}

export const clearItemFromCart = (cartItems, clearItem) =>{
  return  cartItems.filter(cartItem => cartItem.id !== clearItem.id)
}

export const removeItemFromCart = (cartItems, removeItem) =>{
  const exitItem = cartItems.find(cartItem => cartItem.id === removeItem.id)

  if(exitItem.quantity === 1) {
    return  cartItems.filter(cartItem => cartItem.id !== exitItem.id)
  }

  return  cartItems.map(cartItem => cartItem.id === removeItem.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}