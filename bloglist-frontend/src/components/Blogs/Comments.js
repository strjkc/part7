import React from 'react';
import CommentsForm from './CommentsForm'
import CommentList from './CommentList'

const Comments = ({ blogId, blog}) => {
    return(
        <section>
            <h3>Comments</h3>
            <CommentsForm blogId={blogId} />
            <CommentList blog={blog}/>
        </section>

    )
}

export default Comments