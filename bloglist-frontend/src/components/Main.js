import React, {useEffect } from 'react'
import Notification from './Notification'
import Creation from './Creation/Creation'
import {useDispatch} from 'react-redux'
import {createBlogs} from '../reducers/blogReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header/Header'
import RoutedBody from './RoutedBody'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > * {
    margin: 10px 0;
  }
`

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() =>
      {dispatch(createBlogs())}
    , [dispatch])

  return (
    <Container>
      <Router>
        <Header />
        <Notification />
        <Creation />
        <RoutedBody />
      </Router>      
    </Container>
  )
}

export default Main