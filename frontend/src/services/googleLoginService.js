import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

const login = async (user_token) => {
  const response = await axios.post(baseUrl, user_token)
  return response.data
}

export default {login}