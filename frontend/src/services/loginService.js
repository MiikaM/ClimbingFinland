import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async (user) => {

  const userForService = {
    type: 'onSite',
    user: { ...user }
  }

  const response = await axios.post(baseUrl, userForService, { withCredentials: true })
  console.log({ response })
  console.log(response.headers.cookie)
  console.log(response.headers.token)
  console.log(response.token)

  return response.data
}

const googleLogin = async (user_token) => {
  console.log({ user_token })

  const config = {
    headers: { Authorization: `Bearer ${user_token}` },
    withCredentials: true
  }


  console.log({ config })
  const response = await axios.post(baseUrl, { type: 'google' }, config)
  return response.data
}

const getUser = async () => {
  const response = await axios.get(`${baseUrl}/check`, { withCredentials: true })
  console.log({response})
  return response.data
}

const logoutUser = async () => {
  const response = await axios.get(`${baseUrl}/logout`, { withCredentials: true })
  return response
}

export default { login, googleLogin, getUser, logoutUser }