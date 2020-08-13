import axios from 'axios'
const baseUrl = '/api/places'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteObject = (id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
export default { getAll, create, update, deleteObject }