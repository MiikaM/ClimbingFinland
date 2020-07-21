const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  open_hours: {
    type: Map,
    of: Object
  },
  prices: {
    type: Map,
    of: Object
  },
  tags: {
    type: Array,
    of: String
  },
  city: {
    type: String
  }
})

placeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place