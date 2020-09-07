import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListSubheader } from '@material-ui/core'
import ShowComment from './showComment'
import { CropPortrait } from '@material-ui/icons'

const CommentSection = ({place, header}) => {
  const comments = useSelector(state => state.comments)
  const list = [2, 2]

  return (
    <section className="comments-wrapper">
      <div className="wrapper">
        <h2>{header}</h2>
        <ul className="comment-list-wrapper">
          {
            list.map(comment =>
              <ShowComment key={comment} comment={comment} />
            )
          }
        </ul>

        

        {/* <div className="comment-form">
        <label for="comment">
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