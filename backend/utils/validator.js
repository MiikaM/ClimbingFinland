const timeReg = /\d\d:\d\d/

const isString = (text) => {
  return typeof text === 'string' || text instanceof String
}

const isUrl = (url) => {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(url)
}

const isObject = (object) => {
  return typeof object === Object || object instanceof Object
}

const isOpenHours = (open_hours) => {

  const values = Object.values(open_hours).map(day => {
    if (!isObject(day) || !isTime((day))) {
      return new Error('Incorrect input in opening hours')
    }
  })

  console.log({values})
}

const isTime = (day) => {
  if (!day || !day.open || !day.close) {
    return new Error('Missing opening or closing time input')
  }

  const opening = day.open
  const closing = day.close

  if (!isHourMinutes(opening) || !isHourMinutes(closing)) {
    return new Error('Incorrect opening or closing time input')
  }

  return true
}

const isHourMinutes = (time) => {
  // console.log({time})
  if (time === 'Closed') return true
  const separator = time.indexOf(':')

  // console.log({separator})
  if (separator === -1) return false

  const correctReg = timeReg.test(time)

  // console.log({correctReg})

  let hour = parseInt(time.substring(0, separator))
  let minutes = parseInt(time.substring(separator +1 , time.length))

  // console.log({hour})
  // console.log({minutes})

  if (hour < 24 && hour >= 0) {
    hour = true
  } else hour = false
  if (minutes < 60 && minutes >= 0) {minutes = true} else minutes = false

  // console.log({hour})
  // console.log({minutes})
  // console.log({correctReg})


  return (hour && minutes && correctReg)
}

module.exports = {
  isString,
  isUrl,
  isObject,
  isOpenHours,
  isHourMinutes,
  isTime
}