import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListSubheader } from '@material-ui/core'
import ShowComment from './showComment'
import { CropPortrait } from '@material-ui/icons'
import '../../scss/comment.scss'

const CommentSection = ({ place_id, header }) => {
  const comments = useSelector(state => state.comments)
  const placeComments = comments ?
    comments.filter(comment => comment.place === place_id) :
    null
  const list = [2, 2]

  console.log({ comments })
  console.log({ placeComments })

  if (comments.length < 1) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <section className="comments-wrapper" >
      <div className="wrapper">
        <h2>{header}</h2>
        <ul className="comment-list-wrapper">
          {
            placeComments.map(comment =>
              <ShowComment key={comment.id} comment={comment} />
            )
          }
        </ul>



        {/* <div className="comment-form">
        <label htmlFor="comment">
          Your comment
        </label>
        <form action="" className='cmform' >

          <textarea name="comment" id="" cols="60" rows="2"></textarea>
          <input type="submit" className="submit" value="Comment" />
        </form>
      </div>  */}

      </div>
    </section>
  )
}

export default CommentSection