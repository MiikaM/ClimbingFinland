const Place = require('../models/place')
const logger = require('../utils/logger')
const { uploadImage } = require('../utils/placeHandling')
const fs = require('fs')

/**
 * Add's the inputted place in to the database
 * If the file (place image) is not given uses default image in thhe model.
 * @param {*} place Place info
 * @param {*} file place image file
 * @returns The saved document
 */
const addPlace = async ( place, file=null) => {

  // if (file !== null) {
  //   const imagePath = await uploadImage(file)
  //   place.image = imagePath
  // }
  console.log({place})
  

  const newPlace = new Place({
    ...place
  })

  console.log({newPlace})
  

  const savedPlace = await newPlace.save()
  return savedPlace
}

/**
 *  Updates the place info.
 * If the file is given removes the old image from the server (NOT IMPLEMENTED)
 * @param {*} id place id
 * @param {*} place place info
 * @param {*} file image file
 * @returns The updated document
 */
const updatePlace = async (id, place, file = null) => {
  // if (file !== null) {
  //   const imagePath = await uploadImage(file)
  //   place.image = imagePath
  // }

  // logger.info({ place, id, file })

  const placeToUpdate = await Place.findByIdAndUpdate(id, place, { runValidators: true, context: 'query' })

  // if (file === null && placeToUpdate.image !== null && placeToUpdate.image !== '') {
  //   try {
  //     fs.unlinkSync(placeToUpdate.image)
  //   } catch (err) {
  //     logger.error(err.message)
  //   }
  // }
  console.log({ placeToUpdate })

  if (!placeToUpdate) {
    throw new Error('Couldn\'t find the place you were trying to update.')
  }

  const newPlace = await Place.findById(id)
  console.log({ newPlace })

  return newPlace
}

// /** NOT IMPLEMENTED USED FOR TESTING
//  * 
//  * @param {*} id 
//  * @param {*} image 
//  * @returns 
//  */
// const updatePlaceImage = async (id, image) => {
//   const placeToUpdate = await Place.findById(id)

//   if (!placeToUpdate) {
//     throw new Error('Couldn\'t find the place you were trying to update.')
//   }



//   const updatedPlace = await placeToUpdate.save()

//   return updatedPlace
// }

/**
 * Removes the place document with the given id
 * @param {*} id document id
 * @returns removed document
 */
const removePlace = async (id) => {
  const placeToRemove = await Place.findByIdAndDelete(id)

  if (!placeToRemove) {
    throw new Error('Couldn\'t find the place you were trying to remove.')
  }

  return placeToRemove
}

module.exports = {
  addPlace,
  updatePlace,
  removePlace,
  updatePlaceImage
}