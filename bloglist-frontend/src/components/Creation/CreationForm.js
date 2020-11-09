import React from 'react'
import { useDispatch } from 'react-redux'
import {addOneBlog} from '../../reducers/blogReducer'
import {setNotification} from '../../reducers/notificationReducer'
import {useCreation} from '../../Hooks/index'

const CreationForm = () => {
 const [title, titleObject, titleClear] = useCreation('text')
 const [author, authorObject, authorClear] = useCreation('text')
 const [url, urlObject, urlClear] = useCreation('text')
 const dispatch = useDispatch()

  const appendBlog = (newBlog) => {
    dispatch(addOneBlog(newBlog))
    dispatch(setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`))       
    }

  const clearFields = () => {
    titleClear()
    urlClear()
    authorClear()
  }

  const submitBlog = (event) => {
    event.preventDefault()
    appendBlog({title, author, url})
    clearFields()
  }
  return(
    <div>
      <h2>Create new</h2>
      <form onSubmit={submitBlog}>
        <div>
          title:
          <input id='title-input' {...titleObject}></input>
        </div>
        <div>
          author:
          <input id='author-input' {...authorObject}></input>
        </div>
        <div>
          url:
          <input id='url-input' {...urlObject}></input>
        </div>
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default CreationForm