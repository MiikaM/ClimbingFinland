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

  const open = Open(open_hours)

  const handleOpenHoursClick = (e) => {
    e.preventDefault()
    setShowOpenHours(!showOpenHours)
  }

  const handlePricingClick = (e) => {
    e.preventDefault()
    setShowPrices(!showPrices)
  }

  return (
    <div >
      <h2>{place.name}</h2>
      <img src={place.image} alt='From this place' />
      <List
        width={100}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='h2' id='nested-list-subheader'>
            Info
        </ListSubheader>
        }>
        {open ?
          <ListItem button>
            <ListItemText primary='Open' />
            <ListItemIcon>
              <CheckCircleOutlineOutlined style={{ color: '#32cd32' }} />
            </ListItemIcon>
          </ListItem> :
          <ListItem button>
            <ListItemText primary='Closed' />
            <ListItemIcon>
              <HighlightOffOutlined style={{ color: '#cd3232' }} />
            </ListItemIcon>
          </ListItem>
        }
        <ListItem button onClick={handleOpenHoursClick}>
          <ListItemText primary='Opening hours' />
          {showOpenHours ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showOpenHours} timeout='auto' unmountOnExit>
          <OpenHours show={showOpenHours} open_hours={open_hours} />
        </Collapse>
        <ListItem button onClick={handlePricingClick}>
          <ListItemText primary='Pricing' />
          {showPrices ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={showPrices} timeout='auto' unmountOnExit>
          <Prices show={showPrices} prices={pricing} />
        </Collapse>
        <ListItem button component='a' href={place.url}>
          <ListItemText primary={place.url} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={place.city} />
        </ListItem>
        <ListItem button width={50}>
          {place.tags.map(tag => (
            <ListItemText primary={tag} />
          ))}
        </ListItem>
      </List>
    </div>
  )
}

export default Info