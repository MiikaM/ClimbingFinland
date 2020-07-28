import React, { useState } from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Link
} from '@material-ui/core'

import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons'
import Prices from './prices'
import OpenHours from './open_hours'




const Info = ({ place }) => {
  const [showOpenHours, setShowOpenHours] = useState(false)
  const [showPrices, setShowPrices] = useState(false)
  const pricing = !place.prices ?
    null :
    place.prices

  const open_hours = !place.open_hours ?
    null :
    place.open_hours

  if (pricing) {
    let name = ''
    let value0
    let value1
    name = Object.keys(pricing).map(price => `${price}`)
    value0 = pricing[`${name[0]}`].onetime
    value1 = pricing[`${name[1]}`].tentime
    console.log({ value0, value1 })
  }

  if (open_hours) {
    console.log({ open_hours })
  }


  const handleOpenHoursClick = (e) => {
    e.preventDefault()
    setShowOpenHours(!showOpenHours)
  }

  const handlePricingClick = (e) => {
    e.preventDefault()
    setShowPrices(!showPrices)
  }

  return (
    <div>
      <h2>{place.name}</h2>
      <img src={place.picture} alt='From this place' />
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='h2' id='nested-list-subheader'>
            Info
        </ListSubheader>
        }>
        <ListItem button>
          <ListItemText primary='Open' />
        </ListItem>
        <ListItem button onClick={handleOpenHoursClick}>
          <ListItemText primary='Opening hours' />
          {showOpenHours ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <OpenHours show={showOpenHours} open_hours={open_hours} />
        <ListItem button onClick={handlePricingClick}>
          <ListItemText primary='Pricing' />
          {showPrices ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Prices show={showPrices} prices={pricing} />
        <ListItem button component='a' href={place.url}>
          <ListItemText primary={place.url} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={place.city} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={place.tags[0]} />
        </ListItem>
      </List>
    </div>
  )
}

export default Info