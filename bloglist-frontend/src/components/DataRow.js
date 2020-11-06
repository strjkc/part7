import React from 'react'

const DataRow = ({user}) => {
  console.log(user.name)
  return(
    <tr>
      <td>{user.name}</td>
      <td>{user.blogs.length}</td>  
    </tr>
  )
}

export default DataRow