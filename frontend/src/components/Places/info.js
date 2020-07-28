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




const Info = ({ place }) => {
  const [showOpenHours, setShowOpenHours] = useState(false)
  const [showPrices, setShowPrices] = useState(false)
  const pricing = !place.prices ?
    null :
    place.prices

  if (pricing) {
    let name = ''
    let value0
    let value1
    name = Object.keys(pricing).map(price => `${price}`)
    value0 = pricing[`${name[0]}`].onetime
    value1 = pricing[`${name[1]}`].tentime
    console.log({ value0, value1 })
  }



  const handleOpenHoursClick = (e) => {
    e.preventDefault()
    setShowOpenHours(!showOpenHours)
  }

  const handlePricingClick = (e) => {
    e.preventDefault()
    setShowPrices(!showPrices)
  }

  const ListItemLink = () => {

  }

  return (
    <div>
      <h2>{place.name}</h2>
      <img src={place.picture} alt='From this place' />
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
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
        <Collapse in={showOpenHours} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem >
              <ListItemText>
                regular: {place.open_hours.regular}
              </ListItemText>
              <ListItemText>
                la: {place.open_hours.la}
              </ListItemText>
              <ListItemText>
                su: {place.open_hours.su}
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
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