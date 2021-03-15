const { parseComment, parseDate } = require('../parse')
const Place = require('../../models/place')
const UserBase = require('../../models/userBase')

/**
 *  Checks the comment information
 * @param {*} object Comment object
 * @param {*} place place id for which the comment is assigned
 * @param {*} user user id for the user who commented
 * @returns 
 */
const checkComment = async (object, place, user) => {
  const date = new Date()
  const placeInDb = await Place.findById(place)
  const userInDb = await UserBase.findOne({ username: user.username })

  if (!placeInDb) {
    throw new Error('We couln\'t find the place you were looking for.')
  }
  if (!placeInDb) {
    throw new Error('Not logged in.')
  }

  const checkedComment = {
    comment: parseComment(object.comment),
    user: userInDb.id,
    place: place,
    date: parseDate(date),
  }

  return checkedComment
}

module.exports = { checkComment }