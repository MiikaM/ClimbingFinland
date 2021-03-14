import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/places'

/**
 * Requests for all the climbing places from the backend. 
 */
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

/**
 * Sends the new places data to the backend. 
 * @param {*} newObject Info of the new climbing place 
 */
const create = async newObject => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const response = await axios.post(baseUrl, newObject)
  return response.data
}

/**
 * Sends updated place data to the backend. (Only one place!!)
 * @param {*} id place id 
 * @param {*} newObject places updated data
 */
const update = (id, newObject) => {
  console.log('update placeService tapahtuu')
  
  // const request = axios.put(`${baseUrl}/${id}`, newObject)
  // return request.then(response => response.data)
}

/**
 * Sends a delete request to the backend.
 * @param {*} id place id that should be deleted.
 */
const deleteObject = (id) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
export default { getAll, create, update, deleteObject }