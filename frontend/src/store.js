import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import placeReducer from './reducers/placeReducer.js'
import commentReducer from './reducers/commentReducer.js'
import userReducer from './reducers/userReducer.js'
import loginReducer from './reducers/loginReducer.js'
import notificationReducer from './reducers/notificationReducer.js'


/**
 * Reducer for all stores
 * Places holds the places in the database
 * Comments holds the comments of a place
 * Session holds the active users info
 * Notification holds the notifications that are active
 * User holds the user that is being watched
 */
const reducer = combineReducers({
  places: placeReducer,
  comments: commentReducer,
  session: loginReducer,
  notification: notificationReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store