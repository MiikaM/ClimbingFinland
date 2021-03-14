import React from 'react'

/**
 * Wrapper for the comment information.
 * @param {*} comment comment information
 */
const ShowComment = ({ comment }) => {

  const user = comment.user
  const date = new Date(comment.date)


  const pvm = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  if (!comment) return null
  
  const addDefaultSrc = (e) => {
    
    e.target.src = `${user.avatar}`
    
  }
  return (
    <li className='card'>
      <div className="comment">
        <div className="comment-meta">
          <img onError={addDefaultSrc} src={`../../${user.avatar}`} alt="" className="comment-avatar" />
        </div>
        <div className="comment-meta-meta">
          <strong> {user.name}</strong>
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