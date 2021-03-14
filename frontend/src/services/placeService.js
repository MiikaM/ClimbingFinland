import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/places'
const baseUrl = '/api/places'

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
const add = async data => {

  // const image = data.file
  // delete data.file
  
  const placeData = JSON.stringify(data)

  const formData = new FormData()
  // formData.append('imageName', Date.now())
  // formData.append('imageData', image)
  formData.append('place', placeData)
  
  const response = await axios.post(baseUrl, formData, { withCredentials: true })
  return response.data
}

/**
 * Sends updated place data to the backend. (Only one place!!)
 * @param {*} id place id 
 * @param {*} data places updated data
 */
const update = (id, data) => {

  // const image = data.file
  // delete data.file
  
  const placeData = JSON.stringify(data)

  const formData = new FormData()
  // formData.append('imageName', Date.now())
  // formData.append('imageData', image)
  formData.append('place', placeData)



  const request = axios.put(`${baseUrl}/${id}`, formData, { withCredentials: true })
  return request.then(response => response.data)
}

/**
 * Sends a delete request to the backend.
 * @param {*} id place id that should be deleted.
 */
const deleteObject = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, { withCredentials: true })
  return request.then(response => response.data)
}
export default { getAll, add, update, deleteObject }