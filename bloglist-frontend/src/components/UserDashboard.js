import React, { useEffect, useState } from 'react'
import DataRow from './DataRow'
import userServices from '../services/users' 
import { useSelector } from 'react-redux'

const UserDashboard = () => {
const [users, setUsers] = useState([])
const blogs = useSelector(store => store.blogs)

useEffect(() => {
  userServices.getAll()
.then(resp => setUsers(resp))
}, [blogs])

console.log(users)
  return(
    <div>
      <h1>Users</h1>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><strong>blogs created</strong></td>
          </tr>
          {users.map(user => <DataRow user={user} />)}
        </tbody>
      </table>
    </div>
  )

}

export default UserDashboard