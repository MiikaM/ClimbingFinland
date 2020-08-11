import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const uploadAvatar = (image, id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const request = axios.put(`${baseUrl}/uploadImage/${id}`, image)
  return request.then(response => response.data)
}

export default { getAll }