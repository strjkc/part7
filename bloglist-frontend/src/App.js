import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Login from './components/Login'
import Main from './components/Main'
import {setNotification, removeNotification} from './reducers/notificationReducer'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  const [user, setUser] = useState(null)
  const notification = useSelector(store => store.notif)
  //const [notification, setNotification] = useState(null)
  const dispatch = useDispatch()

  const displayNotification = (text) => {
    dispatch(setNotification(text))
    setTimeout(() => dispatch(removeNotification()), 3000)
  }

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
          ? <Login notification={{ notification, displayNotification }} user={{ user, setUser }}/>
          : <Main notification={{ notification, displayNotification }}  user={ user }/>
      }
    </div>
  )
}

export default App