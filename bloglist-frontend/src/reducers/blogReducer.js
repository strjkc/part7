import blogServices from '../services/blogs'

const blogReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_ALL':
      return action.data
    case 'ADD_ONE':
      return state.concat(action.data)
    case 'REMOVE':
      return state.filter(blog => blog.id !== action.data)
    case 'LIKE':
      return state.map(blog => blog.id !== action.data.id ? blog : action.data).sort((a, b) => b.likes - a.likes)
    case 'COMMENT':
      const oldBlog = state.find(blog => blog.id === action.data.blog)
      const newBlog = {...oldBlog, comments: oldBlog.comments.concat({content: action.data.content, id: action.data.id})}
      return  state.map(blog => blog.id === action.data.blog ? newBlog : blog)
    default:
      return state
  }
}

export const createBlogs = () => {
  return async dispatch => {
    const data = await blogServices.getAll()
    dispatch(
      {
        type: 'ADD_ALL',
        data
      }
    )
  }
}

export const addOneBlog = (content) => {
  return async dispatch => {
    const data = await blogServices.createBlog(content)
    dispatch({
      type: 'ADD_ONE',
      data
    })
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    const data = await blogServices.updateLikes(blog)
    dispatch({
      type: 'LIKE',
      data
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogServices.deleteBlog(id)
    dispatch({
      type: 'REMOVE',
      data: id
    })
  }
} 

export const commentBlog = (content, id) => {
  return async dispatch => {
    const resp = await blogServices.postComment(content, id)
    console.log('resp',resp)
    dispatch(
      {
        type: 'COMMENT',
        data: resp
    }
    )
  }
}

export default blogReducer