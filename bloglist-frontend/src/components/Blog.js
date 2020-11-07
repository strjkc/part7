import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Blog = ({ blog, functions, user }) => {
  const [displayBlog, setDisplayBlog] = useState(false)
  const showFullBlog = { display: displayBlog ? '' : 'none' }

  const blogStyle = {
    border: '1px black solid',
    padding: '5px',
    margin: '3px 0 3px 0'
  }

  return (
    <div className='blogContainer' style={blogStyle}>
      <Link to={`/blogs/${blog.id}`}>{ blog.title }</Link>
    </div>
  )
}
export default Blog
