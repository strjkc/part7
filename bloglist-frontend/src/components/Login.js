import React from 'react'
import LoginForm from './LoginForm'
import Notification from './Notification'
import {useSelector} from 'react-redux'

const Login = () => {
  const user = useSelector(store => store.user)

  return (
    <div>
      <Notification />      
      <LoginForm />
    </div>
  )
}

export default Login