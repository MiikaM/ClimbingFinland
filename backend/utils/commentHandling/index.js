const {parseComment, parseDate} = require('../parse')

const checkComment = (object) => {
  const date = new Date()
  const checkedPlace = {
    comment: parseComment(object.comment),
    date: parseDate(date),
  }

  return checkedPlace
}

module.exports = checkComment