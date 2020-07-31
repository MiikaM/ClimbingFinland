import React from 'react'
import { ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'

const ShowComment = ({ comment }) => {

  return (
    <ListItem >
      {/* <ListItemAvatar alt='' src='' /> */}
      <ListItemText primary={comment.date} />
      <ListItemText primary={comment.comment} />
    </ListItem>
  )
}

export default ShowComment