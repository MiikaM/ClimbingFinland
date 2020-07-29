import React from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'
import { useStyles } from './open_hours'

const Prices = ({ prices }) => {
  const classes = useStyles()

  const priceNames = Object.keys(prices).map(price => `${price}`)

  if (!priceNames) return null

  return (
    <div>
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
            </ListItem>
            <ListItem className={classes.moreNested}>
              <ListItemText>
                10-kerran kortti: {prices[`${name}`].tentime}€
              </ListItemText>
            </ListItem>
            <ListItem className={classes.moreNested}>
              <ListItemText>
                Kuukausikortti: {prices[`${name}`].month}€
              </ListItemText>
            </ListItem>

          </List>
        ))
      }
    </div>
  )
}

export default Prices