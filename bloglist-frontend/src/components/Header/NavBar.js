import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/users'>users</Link>
            <Link to='/'>blogs</Link>
        </div>
    )
}

export default NavBar