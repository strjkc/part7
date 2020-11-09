import React, {useEffect } from 'react'
import Notification from './Notification'
import Creation from './Creation'
import {useDispatch} from 'react-redux'
import {createBlogs} from '../reducers/blogReducer'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './Header/Header'
import RoutedBody from './RoutedBody'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() =>
      {dispatch(createBlogs())}
    , [])

  return (
    <div>
      <Router>
        <Header />
        <h2>blogs</h2>
        <Notification />
        <Creation />
        <RoutedBody />
      </Router>      
    </div>
  )
}

export default Main