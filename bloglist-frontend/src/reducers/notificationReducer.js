const notificationReducer = (state=null, action) => {
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return null
    default:
      return state
  }
}
let id;
export const setNotification = (content) => {
  return dispatch => {
    if (id)
      clearTimeout(id)
    dispatch ({
    type: 'SET_NOTIFICATION',
    data: content
  })
  id = setTimeout(() => dispatch(removeNotification()), 3000)
}
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer