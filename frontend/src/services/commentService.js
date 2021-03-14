import axios from 'axios'
const baseUrl = '/api/comments'

/**
 * Request for all comments
 */
const getAll = () => {
  const request = axios.get(baseUrl, { withCredentials: true })
  return request.then(response => response.data)
}


/**
 * Request for all comments of place
 */
const getComments = async (place_name) => {
  const response = await axios.get(`${baseUrl}/${place_name}`, { withCredentials: true })
  return response.data
}

/**
 * Request for adding a comment for a specific place
 */
const addComment = async (data, place_id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const newData = { ...data, id: place_id }

  const response = await axios.post(baseUrl, newData, { withCredentials: true })
  return response.data
}

// const update = (baseUrl, id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

/**
 * Request for deleting a comment from a specific place as an Admin
 */
const deleteObject = (id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const request = axios.delete(`${baseUrl}/${id}`, { withCredentials: true })
  return request.then(response => response.data)
}
export default { getAll, getComments, addComment, deleteObject }