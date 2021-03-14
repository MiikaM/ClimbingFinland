import axios from 'axios'
const baseUrl = '/api'

/**
 * Request to send a mail to the contact address for the page.
 * @param {*} data message to send 
 */
export const sendMail = async (data) => {
  const response = await axios.post(`${baseUrl}/contact`, data, { withCredentials: true })
  return response
}

/**
 * Request for a new password.
 * @param {*} data 
 */
export const forgotPassword = async (data) => {
  const response = await axios.post(`${baseUrl}/forgot`, data, { withCredentials: true })
  return response.data
}

/**
 * Request to reset a password for an user.
 * @param {*} data 
 */
export const resetPassword = async (data) => {
  const response = await axios.post(`${baseUrl}/passwordReset`, data, { withCredentials: true })
  return response.data
}


export default { sendMail, forgotPassword, resetPassword }