const logger = require('./logger')
const validator = require('validator')
const cities = require('../data/cities.json')
const _ = require('lodash')

const timeReg = /\d\d:\d\d/
const pictReg = /\.(gif|jpg|jpeg|tiff|png)/

const isString = (text) => {
  return typeof text === 'string' || text instanceof String
}

const isStringArray = (array) => {
  let length = 0

  for (const str in array) {
    if (isString(str)) {
      length++
    }
  }

  return (length === array.length)
}

const isUrl = (url) => {
  return validator.isURL(url)
}

const isObject = (object) => {
  // console.log({object})
  // console.log(typeof object)
  // console.log(Object.keys(object).length)
  // console.log( Object.keys(object).length !== 0)
  // console.log(object instanceof Object)
  // console.log(object.length)

  return ((typeof object === 'object' || object instanceof Object) &&
    Object.keys(object).length && Object.keys(object).length !== 0 && !(object.length !== undefined))
}

const isCity = (city) => {

  return cities.includes(city)
}

const isPicture = (picture) => {
  return pictReg.test(picture)
}

const hasPrices = (prices) => {
  if (!prices || !isObject(prices)) {
    throw new TypeError('Incorrect or missing pricing input')
  }
  try {
    Object.values(prices).map(priceCategory => {
      hasPriceCategories(priceCategory)
    })

    return true
  } catch (e) {
    logger.error(e.message)
  }
  return false
}

const hasPriceCategories = (priceCategory) => {

  if (!priceCategory || !isObject(priceCategory)) {
    throw new TypeError('Missing or invalid price category input')
  }

  const prices = { ...priceCategory }


  if (!Object.prototype.hasOwnProperty.call(prices, 'onetime') || !Object.prototype.hasOwnProperty.call(prices, 'tentime') || !Object.prototype.hasOwnProperty.call(prices, 'month')) {
    throw new Error('Incorrect input of price array: prices need to be defined for "onetime", "tentime" and "month"')
  }

  Object.values(prices).map(price => {
    if (!isPrice(price)) {
      throw new Error('Incorrect input of price')
    }
  })

  return true

}

const isPrice = (price) => {
  let result = false

  if (typeof price === 'number' || price instanceof Number) result = true
  if (isNaN(price)) return result
  if (price < 0) result = false

  return result
}

const hasDays = (open_hours) => {
  if (!open_hours || open_hours === undefined || !isObject(open_hours)) {
    throw new TypeError('Incorrect or missing week input')
  }
  try {
    Object.values(open_hours).map(day => {
      hasOpenClose(day)
    })
    return true
  } catch (e) {
    logger.error(e.message)
  }
  return false
}

const hasOpenClose = (day) => {

  if (!day || !isObject(day) || !day.open || !day.close) {
    throw new TypeError('Missing opening or closing time input')
  }

  const opening = day.open
  const closing = day.close
  // console.log({opening})
  // console.log({closing})

  if (!hasHourMinutes(opening) || !hasHourMinutes(closing)) {
    throw new TypeError('Incorrect opening or closing time input')
  }

  return true
}

const hasHourMinutes = (time) => {
  // console.log({time})
  if (time === 'Closed') return true
  const separator = time.indexOf(':')

  // console.log({separator})
  if (separator === -1) return false

  const correctReg = timeReg.test(time)

  // console.log({correctReg})

  let hour = parseInt(time.substring(0, separator))
  let minutes = parseInt(time.substring(separator + 1, time.length))

  // console.log({hour})
  // console.log({minutes})

  if (hour < 24 && hour >= 0) {
    hour = true
  } else hour = false
  if (minutes < 60 && minutes >= 0) { minutes = true } else minutes = false

  // console.log({hour})
  // console.log({minutes})
  // console.log({correctReg})


  return (hour && minutes && correctReg)
}

const isPhonenumber = (phonenumber) => {
  let numberArray = phonenumber.split()

  switch (numberArray[0]) {
    case '0':
      if (numberArray.length !== 10) {
        return false
      }
      break
    case '+':
      if (numberArray.length !== 13) {
        return false
      }
      numberArray = _.drop(numberArray)
      break
    default:
      return false
  }


  for (let i = 0; i < numberArray.length; i++) {
    const num = parseInt(numberArray[i])

    if (isNaN(num)) {
      return false
    }
  }

  return true
}

module.exports = {
  isString,
  isStringArray,
  isUrl,
  isObject,
  isCity,
  isPicture,
  hasPrices,
  hasPriceCategories,
  isPrice,
  hasDays,
  hasHourMinutes,
  hasOpenClose,
  isPhonenumber
}