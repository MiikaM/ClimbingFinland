const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  openingHours: {
    type: Object,
    required: true
  },
  prices: {
    type: Object
  },
  tags: {
    type: Array,
    of: String
  },
  city: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: '-',
    required: true
  },
  email: {
    type: String
  }
})

placeSchema.plugin(uniqueValidator)


placeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place