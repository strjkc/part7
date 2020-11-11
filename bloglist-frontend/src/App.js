import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import Main from './components/Main'
import {useDispatch, useSelector} from 'react-redux'
import {loadUser} from './reducers/userReducer'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: fex;
  width: 70%;
  margin: auto;
`

const App = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect( () => dispatch(loadUser()), [dispatch])

  return (
    <Wrapper>
      {
        user === null
          ? <Login />
          : <Main />
      }
    </Wrapper>
  )
}

export default App