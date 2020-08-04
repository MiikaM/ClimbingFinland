const mongoose = require('mongoose')
const UserBase = require('./userBase')

const OnSiteUser = UserBase.discriminator('OnSite',
  new mongoose.Schema({
    email: {
      type: String
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    role: 'EndUser'
  })
)


module.exports = OnSiteUser