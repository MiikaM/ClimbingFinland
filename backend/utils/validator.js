const logger = require('./logger')
const validator = require('validator')
const cities = require('../data/cities.json')
const _ = require('lodash')


const timeReg = /\d\d:\d\d/
const pictReg = /\.(gif|jpg|jpeg|tiff|png)$/

const isString = (text) => {
  return typeof text === 'string' || text instanceof String
}

const isStringArray = (array) => {
  let length = 0

  for (const str in array) {
    if (typeof str === 'string' || str instanceof String) {
      length++
    }
  }

  return (length === array.length)
}

const isUrl = (url) => {
  return validator.isURL(url)
}

const isObject = (object) => {
  // console.log(typeof object)
  // console.log(Object.keys(object).length)
  // console.log( Object.keys(object).length !== 0)
  // console.log(object instanceof Object)
  // console.log(object.length)

  return (typeof object === 'object' || object instanceof Object) && Object.keys(object).length && Object.keys(object).length !== 0 && !object.length
}

const isCity = (city) => {

  const intersection = cities.find(city)

  if (!intersection || intersection.length < 1) return false

  return true
}

const isPicture = (picture) => {
  return pictReg.test(picture)
}

const hasPrices = (prices) => {
  if (!prices || !isObject(prices) || !prices === undefined) {
    throw new TypeError('Incorrect or missing price category input')
  }

  Object.values(prices).map(priceCategory => {
    try{
      if (!hasPriceCategories(priceCategory)) {
        return true
      }
    } catch(e) {
      logger.error(e.message)
    }

  })
}

const hasDays = (open_hours) => {
  if (!open_hours || open_hours === undefined || !isObject(open_hours)) {
    throw new TypeError('Incorrect or missing week input')
  }

  Object.values(open_hours).map(day => {
    try {
      if (hasOpenClose(day)) {
        return true
      }
    } catch (e) {
      logger.error(e.message)
    }
  })

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

module.exports = {
  isString,
  isStringArray,
  isUrl,
  isObject,
  isCity,
  isPicture,
  hasDays,
  hasHourMinutes,
  hasOpenClose
}