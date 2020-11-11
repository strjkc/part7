import React from 'react';
import {commentBlog} from '../../reducers/blogReducer'
import {useDispatch} from 'react-redux'
import {Form, Button} from 'react-bootstrap'

const CommentsForm = ({blogId}) => {
    const dispatch = useDispatch()
    const submitComment = (e) => {
        e.preventDefault()
        if (e.target.comment.value.trim() === '')
          return
        const comment = {content: e.target.comment.value}
        dispatch(commentBlog(comment, blogId))
        e.target.comment.value = ''
      }

    return(
        <Form onSubmit={submitComment}>
            <Form.Control type='text' name='comment'></Form.Control>
            <Button type='submit'>Post</Button>
        </Form>
    )
}

export default CommentsForm 