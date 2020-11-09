import React from 'react'
import {useSelector} from 'react-redux'


const ActiveUser = () => {
    const user = useSelector(store => store.user)
    const handleLogout = () => {
        window.localStorage.removeItem('user')
        window.location.reload()
      }
    return (
        <div>
            <p>{user.name} logged in</p>
            <button onClick={handleLogout}>Logout</button>
      </div>
    )
}

export default ActiveUser