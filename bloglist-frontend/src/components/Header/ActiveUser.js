import React from 'react'
import {useSelector} from 'react-redux'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background-color: #e0e0e0;
  border-radius: 5px;
  align-items: center;
  padding: 5px;

`

const P = styled.p`
  margin: 0;
  padding: 0 5px 0 0;
`

const ActiveUser = () => {
    const user = useSelector(store => store.user)
    const handleLogout = () => {
        window.localStorage.removeItem('user')
        window.location.reload()
      }
    return (
      <Container>
        <P>{user.name} logged in</P>
        <Button variant='danger' onClick={handleLogout}>Logout</Button>
      </Container>
    )
}

export default ActiveUser