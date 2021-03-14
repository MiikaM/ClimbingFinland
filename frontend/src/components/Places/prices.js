import React from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { useStyles } from './open_hours'

const Prices = ({ prices }) => {
  const classes = useStyles()


  if (!prices) return null

  return (
    <div>
      {
        prices.map(price => (
          <List key={price.name}
            component='div'
            subheader={
              <ListSubheader component='h3' id='name-list-subheader' className={classes.nested}>
                {price.name}
              </ListSubheader>
            }
          >
            <ListItem className={classes.moreNested}>
              <ListItemText>
                Kertamaksu: {price.onetime}€
              </ListItemText>
            </ListItem>
            <ListItem className={classes.moreNested}>
              <ListItemText>
                10-kerran kortti: {price.tentime}€
              </ListItemText>
            </ListItem>
            <ListItem className={classes.moreNested}>
              <ListItemText>
                Kuukausikortti: {price.month}€
              </ListItemText>
            </ListItem>

          </List>
        ))
      }
    </div>
  )
}

export default Prices