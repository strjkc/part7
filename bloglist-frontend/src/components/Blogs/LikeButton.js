import React from 'react';
import {likeBlog} from '../../reducers/blogReducer'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'


const LikeButton = ({blog}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <p style={{display: 'inline'}} id='likes'>{blog.likes} likes </p>
            <Button onClick={ () => dispatch(likeBlog(blog)) }>Like</Button>
        </div>
    )
}

export default LikeButton