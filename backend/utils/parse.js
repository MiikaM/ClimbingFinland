
const { hasDays, isString, isUrl, isStringArray, isCity, isPicture, hasPrices, isPhonenumber } = require('./validator')
const { isDate } = require('lodash')


const parseName = (name) => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name)
  }

  return name
}

const parseDescription = description => {
  if (!description || !isString(description)) {
    throw new Error('Incorrect or missing text: ' + description)
  }

  return description
}

const parseComment = comment => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment: ' + comment)
  }

  return comment
}


const parseUrl = (url) => {
  if (!url || !isUrl(url)) {
    throw new Error('Incorrect or missing url: ' + url)
  }

  const urlNew = new URL(url)

  return urlNew
}

const parseOpenHours = (open_hours) => {
  if (!open_hours || !hasDays(open_hours)) {
    throw new Error('Incorrect or missing open hours')
  }

  return open_hours
}

const parsePrices = (prices) => {
  if (!prices || !hasPrices(prices)) {
    throw new Error('Incorrect or missing pricing: ', { prices })
  }

  return prices
}

const parseImage = (picture) => {
  if (!picture || !isPicture(picture)) {
    throw new Error('Incorrect or missing image input: ', picture)
  }

  return picture
}

const parseTags = (tags) => {
  if (!tags || !isStringArray(tags)) {
    throw new Error('Incorrect or missing tags: ', tags)
  }

  return tags
}

const parseCity = (city) => {
  if (!city || !isCity(city)) {
    throw new Error('Incorrect or missing city input: ', city)
  }

  return city
}

const parseDate = (date) => {
  if (!date || !isDate(date)) {
    throw new Error('Couldn\'t get the time of submission of comment.')
  }

  return date
}

const parseAddress = (address) => {
  if (!address || !isString(address)) {
    throw new Error('Incorrect or missing address: ' + address)
  }

  return address
}

const parsePhoneNumber = (phonenumber) => {
  if (!phonenumber || !isString(phonenumber) || !isPhonenumber(phonenumber)) {
    throw new Error('Incorrect or missing phone number: ' + phonenumber)
  }

  return phonenumber
}

const parseEmail = (email) => {
  if (!email || !isString(email)) {
    throw new Error('Incorrect or missing email: ' + email)
  }

  return email
}

module.exports = {
  parseName,
  parseCity,
  parseComment,
  parseDate,
  parseDescription,
  parseImage,
  parseOpenHours,
  parsePrices,
  parseTags,
  parseUrl,
  parseAddress,
  parsePhoneNumber,
  parseEmail
}