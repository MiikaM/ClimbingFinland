import userService from '../services/userService'

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

export const uploadAvatar = (image) => {
  console.log('dispatch', {image})
  return async dispatch => {
    const imageSave = await userService.uploadAvatar(image)
    dispatch({
      type: 'AVATAR_UPLOAD',
      data: imageSave
    })
  }
}

const reducer = (state = [], action) => {

  let id = null
  switch (action.type) {
    case 'INIT_USERS':
      return action.data
    case 'AVATAR_UPLOAD':
      id = action.data.id
      return state.map(user =>
        user.id !== id ? user : action.data
      )
    default:
      return state
  }


}

export default reducer