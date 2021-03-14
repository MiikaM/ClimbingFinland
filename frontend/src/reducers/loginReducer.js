import loginService from '../services/loginService'
import { changeNotification } from './notificationReducer'
import firebase from 'firebase'

/**
 * Dispatches => Logged in users (Onsite user) info to the login reducer.
 * Calls loginService login() function to log in to the application.
 * @param {*} user user info to use for log in.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const loginUser = (user) => {
  return async dispatch => {
    try {
      const loggedIn = await loginService.login(user)

      dispatch({
        type: 'LOGIN',
        data: loggedIn
      })
      dispatch(changeNotification({title:'Done', message: 'Successfully logged in!'}))

    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Login failed ${err.response.data.error}`}, 'error'))

      console.error('Error on login: ', {err})
    }
  }
}

/**
 * Dispatches => Logged in users (Google user) info to the login reducer.
 * Calls loginService googleLogin() function to log in the Google user.
 * @param {*} user_token The Google users idToken. 
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const googleLoginUser = (user_token) => {
  
  return async dispatch => {
    try {
      const loggedIn = await loginService.googleLogin(user_token)

      dispatch({
        type: 'LOGIN',
        data: loggedIn
      })
      dispatch(changeNotification({title:'Done', message: 'Successfully logged in!'}))
    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Login failed ${err.response.data.error}`}, 'error'))
    }
  }
}

/**
 * Dispatches => Logged in users info to the login reducer.
 * Calls loginService getUser() function to see if there is anybody loggedin
 * TODO: FIX tarkitus
 */
export const getUser = () => {
  return async dispatch => {
    try {
      const check = await loginService.getUser()

      if (check) {
        dispatch({
          type: 'GET_USER',
          data: check
        })
      } else {
        window.localStorage.clear()
        firebase.auth().signOut()
      }
    } catch (err) {
      console.log('Not logged in.')
    }
  }
}

/**
 * Dispatches => a logout request to the login reducer.
 * Calls loginService logoutUser() to logout from the application.
 * Dispatches an error notification in case of error to the changeNotification() function.
 */
export const logoutUser = () => {
  return async dispatch => {
    try {
      await loginService.logoutUser()

      dispatch({
        type: 'LOGOUT'
      })
      dispatch(changeNotification({title:'Done', message: 'You have logged out!'}))

    } catch (err) {
      dispatch(changeNotification({title: 'Error', message: `Logout failed ${err.response.data.error}`}, 'error'))
    }
  }
}

/**
 * Controls the functions for the login store.
 * @param {*} state state of the login store 
 * @param {*} action action or info provided to the reducer.
 * LOGIN => Adds the logged in users data to localstorage and to the login store.
 * LOGOUT => Logs the user out and clears localstorage and changes the session to false.
 * GET_USER => Replaces the store with user info.
 * Default => Returns the state of the store. 
 */
const reducer = (state = { session: true }, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.localStorage.setItem('login', JSON.stringify(action.data))
      return action.data
    case 'LOGOUT':
      window.localStorage.clear()
      firebase.auth().signOut()
      window.location.reload(true)
      return { session: true }
    case 'GET_USER':
      window.localStorage.setItem('login', JSON.stringify(action.data))
      return action.data
    default:
      return state
  }


}

export default reducer