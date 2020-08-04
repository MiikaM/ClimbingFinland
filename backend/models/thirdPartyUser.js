const mongoose = require('mongoose')
const UserBase = require('./userBase')

const ThirdPartyUser = UserBase.discriminator('ThirdParty',
  new mongoose.Schema({
    idHash: {
      type: String,
      required: true,
      unique: true
    },
    role: 'EndUser'
  })
)


module.exports = ThirdPartyUser