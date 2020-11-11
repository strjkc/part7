import React from 'react'
import {Link} from 'react-router-dom'

const Blog = ({ blog }) => {

  return (
    <tr>
      <td>
        <Link to={`/blogs/${blog.id}`}>{ blog.title }</Link>
      </td>
    </tr>
  )
}
export default Blog
