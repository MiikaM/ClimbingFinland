const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const options = { discriminatorKey: 'type', collection: 'users' }

const userBaseSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  role: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  },
  favouritePlaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place'
    }
  ],
}, options)

userBaseSchema.plugin(uniqueValidator)

userBaseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const UserBase = mongoose.model('UserBase', userBaseSchema)

module.exports = UserBase