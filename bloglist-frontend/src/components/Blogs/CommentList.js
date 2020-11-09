import React from 'react';
import {useSelector} from 'react-redux'

const CommentList = () => {
    const comments = useSelector(store => store.comments)
    return (
        <ul>
            {comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
        </ul> 
    )
}

export default CommentList