import placeService from '../services/placeService'

export const initializePlaces = () => {
  return async dispatch => {
    const places = await placeService.getAll()
    dispatch({
      type: 'INIT_PLACES',
      data: places
    })
  }
}


const reducer = (state = [], action) => {
  let id = null
  switch (action.type) {
    // case 'NEW_BLOG':
    //   return state.concat(action.data)
    // case 'VOTE':
    //   id = action.data.id
    //   return state.map(blog =>
    //     blog.id !== id ? blog : action.data
    //   )
    // case 'DELETE':
    //   return state.filter(blog => blog.id !== action.data.id)
    case 'INIT_PLACES':
      return action.data
    default:
      return state
  }


}

export default reducer