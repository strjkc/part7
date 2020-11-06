import React, { useState } from 'react'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import {createUser} from '../reducers/userReducer'

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    blogService.login({ username, password })
      .then(response => {
        dispatch(createUser(response))
        blogService.setToken(response.token)
        window.localStorage.setItem('user', JSON.stringify(response))
      })
      .catch( () => {
        dispatch(setNotification('wrong username or password'))
      })
  }

  return(
    <div id='login-container'>
      <h1>Log in to application:</h1>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input id='username-input' type='text' value={username} onChange={({ target }) => setUsername(target.value)}/>
        </div>
        <div>
          password:
          <input id='password-input' type='text' value={password} onChange={({ target }) => setPassword(target.value)}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm