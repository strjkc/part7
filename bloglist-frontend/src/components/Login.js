import React from 'react'
import LoginForm from './LoginForm'
import Notification from './Notification'
import {useSelector} from 'react-redux'

const Login = () => {
  const notification = useSelector(store => store.notif)
  const user = useSelector(store => store.user)

  const showNotification = () => {
    if (notification !== null)
      return <Notification notificationText={ notification } />
  }
  return (
    <div>
      {showNotification()}
      <LoginForm notification={ notification } user={ user }/>
    </div>
  )
}

export default Login