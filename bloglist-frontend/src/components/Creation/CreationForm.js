import React from 'react'
import { useDispatch } from 'react-redux'
import {addOneBlog} from '../../reducers/blogReducer'
import {setNotification} from '../../reducers/notificationReducer'
import {useCreation} from '../../Hooks/index'
import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'

const ButtonsGroup = styled.div`
  display: flex; 
  justify-content: center;
  > * {
    width: 80px;
    margin: 5px 5px;
  }
`

const CreationForm = ({setDisplayCreation}) => {
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
    setDisplayCreation(false)
  }
  return(
    <div>
      <h2>Create new</h2>
      <Form onSubmit={submitBlog}>
        <Form.Control id='title-input' placeholder='Title' {...titleObject}></Form.Control>
        <Form.Control id='author-input' placeholder='Author' {...authorObject}></Form.Control>
        <Form.Control id='url-input' placeholder='Url' {...urlObject}></Form.Control>
        <ButtonsGroup>
          <Button type='submit'>Post</Button>
          <Button variant='danger' onClick={() => setDisplayCreation(false)}>Cancel</Button>
        </ButtonsGroup>
      </Form>
    </div>
  )
}

export default CreationForm