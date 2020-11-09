import React, { useState } from 'react'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import {createUser} from '../reducers/userReducer'
import {useCreation} from './Hooks/index'

const LoginForm = (props) => {
  const [username, usernameObject, clearUsername] = useCreation('text')
  const [password, passwordObject, clearPassword] = useCreation('password')
  const dispatch = useDispatch()

  const clearForm = () => {
    clearUsername()
    clearPassword()
  }

  const handleLogin = (event) => {
    event.preventDefault()
    blogService.login({ username, password })
      .then(response => {
        dispatch(createUser(response))
        blogService.setToken(response.token)
        window.localStorage.setItem('user', JSON.stringify(response))
        clearForm()
      })
      .catch( () => {
        dispatch(setNotification('wrong username or password'))
        clearPassword()
      })
  }

  return(
    <div id='login-container'>
      <h1>Log in to application:</h1>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input id='username-input' {...usernameObject}/>
        </div>
        <div>
          password:
          <input id='password-input' {...passwordObject}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm