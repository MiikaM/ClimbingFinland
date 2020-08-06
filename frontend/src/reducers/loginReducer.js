import loginService from '../services/loginService'
import googleLoginService from '../services/googleLoginService'

export const loginUser = (user) => {
  return async dispatch => {
    try {
      const loggedIn = await loginService.login(user)
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

  return async dispatch => {
    try {
      const user = {
        token: user_token,
        type: 'google'
      }

      console.log({ user, user_token })

      const loggedIn = await googleLoginService.login(user)
      console.log({ loggedIn })
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
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      dispatch({
        type: 'GET_USER',
        data: loggedUserJSON
      })
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
    })
  }
}

const reducer = (state = null, action) => {
  let user = null
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      window.localStorage.clear()
      return state
    default:
      return state
  }


}

export default reducer