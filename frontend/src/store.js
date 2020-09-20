import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import placeReducer from './reducers/placeReducer.js'
import commentReducer from './reducers/commentReducer.js'
import userReducer from './reducers/userReducer.js'
import loginReducer from './reducers/loginReducer.js'


const reducer = combineReducers({
  places: placeReducer,
  comments: commentReducer,
  session: loginReducer,
  //  user: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store