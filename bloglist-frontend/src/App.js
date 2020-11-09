import React, { useEffect } from 'react'
import blogService from './services/blogs'
import Login from './components/Login'
import Main from './components/Main'
import {useDispatch, useSelector} from 'react-redux'
import {createUser, loadUser} from './reducers/userReducer'

const App = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()
  useEffect( () => {
    console.log('user',user)
      dispatch(loadUser())
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