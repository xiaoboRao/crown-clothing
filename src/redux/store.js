import { createStore, applyMiddleware } from 'redux'
import { persistStore  } from 'redux-persist'
import rootReduer from './rootReduer'
import thunk from 'redux-thunk'

const middlewares = [thunk]
function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReduer, applyMiddleware(...middlewares))

export const persistor  = persistStore(store)

