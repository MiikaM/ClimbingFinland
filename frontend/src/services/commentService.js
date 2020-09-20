import axios from 'axios'
const baseUrl = '/api/comments'

const getAll = () => {
  const request = axios.get(baseUrl, { withCredentials: true })
  return request.then(response => response.data)
}

const addComment = async (data, place_id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const newData = { ...data, id: place_id }
  console.log({ newData })

  const response = await axios.post(baseUrl, newData, { withCredentials: true })
  return response.data
}

// const update = (baseUrl, id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

const deleteObject = (id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const request = axios.delete(`${baseUrl}/${id}`, { withCredentials: true })
  return request.then(response => response.data)
}
export default { getAll, addComment, deleteObject }