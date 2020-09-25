const { parseComment, parseDate } = require('../parse')
const Place = require('../../models/place')

//TODO parse User ja place
const checkComment = async (object, place, user) => {
  const date = new Date()
  const placeInDb = await Place.findById(place)

  if (!placeInDb) {
    throw new Error('We couln\'t find the place you were looking for.')
  }

  const checkedPlace = {
    comment: parseComment(object.comment),
    user: user,
    place: place,
    date: parseDate(date),
  }

  return checkedPlace
}

module.exports = { checkComment }