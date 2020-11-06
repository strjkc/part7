import React from 'react'
import { useSelector } from 'react-redux'
import {useRouteMatch} from 'react-router-dom'

const UserView = () => {
  const matcher = useRouteMatch('/users/:id')
  const blogs = useSelector(store => store.blogs.filter(blog => String(blog.user.id) === String(matcher.params.id)))

  return (
    <div>
      {blogs[0] ?
      <h1>{blogs[0].user.name}</h1>
      : <p></p>
}
      <h3>added blogs</h3>
      <ul>
        {blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
      </ul>
    </div>
  )
}

export default UserView