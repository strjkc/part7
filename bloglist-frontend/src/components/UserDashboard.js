import React, { useEffect, useState } from 'react'
import DataRow from './DataRow'
import userServices from '../services/users' 
import { useSelector } from 'react-redux'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'

const H2 = styled.h2`
  width: 100%;
  text-align: left;
`

const UserDashboard = () => {
const [users, setUsers] = useState([])
const blogs = useSelector(store => store.blogs)

useEffect(() => {
  userServices.getAll()
.then(resp => setUsers(resp))
}, [blogs])

  return(
    <div>
      <H2>Users</H2>
      <Table striped bordered hover >
        <tbody>
          <tr>
            <td></td>
            <td><strong>blogs created</strong></td>
          </tr>
          {users.map(user => <DataRow key={user.id} user={user} />)}
        </tbody>
      </Table>
    </div>
  )

}

export default UserDashboard