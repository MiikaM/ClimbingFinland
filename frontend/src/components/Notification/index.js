import React from 'react'
import { useSelector } from 'react-redux'
import '../../scss/notification.scss'
import NotificationItem from './notificationItem'


/**
 * Displays a notification with styles if the message is an error it uses error styles and if it's
 * a notification then it uses notification styles
 * @param {message} message is the message that tells what has happened.
 */
const Notification = () => {
  const notification = useSelector(state => state.notification)

  return (
    <div className="notification-wrapper">
      {
        notification.map((note) => (
          <NotificationItem key={note.id} note={note} />
        ))
      }
    </div>
  )
}

export default Notification