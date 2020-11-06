import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Login from './components/Login'
import Main from './components/Main'
import {setNotification, removeNotification} from './reducers/notificationReducer'
import {useDispatch, useSelector} from 'react-redux'
import {createUser} from './reducers/userReducer'

const App = () => {
  //const [user, setUser] = useState(null)
  const notification = useSelector(store => store.notif)
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  useEffect( () => {
    const savedUser = window.localStorage.getItem('user')
    if(savedUser)
    {
      dispatch(createUser(JSON.parse(savedUser)))
      blogService.setToken(JSON.parse(savedUser).token)
    }
  }, [])

  return (
    <div>
      {
        user === null
          ? <Login />
          : <Main />
      }
    </div>
  )
}

export default App