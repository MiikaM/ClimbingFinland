import React from 'react'
import { useSelector } from 'react-redux'
import ShowComment from './showComment'
import '../../scss/comment.scss'

/**
 * Wrapper for the comment section.
 * Maps the individual comments if there are any.
 * @param {*} header Header for the comment section.
 */
const CommentSection = ({ header }) => {
  const comments = useSelector(state => state.comments)


  return (
    <section className="comments-wrapper" >
      <div className="wrapper align">
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