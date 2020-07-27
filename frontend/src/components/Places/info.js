import React, { useState } from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ExpandLess,
  ExpanndMore,
  Box,
  Collapse,
  Typography,

} from '@material-ui/core'
const Info = ({ place }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)
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
        <ListItem button onClick={handleClick}>
          <ListItemText primary='Openning hours' />
        </ListItem>
        <ListItem button>
          <ListItemText primary='Pricing' />
        </ListItem>
        <ListItem button>
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