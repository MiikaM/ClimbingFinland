import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearNotification } from '../../reducers/notificationReducer'
import '../../scss/notification.scss'

const NotificationItem = (note) => {
  const [width, setWidth] = useState(0);
  const [exit, setExit] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  }, [width])

  useEffect(() => {
    handleStartTimer();
  }, []);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth(prev => {
        if (prev < 100) {
          return prev + 1.0;
        }
        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);

    setTimeout(() => {
      dispatch(clearNotification(note.note.id))
    }, note.note.time * 1000)
  };

  return (
    <div onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`notification ${note.note.type}  ${exit ? 'exit' : ''}`} >
      {note.note.title ? <h3>{note.note.title}</h3> : null}
      <p> {note.note.message} </p>
      <div className={"bar"} style={{ width: `${width}%` }} />
    </div>
  )
}

export default NotificationItem 