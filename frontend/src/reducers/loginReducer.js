import loginService from '../services/loginService'
import { changeNotification } from './notificationReducer'


export const loginUser = (user) => {
  return async dispatch => {
    try {
      const loggedIn = await loginService.login(user)
      console.log({ loggedIn })
      dispatch({
        type: 'LOGIN',
        data: loggedIn
      })
      dispatch('Successfully logged in!')
    } catch (exception) {
      dispatch(changeNotification(`Login failed ${exception.message}`, 'error_message'))
      console.error('Error on login: ', exception.message)
    }
  }
}

export const googleLoginUser = (user_token) => {
  console.log('reducer ', { user_token })
  return async dispatch => {
    try {
      const loggedIn = await loginService.googleLogin(user_token)
      console.log({ loggedIn })
      window.localStorage.clear()
      dispatch({
        type: 'LOGIN',
        data: loggedIn
      })
      dispatch('Successfully logged in!')
    } catch (exception) {
      dispatch(changeNotification(`Login failed ${exception.message}`, 'error_message'))
      console.error('Error on google login: ', exception.message)
    }
  }
}


export const getUser = () => {
  return async dispatch => {
    try {
      const loggedUserJSON = window.localStorage.getItem('login')
      console.log({ loggedUserJSON })
      if (loggedUserJSON) {
        dispatch({
          type: 'GET_USER',
          data: loggedUserJSON
        })
      }
    } catch (err) {
      console.log(err.message)
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    try {
      const logoutUser = await loginService.logoutUser()
      console.log({ logoutUser })
      dispatch({
        type: 'LOGOUT'
      })
      dispatch(changeNotification('You have logged out!'))

    } catch (err) {
      dispatch(changeNotification(`Logout failed ${err.message}`, 'error_message'))

      console.log(err.message)
    }
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.localStorage.setItem('login', JSON.stringify(action.data))
      return action.data
    case 'LOGOUT':
      window.localStorage.clear()
      window.location.reload(true)
      return { session: false }
    case 'GET_USER':
      const user = JSON.parse(action.data)
      return user
    default:
      return state
  }


}

export default reducer