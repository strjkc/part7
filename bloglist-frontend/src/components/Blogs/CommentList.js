import React from 'react';

const CommentList = ({blog}) => {
    console.log('blog',blog)
    return (
        <ul>
            {blog.comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
        </ul> 
    )
}

export default CommentList