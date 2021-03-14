import placeService from '../services/placeService'
import { changeNotification } from './notificationReducer'

/**
 * Dispatches => initialized places to the places reducer.
 * Calls placeService getAll() function to get all the climbing splaces.
 * Dispatches an error notification in case of error to the changeNotification() function.s
 */
export const initializePlaces = () => {
  return async dispatch => {
    try {
      const places = await placeService.getAll()
      dispatch({
        type: 'INIT_PLACES',
        data: places
      })
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `There was an error loading the database. Please try again later.`}, 'error'))
      console.error('Error on initplaces: ', err.response.data.error)
    }
  }
}
/**
 * Dispatches => added place data to the places reducer .
 * Calls placeService create() function to add place data.
 * @param {*} place Place data to be added.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const addPlace = (place) => {
  return async dispatch => {
    try {
      const newPlace = await placeService.add(place)
      dispatch({
        type: 'NEW_PLACE',
        data: newPlace
      })
      dispatch(changeNotification({title:'Done', message: 'New place created!'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Couldn\'t create a place: ${err.response.data.error}`}, 'error'))
      console.error('Error on createPlace: ', err.response.data.error)
    }
  }
}

/**
 * Deletes a place
 * @param {*} place 
 * @returns 
 */
export const deletePlace = (id) => {
  return async dispatch => {
    try {
      const removed = await placeService.deleteObject(id)
      dispatch({
        type: 'DELETE_PLACE',
        data: removed
      })
      dispatch(changeNotification({title:'Done', message: 'Place deleted!'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Couldn\'t remove place: ${err.response.data.error}`}, 'error'))
      console.error('Error on deletePlace: ', err.response.data.error)
    }
  }
}


export const updatePlace = (place_id, data) => {

  return async dispatch => {
    try {
      const newPlace = await placeService.update(place_id, data)
      dispatch({
        type: 'UPDATE_PLACE',
        data: newPlace
      })
      dispatch(changeNotification({title:'Done', message: 'Place info updated!'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Couldn\'t update a place: ${err.response.data.error}`}, 'error'))
      console.error('Error on updatePlace: ', err.message)
    }
  }
}

/**
 * Controls the functions for the places store.
 * @param {*} state state of the places store.
 * @param {*} action action or info provided to the reducer.
 * NEW_PLACE => adds the place data to the state
 * VOTE => *NOT DECIDED*
 * DELETE => Filters out the Deleted place data from the places store.
 * INIT_PLACES => Initializes the places store with the data provided to the reducer.
 */
const reducer = (state = [], action) => {
  // let id = null
  switch (action.type) {
    case 'NEW_PLACE':
      return state.concat(action.data)
    case 'UPDATE_PLACE':
      const id = action.data.id
      return state.map(place =>
        place.id !== id ? place : action.data
      )
    // case 'VOTE':
    //   id = action.data.id
    //   return state.map(blog =>
    //     place.id !== id ? place : action.data
    //   )
    case 'DELETE':
      return state.filter(place => place.id !== action.data.id)
    case 'INIT_PLACES':
      return action.data
    default:
      return state
  }


}

export default reducer