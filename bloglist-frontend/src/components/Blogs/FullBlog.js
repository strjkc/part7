import React, { useEffect } from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {initComments} from '../../reducers/commentReducer'
import Comments from './Comments'
import LikeButton from './LikeButton'
import RemoveButton from './RemoveButton'

const FullBlog = () => {
const dispatch = useDispatch()
const matcher = useRouteMatch('/blogs/:id')
const blog = useSelector(store => store.blogs.find(blog => String(blog.id) === String(matcher.params.id)))
useEffect(() => {
  console.log('running')
  if (blog)
    dispatch(initComments(blog.comments))
})

return (
    <div>
      { blog 
      ? <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <a href={blog.url} target='_blank' rel="noopener noreferrer">{blog.url}</a>
          <LikeButton blog={blog} />
          <RemoveButton blog={blog} />
          <p>added by {blog.author}</p>
          <Comments blogId={matcher.params.id} blog={blog} />
        </div> 
      : <></>}
    </div>
  )
}

export default FullBlog