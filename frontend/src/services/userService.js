import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.then(response => response.data)
}

const uploadAvatar = async (image) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  console.log('service', { image })
  const id = '5f294ce5e5953a8730d56fe5'

  const imageForm = new FormData()

  imageForm.append('imageName', Date.now())
  imageForm.append('imageData', image)

  console.log({ imageForm })
  const response = await axios.put(`${baseUrl}/uploadImage/${id}`, imageForm)
  return response.then(response => response.data)
}

const updateUserInfo = async (username, data) => {
  console.log({ username }, { data })
  const response = await axios.put(`${baseUrl}/${username}`, data,  { withCredentials: true })
  return response.data
}

const changePassword = async (username, data) => {
  const response = await axios.put(`${baseUrl}/changePassword/${username}`, data,  { withCredentials: true })
  return response.data
}

const createUser = async (data) => {
  const response = await axios.post(baseUrl, data)
  return response.data
}

export default { getAll, uploadAvatar, updateUserInfo, changePassword, createUser }