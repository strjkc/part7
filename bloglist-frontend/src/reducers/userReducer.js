const userReducer = (state = null, action) => {
  switch(action.type){
    case 'ADD_USER':
      return action.data
    case 'REMOVE_USER':
      return null
    default:
      return state
  }
}

export const createUser = (content) => {
  return {
    type: 'ADD_USER',
    data: content
  }
}


export default userReducer