import commentService from '../services/commentService'
import { changeNotification } from './notificationReducer'

/**
 * Dispatches => initialized comments to the comments reducer.
 * Calls commentservice getAll() function.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const initializeComments = () => {
  return async dispatch => {
    try {
      const comments = await commentService.getAll()
      dispatch({
        type: 'INIT_COMMENTS',
        data: comments
      })

    } catch (exception) {
      dispatch(changeNotification('There was an error loading the database. Please try again in later.', 'error_message'))
      console.error('Error on initialize comments: ', exception.message)
    }
  }
}

/**
 * Dispatches => requested comments to the comments reducer.
 * Calls commentservice getComments() function to get comment infos.
 * @param {*} place_name The name of the place which comments are requested.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const getComments = (place_name) => {
  return async dispatch => {
    try {
      const comments = await commentService.getComments(place_name)
      dispatch({
        type: 'GET_COMMENTS',
        data: comments
      })

    } catch (exception) {
      dispatch(changeNotification('There was an error loading the database. Please try again in later.', 'error_message'))
      console.error('Error on initialize comments: ', exception.message)
    }
  }
}

/**
 * Dispatches => added comment to the comments reducer .
 * Calls commentService addComment() function to add comment data.
 * @param {*} comment Comment data to be added.
 * @param {*} place_id The id of the place where the comment will be added.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const addComment = (comment, place_id) => {
  return async dispatch => {
    try {
      const newComment = await commentService.addComment(comment, place_id)
      dispatch({
        type: 'ADD_COMMENT',
        data: newComment
      })
      dispatch(changeNotification('You commented! Nice!'))
    } catch (exception) {
      dispatch(changeNotification(`Sorry server didn't like that comment. Try again`, 'error_message'))
      console.error('Error on addComment dispatch: ', exception.message)
    }

  }
}

/**
 * Controls the functions for the comments store.
 * @param {*} state state of the comments store.
 * @param {*} action action or info provided to the reducer.
 * ADD_COMMENT => adds the comment data to the state.
 * INIT_COMMENTS => Initializes the comment store with the data provided to the reducer.
 * GET_COMMENTS => Replaces the comments store state with the data provided to the reducer.
 * Default => returns the state of the store.
 */
const reducer = (state = [], action) => {
  // let id = null
  switch (action.type) {
    case 'ADD_COMMENT':
      return state.concat(action.data)
    // case 'VOTE':
    //   id = action.data.id
    //   return state.map(blog =>
    //     blog.id !== id ? blog : action.data
    //   )
    // case 'DELETE':
    //   return state.filter(blog => blog.id !== action.data.id)
    case 'INIT_COMMENTS':
      return action.data
    case 'GET_COMMENTS':
      
      return action.data
    default:
      return state
  }


}

export default reducer