import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListSubheader } from '@material-ui/core'
import ShowComment from './showComment'
import { CropPortrait } from '@material-ui/icons'
import '../../scss/comment.scss'

/**
 * Wrapper for the comment section.
 * Maps the individual comments if there are any.
 * @param {*} place_id Id for the visible place.
 * @param {*} header Header for the comment section.
 */
const CommentSection = ({ place_id, header }) => {
  const comments = useSelector(state => state.comments)

  const list = [2, 2]



  return (
    <section className="comments-wrapper" >
      <div className="wrapper">
        <h2>{header}</h2>
        {
          comments.length < 1 ?
            <h3>
              Be the first one to comment!
      </h3> :
            <ul className="comment-list-wrapper">
              {
                comments.map(comment =>
                  <ShowComment key={comment.id} comment={comment} />
                )
              }
            </ul>
        }


      </div>
    </section>
  )
}

export default CommentSection