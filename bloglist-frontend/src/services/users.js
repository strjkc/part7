import axios from 'axios'

const getAll = async () =>{
 const users =  await axios.get('/api/users')
 return users.data
}

export default {getAll}