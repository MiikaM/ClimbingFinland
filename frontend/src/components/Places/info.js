import React, { useState } from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Link
} from '@material-ui/core'

import {
  ExpandLess,
  ExpandMore,
  CheckCircleOutlineOutlined,
  HighlightOffOutlined
} from '@material-ui/icons'
import Prices from './prices'
import OpenHours from './open_hours'

import Open from './open'




const Info = ({ place }) => {
  const [showOpenHours, setShowOpenHours] = useState(false)
  const [showPrices, setShowPrices] = useState(false)
  const pricing = !place.prices ?
    null :
    place.prices

  const open_hours = !place.openingHours ?
    null :
    place.openingHours

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
      <img src={place.image} alt='From this place' />
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='h2' id='nested-list-subheader'>
            Info
        </ListSubheader>
        }>
        {Open(open_hours) ?
          <ListItem button>
            <ListItemText primary='Open' />
            <ListItemIcon>
              <CheckCircleOutlineOutlined style={{ color: '#32cd32' }} />
            </ListItemIcon>
          </ListItem> :
          <ListItem button>
            <ListItemText primary='Closed' />
            <ListItemIcon>
              <HighlightOffOutlined style={{color: '#cd3232'}} />
            </ListItemIcon>
          </ListItem>
        }

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