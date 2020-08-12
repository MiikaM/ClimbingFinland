const mongoose = require('mongoose')
const UserBase = require('./userBase')

const AdminUser = UserBase.discriminator('AdminUser',
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
      default: 'Admin'
    }
  }).set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject.password
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
)


module.exports = AdminUser