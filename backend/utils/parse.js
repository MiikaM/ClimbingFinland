
const { hasDays, isString, isUrl, isStringArray, isCity, isPicture } = require('./validator')
const logger = require('./logger')

const newPlace = (object) => {
  const checkedPlace = {
    name: parseName(object.name),
    description: parseDescription(object.description),
    url: parseUrl(object.url),
    open_hours: parseOpenHours(object.open_hours),
    prices: parsePrices(object.prices),
    picture: parseImage(object.picture),
    tags: parseTags(object.tags),
    city: parseCity(object.city)
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
  try {
    if (!open_hours || !hasDays(open_hours)) {
      throw new Error('Incorrect or missing open hours: ' + open_hours)
    }
  } catch (e) {
    logger.error(e.message)
    return false
  }

  return true
}

const parsePrices = (prices) => {
  try {
    if (!prices || !hasPrices(prices)) {
      throw new Error('Incorrect or missing open hours: ' + prices)
    }
  } catch (e) {
    logger.error(e.message)
    return false
  }
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
module.exports = {
  newPlace
}