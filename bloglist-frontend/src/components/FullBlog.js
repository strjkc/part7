import React from 'react'
import PropTypes from 'prop-types'

import {useDispatch, useSelector} from 'react-redux'
import {addOneBlog, createBlogs, likeBlog, removeBlog} from '../reducers/blogReducer'
const FullBlog = ({ blog, user }) => {
const dispatch = useDispatch()
  return (
    <div>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
      <p>{blog.url}</p>
      <div>
        <div id='likes'>{blog.likes}</div>
        <button onClick={ () =>     dispatch(likeBlog(blog)) }>Like</button>
      </div>
      {blog.user.username === user.username
      ? <button onClick={ () => dispatch(removeBlog(blog.id)) }>Remove</button>
      : <></>
    }
    </div>
  )
}

FullBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default FullBlog