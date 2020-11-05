import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Login from './components/Login'
import Main from './components/Main'
import {setNotification, removeNotification} from './reducers/notificationReducer'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  const [user, setUser] = useState(null)


  useEffect( () => {
    const savedUser = window.localStorage.getItem('user')
    if(savedUser)
    {
      setUser(JSON.parse(savedUser))
      blogService.setToken(JSON.parse(savedUser).token)
    }
  }, [])

  return (
    <div>
      {
        user === null
          ? <Login user={{ user, setUser }}/>
          : <Main user={ user }/>
      }
    </div>
  )
}

export default App