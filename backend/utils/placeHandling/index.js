const { parsePhoneNumber ,parseAddress, parseName, parseCity, parseDescription, parseOpenHours, parseTags, parseImage, parsePrices, parseUrl, parseEmail
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
    city: parseCity(object.city),
    address: parseAddress(object.address),
    phone: parsePhoneNumber(object.phone),
    email: parseEmail(object.email)
  }

  return checkedPlace
}

module.exports = {checkPlace}