import { combineReducers } from 'redux'
import userReducer from "./user/userReducer"
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directoryReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'] 
}
const rootReduer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
})

export default persistReducer(rootPersistConfig, rootReduer)
