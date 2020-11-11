import React from 'react';

import {postComments} from '../../reducers/commentReducer'
import {useDispatch} from 'react-redux'
import {Form, Button} from 'react-bootstrap'

const CommentsForm = ({blogId}) => {
    const dispatch = useDispatch()
    const submitComment = (e) => {
        e.preventDefault()
        const comment = {content: e.target.comment.value}
        dispatch(postComments(comment, blogId))
      }

    return(
        <Form onSubmit={submitComment}>
            <Form.Control type='text' name='comment'></Form.Control>
            <Button type='submit'>Post</Button>
        </Form>
    )
}

export default CommentsForm 