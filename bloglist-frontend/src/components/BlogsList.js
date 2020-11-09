import React from 'react';
import {useSelector} from 'react-redux'
import Blog from './Blog';

const BlogList = () => {
    const blogs = useSelector(store => store.blogs)
    const user = useSelector(store => store.user)


    return (
        <div id='blog-container'>
            {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
            <Blog key={blog.id} blog={blog} user={user} />
        )}
      </div>
    )
}

export default BlogList 