const Place = require('../models/place')

const addPlace = async (place) => {
  const newPlace = new Place({
    ...place
  })

  const savedPlace = await newPlace.save()
  return savedPlace
}

const updatePlace = async (id, place) => {
  const placeToUpdate = await Place.findByIdAndUpdate(id, {...place}, { new: true })

  if (!placeToUpdate) {
    throw new Error('Couldn\'t find a place with this id')
  }

  return placeToUpdate
}

const removePlace = async (id) => {
  const placeToRemove = await Place.findByIdAndDelete(id)

  if (!placeToRemove) {
    throw new Error('Couldn\'t find place a with this id')
  }

  return placeToRemove
}

module.exports = {
  addPlace,
  updatePlace,
  removePlace
} 