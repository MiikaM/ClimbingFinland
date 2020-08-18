const { parseComment, parseDate } = require('../parse')

//TODO parse User ja place
const checkComment = (object, place, user) => {
  const date = new Date()
  const checkedPlace = {
    comment: parseComment(object.comment),
    user: user,
    place: place,
    date: parseDate(date),
  }

  return checkedPlace
}

module.exports = checkComment