import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import Main from './components/Main'
import {useDispatch, useSelector} from 'react-redux'
import {loadUser} from './reducers/userReducer'

const App = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect( () => {
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