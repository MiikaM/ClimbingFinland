
const { transporter } = require('../utils/nodemailer')
const logger = require('../utils/logger')

/**
 * Sends the contact info request to an admin email.
 * @param {*} contact_info contact info (message, email(sender), name (sender))
 */
const sendContactInfo = async (contact_info) => {

  try {
    transporter.sendMail({
      from: 'contact@climbingfinland.com',
      to: process.env.RECIPIENT_EMAIL,
      subject: `New contact request: ${contact_info.name}`,
      html: `<div><h1> Message:</h1><p> ${contact_info.message}</p>  <div> <Strong>From: ${contact_info.email}</Strong></div></div>`
    })
  } catch (err) {
    logger.error({ err })
  }
}

module.exports = {
  sendContactInfo
}