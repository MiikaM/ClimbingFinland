import userService from '../services/userService'
import { changeNotification } from './notificationReducer'

export const uploadAvatar = (image) => {
  console.log('dispatch', { image })
  return async dispatch => {
    try {
      const imageSave = await userService.uploadAvatar(image)
      dispatch({
        type: 'UPDATE_USER',
        data: imageSave
      })
    } catch (err) {
      dispatch(changeNotification(`Error: ${err.message}`, 'error_message'))
    }

  }
}

export const updateUserInfo = (username, user_data) => {
  return async dispatch => {
    try {
      const newUserInfo = await userService.updateUserInfo(username, user_data)
      console.log({ newUserInfo })
      dispatch({
        type: 'UPDATE_USER',
        data: newUserInfo
      })
      dispatch(changeNotification('Your information has been updated'))

    } catch (err) {
      dispatch(changeNotification(`Error: ${err.message}`, 'error_message'))
    }

  }
}

export const changePassword = (username, data) => {
  return async dispatch => {
    try {
      const newUserInfo = await userService.changePassword(username, data)
      dispatch({
        type: 'CHANGE_PASSWORD',
        data: newUserInfo
      })

      dispatch(changeNotification('Your password has been changed!'))
    } catch (err) {
      dispatch(changeNotification(`Error: ${err.message}`, 'error_message'))

    }

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

const reducer = (state = null, action) => {

  let id = null
  switch (action.type) {
    case 'UPDATE_USER':
      console.log('action data: ', action.data)
      window.localStorage.setItem('login', JSON.stringify(action.data))
      return state
    case 'CREATE_USER':
      return state
    case 'CHANGE_PASSWORD':
      return state
    default:
      return state
  }


}

export default reducer