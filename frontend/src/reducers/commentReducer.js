import commentService from '../services/commentService'

export const initializeComments = () => {
  return async dispatch => {
    try {
      const comments = await commentService.getAll()
      dispatch({
        type: 'INIT_COMMENTS',
        data: comments
      })
    } catch(exception) {
      console.error('Error on initialize comments: ', exception.message)
    }
  }
}

export const addComment = (comment) => {
  return async dispatch => {
    try {
      const newComment = await commentService.addComment(comment)
      dispatch({
        type: 'ADD_COMMENT',
        data: newComment
      })
    } catch (exception) {
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
    default:
      return state
  }


}

export default reducer