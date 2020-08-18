const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USERNAME, // generated ethereal user
    pass: process.env.GMAIL_PASSWORD, // generated ethereal password
  },
})


module.exports = { transporter }