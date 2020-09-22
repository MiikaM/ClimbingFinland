import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Displays a notification with styles if the message is an error it uses error styles and if it's
 * a notification then it uses notification styles
 * @param {message} message is the message that tells what has happened
 */
const Notification = () => {
  const notification = useSelector(state => state.notification)

  if (notification === null) {
    return null
  }

  return (
    <div className={notification.type} >
      {notification.message}
    </div>
  )
}

export default Notification