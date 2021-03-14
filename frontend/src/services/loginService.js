import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

/**
 * Request to log in to the application as an onsite user.
 * @param {*} user info 
 */
const login = async (user) => {

  const userForService = {
    type: 'onSite',
    user: { ...user }
  }

  const response = await axios.post(baseUrl, userForService, { withCredentials: true })


  return response.data
}

/**
 * Request to log in to the application as an Google user.
 * @param {*} user_token Google user token
 */
const googleLogin = async (user_token) => {

  const config = {
    headers: { Authorization: `Bearer ${user_token}` },
    withCredentials: true
  }


  const response = await axios.post(baseUrl, { type: 'google' }, config)
  return response.data
}

/**
 * Sends a check request to the backend to see if the user is logged in.
 */
const getUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/check`, { withCredentials: true })
    return response.data
  } catch (err) {
    console.log('Error on getUser', { err })
  }
  return null
}

/**
 * Sends a logout request to the backend.
 */
const logoutUser = async () => {
  const response = await axios.get(`${baseUrl}/logout`, { withCredentials: true })
  return response
}

export default { login, googleLogin, getUser, logoutUser }