import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import Notification from './Notification'
import CreationForm from './CreationForm'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import {useDispatch, useSelector} from 'react-redux'
import {addOneBlog, createBlogs, likeBlog, removeBlog} from '../reducers/blogReducer'
import UserDashboard from './UserDashboard'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import UserView from './UserView'
import FullBlog from './FullBlog'


const Main = () => {
  const [displayCreation, setDisplayCreation] = useState(false)
  const blogs = useSelector(store => store.blogs)
  const notification = useSelector(store => store.notif)
  const dispatch = useDispatch()
  const displayCreationForm = { display: displayCreation ? '' : 'none' }
  const user = useSelector(store => store.user)

  useEffect(() =>
      {dispatch(createBlogs())}
    , [])
  //displays the notification element if the state of the notification text is not null
  const showNotification = () => {
    if (notification !== null)
      return <Notification notificationText={notification}/>
  }
  const handleLogout = () => {
    window.localStorage.removeItem('user')
    window.location.reload()
  }

  const appendBlog = (newBlog) => {
    dispatch(addOneBlog(newBlog))
    dispatch(setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`))       
    }
//TODO: create Header component, Body component
  return (
    <div>
    <Router>
      <Link to='/users'>users</Link>
      <Link to='/'>blogs</Link>
      <div style={{display:'inline-block'}}>
        {user.name} logged in
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>blogs</h2>
      {showNotification()}
      <button onClick={() => setDisplayCreation(!displayCreation)}>{displayCreation ? 'Cancel' : 'New blog'}</button>

      <div style={displayCreationForm}>
          <CreationForm appendBlog={appendBlog}/>
        </div>
        <Switch>
          <Route path='/users/:id'>
            <UserView />
          </Route>
          <Route path='/blogs/:id'>
            <FullBlog />
          </Route>
          <Route path='/users'>
            <UserDashboard />
          </Route>
          <Route path='/'>
            <div id='blog-container'>
              {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
              <Blog key={blog.id} blog={blog} user={user} />
              )}
            </div>
          </Route>
        </Switch>
      </Router>      
    </div>
  )
}

export default Main