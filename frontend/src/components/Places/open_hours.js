import React from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles
} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  moreNested: {
    paddingLeft: theme.spacing(6)
  }
}))

const OpenHours = ({ open_hours, show }) => {
  const classes = useStyles()

  const dayNames = Object.keys(open_hours).map(day => `${day}`)

  return (
    <Collapse in={show} timeout='auto' unmountOnExit>
      {
        dayNames.map(name => (
          <List key={name}>
            <ListItem className={classes.nested}>
              <ListItemText>
                {name}: {open_hours[`${name}`].open} - {open_hours[`${name}`].close}
              </ListItemText>
            </ListItem>
          </List>
        ))
      }
    </Collapse>
  )
}

export default OpenHours