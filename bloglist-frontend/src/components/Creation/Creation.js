import React, {useState} from 'react'
import CreationForm from './CreationForm'

const Creation = () => {
    const [displayCreation, setDisplayCreation] = useState(false)
    const displayCreationForm = { display: displayCreation ? '' : 'none' }
    return (
        <div>
            <div style={displayCreationForm}>
              <CreationForm />
            </div>
            <button onClick={() => setDisplayCreation(!displayCreation)}>{displayCreation ? 'Cancel' : 'New blog'}</button>
        </div>
    )
}

export default Creation