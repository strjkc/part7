import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const notification = useSelector(store => store.notif)

  const notificationStyle = {
    padding: '5px',
    color: 'white',
    backgroundColor: '#83ff75',
    border: '1px solid #49bf3b',
    borderRadius: '5px',
    textShadow: '2px 2px 1px rgba(0, 0, 0, 1)',
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