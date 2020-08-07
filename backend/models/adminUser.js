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
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
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
  })
)


module.exports = AdminUser