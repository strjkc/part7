import React, { useState } from 'react'
import blogService from '../services/blogs'
import {updateBlog} from '../reducers/newBlogReducer'
import { useSelector, useDispatch } from 'react-redux'

const CreationForm = ({appendBlog}) => {
  const {title, author, content, url} = useSelector(store => store.blog)
  const dispatch = useDispatch()

  const submitBlog = (event) => {
    event.preventDefault()
    appendBlog({title, author, url, content})
    dispatch(updateBlog('CLEAR'))
  }
  return(
    <div>
      <h2>Create new</h2>
      <form onSubmit={submitBlog}>
        <div>
          title:
          <input id='title-input' type='text' value={title} onChange={({ target }) => dispatch(updateBlog('TITLE',target.value)) }></input>
        </div>
        <div>
          author:
          <input id='author-input' type='text' value={author} onChange={({ target }) => dispatch(updateBlog('AUTHOR',target.value)) }></input>
        </div>
        <div>
          content:
          <input id='content-input' type='text' value={content} onChange={({ target }) => dispatch(updateBlog('CONTENT',target.value))}></input>
        </div>
        <div>
          url:
          <input id='url-input' type='text' value={url} onChange={({ target }) => dispatch(updateBlog('URL',target.value)) }></input>
        </div>
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default CreationForm