import React from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'

const Prices = ({ show, prices }) => {


  const priceNames = Object.keys(prices).map(price => `${price}`)

  if (!priceNames) return null

  return (
    <Collapse in={show} timeout='auto' unmountOnExit>
      {
        priceNames.map(name => (
          <List key={name}
            component='div'
            subheader={
              <ListSubheader component='div' id='name-list-subheader'>
                {name}
              </ListSubheader>
            }
          >
            <ListItem>
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