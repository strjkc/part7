import React from 'react';
import {likeBlog} from '../../reducers/blogReducer'
import {useDispatch} from 'react-redux'


const LikeButton = ({blog}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <p style={{display: 'inline'}} id='likes'>{blog.likes} likes </p>
            <button onClick={ () => dispatch(likeBlog(blog)) }>Like</button>
        </div>
    )
}

export default LikeButton