import React from 'react'
import UserView from './UserView'
import FullBlog from './Blogs/FullBlog'
import BlogList from './Blogs/BlogsList'
import UserDashboard from './UserDashboard'
import {Switch, Route} from 'react-router-dom'

const RoutedBody = () => {
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
              <BlogList />
            </Route>
        </Switch>
    )
}

export default RoutedBody