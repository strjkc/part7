import blogService from '../services/blogs'

const userReducer = (state = null, action) => {
  switch(action.type){
    case 'ADD_USER':
      return action.data
    default:
      return state
  }
}

export const createUser = (user) => {
  return async dispatch => {
      const response = await blogService.login(user)
      dispatch ({
        type: 'ADD_USER',
        data: response
      })
      window.localStorage.setItem('user', JSON.stringify(response))
      blogService.setToken(response.token)
  }
}

export const loadUser = () => {
  return dispatch => {
    const savedUser = window.localStorage.getItem('user')
    if (savedUser){
      dispatch({
        type: 'ADD_USER',
        data: JSON.parse(savedUser)
      })
      blogService.setToken(JSON.parse(savedUser).token)
    }
  }
}

export default userReducer