import React from 'react'
import { ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'

const ShowComment = ({ comment }) => {

  return (
    <li className='card'>
      <div className="comment">
        <div className="comment-meta">
          <img src="./images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg" alt="" className="comment-avatar" />
        </div>
        <div className="comment-meta-meta">
          <strong>John Doe</strong>
          <p className="timestamp">23-05-2020</p>
        </div>

        <div className="comment-body">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit explicabo adipisci ad, veniam
            ducimus
            perspiciatis impedit porro voluptates, dolorem itaque. Quis, harum? Minus debitis ratione similique, eum
            qui
            velit?
              </blockquote>
        </div>
      </div>
    </li>
  )
}

export default ShowComment