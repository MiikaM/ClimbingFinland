import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListSubheader } from '@material-ui/core'
import ShowComment from './showComment'

const CommentSection = () => {
  const comments = useSelector(state => state.comments)
  return (
    <List
      width={100}
      component='p'
      aria-labelledby='comment-list'
      subheader={
        <ListSubheader component='h2' id='comment-list'>
          Comments
      </ListSubheader>
      }>
      {comments.map(comment => (
        <ShowComment key={comment.id} comment={comment} />
      ))}
    </List>
  )
}

export default CommentSection