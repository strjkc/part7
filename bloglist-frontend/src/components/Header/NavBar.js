import React from 'react'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'

const NavBar = () => {

    return (
        <Nav variant='pills' defaultActiveKey='blogs'>
            <Nav.Item>
                <Nav.Link as={Link} to='/' eventKey='blogs' >
                    Blogs                
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/users' eventKey='users'>
                    Users
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar