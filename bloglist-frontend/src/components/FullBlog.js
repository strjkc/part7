import React from 'react'
import PropTypes from 'prop-types'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addOneBlog, createBlogs, likeBlog, removeBlog} from '../reducers/blogReducer'
import blogServices from '../services/blogs'
//TODO: concat new comment to state
const FullBlog = () => {
const dispatch = useDispatch()
const user = useSelector(store => store.user)
const matcher = useRouteMatch('/blogs/:id')
const blog = useSelector(store => store.blogs.find(blog => String(blog.id) === String(matcher.params.id)))

const submitComment = (e) => {
  e.preventDefault()
  const comment = {content: e.target.comment.value}
  blogServices.postComment(comment,matcher.params.id)
}
return (
    <div>
      { blog 
      ? <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <a href={blog.url} target='_blank'>{blog.url}</a>
          <div>
            <div style={{display: 'inline'}} id='likes'>{blog.likes} likes </div>
            <button onClick={ () => dispatch(likeBlog(blog)) }>Like</button>
          </div>
          {blog.user.username === user.username
          ? <button onClick={ () => dispatch(removeBlog(blog.id)) }>Remove</button>
          : <></>
          
          }
          <p>added by {blog.author}</p>
          <h3>Comments</h3>
          <form onSubmit={submitComment}>
          <input type='text' name='comment'></input>
          <button type='submit' >post</button>
          </form>
          <ul>
            {blog.comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
          </ul> 
        </div> 
      : <div></div>}
    </div>
  )
}

export default FullBlog