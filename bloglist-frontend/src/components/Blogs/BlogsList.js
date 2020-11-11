import React from 'react';
import {useSelector} from 'react-redux'
import Blog from './Blog';
import {Table} from 'react-bootstrap'
import styled from 'styled-components'

const H2 = styled.h2`
  width: 100%;
  textAlign: left;
`

const BlogList = () => {
    const blogs = useSelector(store => store.blogs)
    const user = useSelector(store => store.user)


    return (
        <>
            <H2>Blogs</H2>
            <Table striped bordered hover>
                <tbody>
                {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
                <Blog key={blog.id} blog={blog} user={user} />
                )}
                </tbody>
            </Table>
        </>
    )
}

export default BlogList 