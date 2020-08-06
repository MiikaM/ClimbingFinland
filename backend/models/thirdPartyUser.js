const mongoose = require('mongoose')
const UserBase = require('./userBase')

const ThirdPartyUser = UserBase.discriminator('ThirdPartyUser',
  new mongoose.Schema({
    idSub: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      default: 'EndUser'
    }
  })
)


module.exports = ThirdPartyUser