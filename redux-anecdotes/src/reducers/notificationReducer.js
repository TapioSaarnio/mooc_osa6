const reducer = (state = '', action) => {

    switch (action.type) {

        case 'SET_NOTIFICATION':
        
          return action.notification

        default: return state
    }

}

export const setNotificationVote = (message, time) => {

  return async dispatch => {
    dispatch({

      type: 'SET_NOTIFICATION',
      notification: message
    })
    setTimeout(() => {

      dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })

    } , time * 1000)
  }
}

export const setNotificationCreate = (message, time) => {

  return async dispatch => {
    dispatch({

      type: 'SET_NOTIFICATION',
      notification: message
    })

    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })
    } , time * 1000)
  }
}

export default reducer

