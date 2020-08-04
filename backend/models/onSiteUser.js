const mongoose = require('mongoose')
const UserBase = require('./userBase')

const OnSiteUser = UserBase.discriminator('OnSiteUser',
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 6
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 8
    },
    role: {
      type: String,
      default: 'EndUser'
    }
  })
)


module.exports = OnSiteUser