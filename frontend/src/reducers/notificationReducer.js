let timeOutId = null

/**
 * Dispatches => New notification data to the notification reducer and then dispatches clearNotification() function after timeout.
 * @param {*} notification notification info 
 * @param {*} messageType The type of a notification (e.g. 'success' OR 'error')
 * @param {*} time Timeout period, shows the time in seconds => how long the notification should be showed. 
 */
export const changeNotification = (notification, messageType = 'success', time = 5) => {
  if (timeOutId !== null) clearTimeout(timeOutId)
  timeOutId = null
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      notification: {
        message: notification,
        type: messageType
      }
    })

    timeOutId = setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}

/**
 * Dispatches => Null data to notification reducer.
 */
const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: 'NOTIFICATION',
      notification: null
    })
  }
}

/**
 * Controls the functions for the notification store.
 * @param {*} state state of the notification store 
 * @param {*} action action or info provided to the reducer.
 * NOTIFICATION => adds notification data to the store.
 */
const notificationReducer = (state = null, action) => {

  switch (action.type) {
  case 'NOTIFICATION':
    return action.notification
  default:
    return state
  }
}

export default notificationReducer