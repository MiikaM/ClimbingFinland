const { parseName, parseCity, parseDescription, parseOpenHours, parseTags, parseImage, parsePrices, parseUrl
} = require('../parse')

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

module.exports = {checkPlace}