

const isItOpen = (hours, minutes, openToday) => {
  if (openToday[0] === 'Closed' || openToday[1]  === 'Closed') return false
  const openingHour = Number(openToday[0].split(':')[0])
  const openingMinutes = Number(openToday[0].split(':')[1])
  const closingHour = Number(openToday[1].split(':')[0])
  const closingMinutes = Number(openToday[1].split(':')[1])

  if (hours > openingHour && hours < closingHour) {
    return true
  } else if (hours === openingHour) {
    if (minutes >= openingMinutes) return true
  } else if (hours === closingHour) {
    if (minutes <= closingMinutes) return true
  }
  return false
}

const Open = (open_hours) => {
  console.log({open_hours})
  let openToday
  let open
  const now = new Date()
  const today = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()

  switch (today) {
    case 0:
      openToday = [open_hours.sun.open, open_hours.sun.close]
      console.log({openToday})
      open = isItOpen(hours, minutes, openToday)
      return open
    case 1:
      openToday = [open_hours.mon.open, open_hours.mon.close]
      open = isItOpen(hours, minutes, openToday)
      return open
    case 2:
      openToday = [open_hours.tue.open, open_hours.tue.close]
      open = isItOpen(hours, minutes, openToday)
      return open
    case 3:
      openToday = [open_hours.wed.open, open_hours.wed.close]
      console.log({openToday})
      open = isItOpen(hours, minutes, openToday)
      return open
    case 4:
      openToday = [...open_hours.thu.open, open_hours.thu.close]
      open = isItOpen(hours, minutes, openToday)
      return open
    case 5:
      openToday = [open_hours.fri.open, open_hours.fri.close]
      open = isItOpen(hours, minutes, openToday)
      return open
    case 6:
      openToday = [open_hours.sat.open, open_hours.sat.close]
      open = isItOpen(hours, minutes, openToday)
      return open
    default:
      return null
  }
}


export default Open