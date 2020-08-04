const mongoose = require('mongoose')
const UserBase = require('./userBase')

const ThirdPartyUser = UserBase.discriminator('ThirdParty',
  new mongoose.Schema({
    email: {
      type: String
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    role: 'Admin'
  })
)


module.exports = ThirdPartyUser