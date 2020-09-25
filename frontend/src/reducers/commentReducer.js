import commentService from '../services/commentService'
import { changeNotification } from './notificationReducer'

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