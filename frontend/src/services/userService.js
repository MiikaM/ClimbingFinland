import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/users'
const baseUrl = '/api/users'

/**
 * Requests all the users from the backend. 
 */
const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.then(response => response.data)
}

/**
 * Sends a upload an avatar request to the backend.
 * @param {*} image image to be uploaded for the active user 
 */
// const uploadAvatar = async (image) => {
//   // const config = {
//   //   headers: { Authorization: token }
//   // }


//   const imageForm = new FormData()

//   imageForm.append('imageName', Date.now())
//   imageForm.append('imageData', image)

//   const response = await axios.put(`${baseUrl}/update/uploadImage`, imageForm, { withCredentials: true })
//   console.log({ response })

//   return response.data
// }

/**
 * Sends an update user info request to the backend.
 * @param {*} username of the active user
 * @param {*} data Updated user data
 */
const updateUserInfo = async (username, data) => {

  const response = await axios.put(`${baseUrl}/${username}`, data, { withCredentials: true })
  return response.data
}

/**
 * Sends a change password request to the backend.
 * @param {*} username of the active user 
 * @param {*} data old and new password
 */
const changePassword = async (username, data) => {
  const response = await axios.put(`${baseUrl}/changePassword/${username}`, data, { withCredentials: true })
  return response.data
}

/**
 * Sends a create new user request to the backend.
 * @param {*} data user info
 */
const createUser = async (data) => {
  const response = await axios.post(baseUrl, data)
  
  return response.data
}

const deleteUser = async (username) => {

  
  const response = await axios.delete(`${baseUrl}/${username}`, { withCredentials: true })
  return response.data
}

export default { getAll, updateUserInfo, changePassword, createUser, deleteUser }