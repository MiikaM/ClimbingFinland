
const { hasDays, isString, isUrl, isStringArray, isCity, isPicture, hasPrices } = require('./validator')
const { isDate } = require('lodash')

const checkPlace = (object) => {
  const checkedPlace = {
    name: parseName(object.name),
    description: parseDescription(object.description),
    url: parseUrl(object.url),
    openingHours: parseOpenHours(object.openingHours),
    prices: parsePrices(object.prices),
    image: parseImage(object.image),
    tags: parseTags(object.tags),
    city: parseCity(object.city)
  }

  return checkedPlace
}

const checkComment = (object) => {
  const checkedPlace = {
    comment: parseName(object.name),
    date: parseDate(object.date),
  }

  return checkedPlace
}

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
    throw new Error('Incorrect or missing pricing: ', {prices})
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
  if(!date || !isDate(date)) {
    throw new Error ('Couldn\'t get the time of submission of comment.')
  }
  
  return date
}

module.exports = {
  checkPlace,
  checkComment
}