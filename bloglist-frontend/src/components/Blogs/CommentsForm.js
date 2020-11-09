import React from 'react';

import {postComments} from '../../reducers/commentReducer'
import {useDispatch} from 'react-redux'

const CommentsForm = ({blogId}) => {
    const dispatch = useDispatch()
    const submitComment = (e) => {
        e.preventDefault()
        const comment = {content: e.target.comment.value}
        dispatch(postComments(comment, blogId))
      }

    return(
        <form onSubmit={submitComment}>
            <input type='text' name='comment'></input>
            <button type='submit'>post</button>
        </form>
    )
}

export default CommentsForm 