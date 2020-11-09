import React from 'react'
import UserView from './UserView'
import FullBlog from './FullBlog'
import Blog from './Blog'
import UserDashboard from './UserDashboard'
import {Switch, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

const RoutedBody = () => {
    const blogs = useSelector(store => store.blogs)
    const user = useSelector(store => store.user)

    return(
        <Switch>
            <Route path='/users/:id'>
              <UserView />
            </Route>
            <Route path='/blogs/:id'>
              <FullBlog />
            </Route>
            <Route path='/users'>
              <UserDashboard />
            </Route>
            <Route path='/'>
              <div id='blog-container'>
                {blogs.sort((a, b) => b.likes - a.likes).map(blog =>
                <Blog key={blog.id} blog={blog} user={user} />
                )}
              </div>
            </Route>
        </Switch>
    )
}

export default RoutedBody