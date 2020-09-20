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
  console.log('dispatch', { image })
  return async dispatch => {
    const imageSave = await userService.uploadAvatar(image)
    dispatch({
      type: 'UPDATE_USER',
      data: imageSave
    })
  }
}

export const updateUserInfo = (username, user_data) => {
  return async dispatch => {
    const newUserInfo = await userService.updateUserInfo(username, user_data)
    console.log({ newUserInfo })
    // dispatch({
    //   type: 'UPDATE_USER',
    //   data: newUserInfo
    // })
  }
}

export const changePassword = (username, data) => {
  return async dispatch => {
    const newUserInfo = await userService.changePassword(username, data)
    // dispatch({
    //   type: 'UPDATE_USER',
    //   data: newUserInfo
    // })
  }
}

export const createUser = (data) => {
  return async dispatch => {
    try {
      const newUser = await userService.createUser(data)
      console.log({ newUser })
    } catch (err) {
      console.log({ err })
    }

    // dispatch({
    //   type: 'CREATE_USER',
    //   data: newUser
    // })
  }
}

const reducer = (state = [], action) => {

  let id = null
  switch (action.type) {
    case 'INIT_USERS':
      return action.data
    case 'UPDATE_USER':
      id = action.data.id
      return state.map(user =>
        user.id !== id ? user : action.data
      )
    case 'CREATE_USER':
      return state
    default:
      return state
  }


}

export default reducer