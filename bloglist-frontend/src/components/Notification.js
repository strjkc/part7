import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Notification = () => {
  const notification = useSelector(store => store.notif)

  const notificationStyle = {
    color: 'green',
    border: '3px solid green',
  }
  return (
    <div>
      { notification ?
        <div style={notificationStyle}>{notification}</div>
        : <></>
      }
    </div>
  )
}

export default Notification