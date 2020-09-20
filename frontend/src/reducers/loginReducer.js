import loginService from '../services/loginService'
import Cookies from 'universal-cookie'
import { useHistory, withRouter } from 'react-router-dom'

export const loginUser = (user) => {
  return async dispatch => {
    try {
      const loggedIn = await loginService.login(user)
      console.log({ loggedIn })
      dispatch({
        type: 'LOGIN',
        data: loggedIn
      })
    } catch (exception) {
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

    } catch (exception) {
      console.error('Error on google login: ', exception.message)
    }
  }
}


export const getUser = () => {
  return async dispatch => {
    try {
      const loggedUserJSON = await loginService.getUser()
      console.log({ loggedUserJSON })
      if (loggedUserJSON) {
        dispatch({
          type: 'LOGIN',
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
    const logoutUser = await loginService.logoutUser()
    console.log({ logoutUser })
    dispatch({
      type: 'LOGOUT',
    })
  }
}

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      window.localStorage.clear()
      window.location.reload(true)
      return null
    default:
      return state
  }


}

export default reducer