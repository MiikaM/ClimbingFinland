import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async (user) => {

  const userForService = {
    type: 'onSite',
    user: { ...user }
  }
  const response = await axios.post(baseUrl, userForService)
  return response.data
}

const googleLogin = async (user_token) => {
  console.log({ user_token })

  const config = {
    headers: { Authorization: `Bearer ${user_token}` }
  }

  console.log({ config })
  const response = await axios.post(baseUrl, { type: 'google' }, config)
  return response.data
}

export default { login, googleLogin }