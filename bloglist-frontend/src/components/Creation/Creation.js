import React, {useState} from 'react'
import CreationForm from './CreationForm'
import {Button} from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 70%;
`

const Creation = () => {
    const [displayCreation, setDisplayCreation] = useState(false)
    const displayCreationForm = { display: displayCreation ? '' : 'none' }
    return (
        <Wrapper >
            <div style={displayCreationForm}>
              <CreationForm setDisplayCreation={setDisplayCreation} />
            </div>
            <div style={{display: displayCreation ? 'none' : 'flex', justifyContent: 'center'}}>
                <Button variant='primary' onClick={() => setDisplayCreation(true)}>New blog</Button>
            </div>
        </Wrapper>
    )
}

export default Creation