import React from 'react'
import ActiveUser from './ActiveUser'
import NavBar from './NavBar'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  `

const Header = () => {
    return(
        <Container>
            <NavBar />
            <ActiveUser />
        </Container>
    )
}

export default Header