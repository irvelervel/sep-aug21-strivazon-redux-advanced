import { createStore, combineReducers } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

// my suggestion to start is to think as the FIRST THING about your STORE SHAPE
// I'm planning to use the redux store for sharing the CART and also give to the store
// initial values

export const initialState = {
  // I'm planning to store the application cart
  cart: {
    content: [],
  },
  user: {
    name: '',
  },
  // think about the sub-entities you want to save into the redux store
  // the cart deserves more than just an array value, let's create an object for it
  // so if your structure expands in the future you can put into it all the cart-related
  // properties
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

const configureStore = createStore(
  bigReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
