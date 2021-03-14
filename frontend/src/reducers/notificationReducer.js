import { v4 } from 'uuid'

/**
 * Dispatches => New notification data to the notification reducer and then dispatches clearNotification() function after timeout.
 * @param {*} notification notification info 
 * @param {*} messageType The type of a notification (e.g. 'success' OR 'error')
 * @param {*} time Timeout period, shows the time in seconds => how long the notification should be showed. 
 */
export const changeNotification = (notification, messageType = 'success', time = 3) => {

  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      notification: {
        title: notification.title,
        message: notification.message,
        type: messageType,
        time: time,
        id: v4()
      }
    })

  }
}

/**
 * Dispatches => Null data to notification reducer.
 */
export const clearNotification = (id) => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_NOTIFICATION',
      id: id
    })
  }
}

/**
 * Controls the functions for the notification store.
 * @param {*} state state of the notification store 
 * @param {*} action action or info provided to the reducer.
 * NOTIFICATION => adds notification data to the store.
 */
const notificationReducer = (state = [], action) => {

  switch (action.type) {
    case 'NOTIFICATION':
      return [...state, { ...action.notification }]
    case 'CLEAR_NOTIFICATION':    
    return state.filter(note => note.id !== action.id)
    default:
      return state
  }
}

export default notificationReducer