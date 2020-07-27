import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import placeReducer from './reducers/placeReducer.js'


const reducer = combineReducers({
  places: placeReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store