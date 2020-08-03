import loginService from '../services/login'
import blogService from '../services/blogs'

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