import React from 'react'
import ProfilePic from '../../images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg'

/**
 * Wrapper for the comment information.
 * @param {*} comment comment information
 */
const ShowComment = ({ comment }) => {

  const user = comment.user
  const date = new Date(comment.date)


  const pvm = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`



  if (!comment) return null

  return (
    <li className='card'>
      <div className="comment">
        <div className="comment-meta">
          <img src={ProfilePic} alt="" className="comment-avatar" />
        </div>
        <div className="comment-meta-meta">
          <strong> <a href={`/${user.username}`}> {user.name} </a></strong>
          <p className="timestamp">{pvm}</p>
        </div>

        <div className="comment-body">
          <blockquote>
            {comment.comment}
          </blockquote>
        </div>
      </div>
    </li>
  )
}

export default ShowComment