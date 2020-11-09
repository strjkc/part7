import React from 'react';
import CommentsForm from './CommentsForm'
import CommentList from './CommentList'

const Comments = ({ blogId}) => {
    return(
        <section>
            <h3>Comments</h3>
            <CommentsForm blogId={blogId} />
            <CommentList />
        </section>

    )
}

export default Comments