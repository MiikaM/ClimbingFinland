import React from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'
import { useStyles } from './open_hours'

const Prices = ({ show, prices }) => {
  const classes = useStyles()

  const priceNames = Object.keys(prices).map(price => `${price}`)

  if (!priceNames) return null

  return (
    <Collapse in={show} timeout='auto' unmountOnExit>
      {
        priceNames.map(name => (
          <List key={name}
            component='div'
            subheader={
              <ListSubheader component='h3' id='name-list-subheader' className={classes.nested}>
                {name}
              </ListSubheader>
            }
          >
            <ListItem className={classes.moreNested}>
              <ListItemText>
                Kertamaksu: {prices[`${name}`].onetime}€
              </ListItemText>
              <ListItemText>
                10-kerran kortti: {prices[`${name}`].tentime}€
              </ListItemText>
              <ListItemText>
                Kuukausikortti: {prices[`${name}`].month}€
              </ListItemText>
            </ListItem>

          </List>
        ))
      }
    </Collapse>
  )
}

export default Prices