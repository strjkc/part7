import React from 'react'
import {setNotification} from '../../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import {createUser} from '../../reducers/userReducer'
import {useCreation} from '../../Hooks/index'
import {Form, Button} from 'react-bootstrap'

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
      <Form onSubmit={handleLogin}>
          <Form.Control id='username-input' placeholder='Username' {...usernameObject}/>
          <Form.Control id='password-input' placeholder='Password' {...passwordObject}/>
        <Button variant='primary' type='submit'>Login</Button>
      </Form>
    </div>
  )
}

export default LoginForm