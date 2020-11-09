import React from 'react'
import {setNotification} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import {createUser} from '../reducers/userReducer'
import {useCreation} from '../Hooks/index'

const LoginForm = () => {
  const [username, usernameObject] = useCreation('text')
  const [password, passwordObject, clearPassword] = useCreation('password')
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await dispatch(createUser({username, password}))
    } catch(error)
    {
      dispatch(setNotification('wrong username or password'))
      clearPassword()
    }
  }

  return(
    <div id='login-container'>
      <h1>Log in to application:</h1>
      <form onSubmit={handleLogin}>
        <div>
          <span>username:</span>
          <input id='username-input' {...usernameObject}/>
        </div>
        <div>
          <span>password:</span>
          <input id='password-input' {...passwordObject}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm