import userService from '../services/userService'
import { changeNotification } from './notificationReducer'

/**
 * Dispatches => Updated user info to the user reducer.
 * Calls userService uploadAvatar() function to upload the avatar.
 * @param {*} image image file to be uploaded as an avatar for the user.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const uploadAvatar = (image) => {
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

/**
 * Dispatches => Updated user info to the user reducer.
 * Calls userService updateUserInfo() function to update user info.
 * @param {*} username username of the, to be updated, user
 * @param {*} user_data 
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const updateUserInfo = (username, user_data) => {
  return async dispatch => {
    try {
      const newUserInfo = await userService.updateUserInfo(username, user_data)

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

/**
 * Dispatches => Updated user info to the user reducer.
 * Calls the userService.changePassword() function to change the users password.
 * @param {*} username username of the user who's password is to be changed. 
 * @param {*} data password data.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
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

/**
 * Dispatches => new user data to the user reducer.
 * Calls the userService.createUser() function to add a new user.
 * @param {*} data data of the new user.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const createUser = (data) => {
  return async dispatch => {
    try {
      const newUser = await userService.createUser(data)
    } catch (err) {
      console.log('Error on create user', { err })
    }

    // dispatch({
    //   type: 'CREATE_USER',
    //   data: newUser
    // })
  }
}

/**
 * Controls the functions for the login store.
 * @param {*} state state of the login store 
 * @param {*} action action or info provided to the reducer.
 * UPDATE_USER => Updates action data info to the localstorage and to user store.
 * CREATE_USER => Updates user data to user store.
 * CHANGE_PASSWORD => Updates user data to user store.
 */
const reducer = (state = null, action) => {

  let id = null
  switch (action.type) {
    case 'UPDATE_USER':
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