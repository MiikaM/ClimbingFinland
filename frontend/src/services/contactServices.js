import axios from 'axios'
const baseUrl = '/api'

export const sendMail = async (data) => {
  // console.log({data})
  const response = await axios.post(`${baseUrl}/contact`, data, { withCredentials: true })
  console.log({response})
  return response
}

export const forgotPassword = async (data) => {
  const response = await axios.post(`${baseUrl}/forgot`, data, { withCredentials: true })
  return response.data
}

export const resetPassword = async (data) => {
  const response = await axios.post(`${baseUrl}/passwordReset`, data, { withCredentials: true })
  return response.data
}


export default { sendMail, forgotPassword, resetPassword }