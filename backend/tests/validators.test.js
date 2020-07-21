const validator = require('../utils/validator')

describe('Checks hours and minutes correctly', () => {
  const correctTimes = [
    '00:00',
    '01:01',
    '02:23',
    '07:30',
    '04:04',
    '05:53',
    '06:20',
    '07:59',
    '08:00',
    '09:10',
    '10:20',
    '11:30',
    '12:40',
    '13:50',
    '14:51',
    '15:23',
    '16:40',
    '17:00',
    '18:00',
    '19:07',
    '20:22',
    '21:41',
    '22:00',
    '23:00',
    '23:59',
    'Closed'
  ]

  const wrongTimes = [
    '0000',
    '0101',
    '02:3',
    '03:60',
    '04:064',
    '05:73',
    '6:20',
    '07:5',
    '26:00',
    '0:10',
    '1020',
    '11230',
    '12;40',
    '13,50',
    '14<51',
    '15>23',
    '16.40',
    '17,00',
    '18 00',
    '23:60',
    '25:22',
    '21:-11',
    '2:00',
    '23:0',
    '24:59',
  ]

  test('correct times', () => {
    // const result = []
    const result = correctTimes.map(time => validator.isHourMinutes(time))
    expect(result).not.toContain(false)
  })

  test('incorrect times', () => {
    const result = wrongTimes.map(time => validator.isHourMinutes(time))
    
    expect(result).not.toContain(true)
  })

})
