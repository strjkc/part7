import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import Notification from './Notification'
import CreationForm from './CreationForm'
import blogService from '../services/blogs'
import {setNotification} from '../reducers/notificationReducer'
import {useDispatch, useSelector} from 'react-redux'
import {addOneBlog, createBlogs} from '../reducers/blogReducer'

const Main = ({ user }) => {
  const [displayCreation, setDisplayCreation] = useState(false)
  const blogs = useSelector(store => store.blogs)
  const notification = useSelector(store => store.notif)
  const dispatch = useDispatch()
  const displayCreationForm = { display: displayCreation ? '' : 'none' }

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

  const handleLikes = (blog) => {
/*    blogService.updateLikes(blog)
      .then(response => setBlogs(blogs.map(blog => blog.id === response.id ? response : blog).sort((a, b) => b.likes - a.likes)))
*/
    }

  const removeBlogs = (blog) => {
/*
    const blogToRemove = blog
   if(window.confirm(`Remove blog ${blogToRemove.title} by ${blogToRemove.author}`))
      blogService.deleteBlog(blogToRemove.id)
        .then(setBlogs(blogs.filter(blog => blog.id !== blogToRemove.id)))
*/
      }

  const appendBlog = (newBlog) => {
    dispatch(addOneBlog(newBlog))
    dispatch(setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`))       
    
    /*
    blogService.createBlog(newBlog)
      .then( response => {
        setDisplayCreation(false)
        setBlogs(blogs.concat(response))
      })
*/
    }

  return (
    <div>
      <h2>blogs</h2>
      {showNotification()}
      <div>
        {user.name} logged in
        <button onClick={handleLogout}>Logout</button>
        <div style={displayCreationForm}>
          <CreationForm appendBlog={appendBlog}/>
        </div>
        <button onClick={() => setDisplayCreation(!displayCreation)}>{displayCreation ? 'Cancel' : 'New blog'}</button>
      </div>
      <div id='blog-container'>
        {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
        <Blog key={blog.id} blog={blog} user={user} functions={{ removeBlogs, handleLikes }} />
        )}
      </div>
    </div>
  )
}

export default Main