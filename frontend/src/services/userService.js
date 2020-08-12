import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const uploadAvatar = (image) => {
  // const config = {
  //   headers: { Authorization: token }
  // }

  console.log('service', { image })
  const id = '5f294ce5e5953a8730d56fe5'

  const imageForm = new FormData()

  imageForm.append('imageName', Date.now())
  imageForm.append('imageData', image)

  console.log({ imageForm })
  const request = axios.put(`${baseUrl}/uploadImage/${id}`, imageForm)
  return request.then(response => response.data)
}

export default { getAll, uploadAvatar }