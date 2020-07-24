const validator = require('../utils/validator')
const helper = require('./test_helpers')
const cities = require('../data/cities.json')

describe('Checks hours and minutes correctly', () => {

  test('correct times', () => {
    // const result = []
    const result = helper.correctTimes.map(time => validator.hasHourMinutes(time))
    expect(result).not.toContain(false)
  })

  test('incorrect times', () => {
    const result = helper.wrongTimes.map(time => validator.hasHourMinutes(time))

    expect(result).not.toContain(true)
  })

})

describe('Checks that day has an open and closing time', () => {

  test('Handles correct day inputs correctly and returns true', () => {
    const result = helper.correctDays.map(day => validator.hasOpenClose(day))

    expect(result).not.toContain(false)
  })

  test('Handles incorrect time inputs correctly and throws an TypeError', () => {
    const result = []
    for (let i = 0; i < helper.wrongDaysIncorrect.length; i++) {
      try {
        const value = validator.hasOpenClose(helper.wrongDaysIncorrect[i])
        console.log({ value })
      } catch (error) {
        result.push(error)
      }
    }

    expect(result).toHaveLength(helper.wrongDaysIncorrect.length)
    expect(result[0]).toBeInstanceOf(TypeError)
    expect(result[1]).toBeInstanceOf(TypeError)
    expect(result[2]).toBeInstanceOf(TypeError)

    expect(result[0]).toHaveProperty('message', 'Incorrect opening or closing time input')
    expect(result[1]).toHaveProperty('message', 'Incorrect opening or closing time input')
    expect(result[2]).toHaveProperty('message', 'Incorrect opening or closing time input')

  })

  test('Handles missing time inputs correctly and throws an TypeError', () => {
    const result = []
    for (let i = 0; i < helper.wrongDaysMissing.length; i++) {
      try {
        validator.hasOpenClose(helper.wrongDaysMissing[i])
      } catch (error) {
        result.push(error)
      }
    }

    expect(result).toHaveLength(helper.wrongDaysMissing.length)
    expect(result[0]).toBeInstanceOf(TypeError)
    expect(result[1]).toBeInstanceOf(TypeError)
    expect(result[2]).toBeInstanceOf(TypeError)
    expect(result[3]).toBeInstanceOf(TypeError)
    expect(result[4]).toBeInstanceOf(TypeError)
    expect(result[5]).toBeInstanceOf(TypeError)
    expect(result[6]).toBeInstanceOf(TypeError)

    expect(result[0]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[1]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[2]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[3]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[4]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[5]).toHaveProperty('message', 'Missing opening or closing time input')
    expect(result[6]).toHaveProperty('message', 'Missing opening or closing time input')
  })
})

describe('Checks that week has correct input of days', () => {

  test('Handles correct inputs by returning true', () => {
    const result = helper.correctWeek.map(day => validator.hasDays(day))

    expect(result).not.toContain(false)
  })

  test('Handles incorrect time inputs correctly and throws an TypeError', () => {
    const result = []
    for (let i = 0; i < helper.wrongWeekUndefined.length; i++) {
      try {
        const value = validator.hasDays(helper.wrongWeekUndefined[i])
        console.log({ value }, { i })
      } catch (error) {
        result.push(error)
      }
    }
    expect(result).toHaveLength(helper.wrongWeekUndefined.length)
    expect(result[0]).toBeInstanceOf(TypeError)
    expect(result[1]).toBeInstanceOf(TypeError)
    expect(result[2]).toBeInstanceOf(TypeError)

    expect(result[0].message).toContain('Incorrect or missing week input')
    expect(result[1].message).toContain('Incorrect or missing week input')
    expect(result[2].message).toContain('Incorrect or missing week input')
  })

  test('Handles incorrect time inputs correctly and throws an TypeError', () => {
    const result = helper.wrongWeekBadInputs.map(day => validator.hasDays(day))

    expect(result).not.toContain(true)
    expect(result[0]).toBe(false)
    expect(result[1]).toBe(false)
  })
})

describe('IsUrl works as intended', () => {

  test('Works with correct urls', () => {
    const result = helper.correctURLs.map(url => validator.isUrl(url))
    console.log({ result })

    expect(result).not.toContain(false)
  })

  test('Handles incorrect urls correctly', () => {
    const result = helper.wrongURLs.map(url => validator.isUrl(url))
    console.log({ result })

    expect(result).not.toContain(true)
  })
})

describe('isString works as intended', () => {

  test('Returns true for strings', () => {
    const result = helper.correctTimes.map(time => validator.isString(time))

    expect(result).not.toContain(false)
  })

  test('Returns false on non strings', () => {
    const numberArray = []

    for (let i = 0; i < 1000; i++) {
      numberArray.push(Math.random() * 1000000 + 1)
    }

    const result = numberArray.map(number => validator.isString(number))

    expect(result).not.toContain(true)
  })
})

describe('isStringArray works as intended', () => {

  test('Returns true for a string array', () => {
    const arrays = [...helper.wrongTimes, ...helper.correctTimes, ...helper.correctURLs]

    const result = arrays.map(array => validator.isStringArray(array))

    console.log({result})

    expect(result).not.toContain(false)
  })

  test('Returns false for a non string array', () => {
    const numArray = []

    for (let index = 0; index < 50; index++) {
      numArray.push(Math.random() * 1000 + 1)
    }

    const arrays = [...numArray, ...helper.wrongWeekBadInputs, ...helper.correctWeek, ...helper.wrongDaysIncorrect]

    const result = arrays.map(array => validator.isStringArray(array))

    expect(result).not.toContain(true)
  })
})

describe('isObject works as inntended', () => {

  test('Returns true for objects', () => {
    const arrays = [...helper.correctDays, ...helper.wrongDaysIncorrect, ...helper.correctWeek]
    const result = arrays.map(bigObject => validator.isObject(bigObject))

    console.log({result})
    expect(result).not.toContain(false)
  })

  test('Returns false on non strings', () => {
    
    const arrays = [...helper.correctURLs, ...helper.correctTimes, ...helper.wrongTimes]

    for (let i = 0; i < 1000; i++) {
      arrays.push(Math.random() * 1000000 + 1)
    }

    const result = arrays.map(number => validator.isObject(number))

    console.log({result})

    expect(result).not.toContain(true)
  })
})

describe('isCity works as intended', () => {

  test.only('isCity returns true when the city is in the finnish city list', () => {
    const result = cities.map(city => validator.isCity(city))
    console.log({result})
    expect(result).not.toContain(false)
  })


  test.only('isCity returns false when the city is not in the finnish city list', () => {
    const result = helper.wrongCities.map(city => validator.isCity(city))
    console.log({result})
    expect(result).not.toContain(true)
  })
})