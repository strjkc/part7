const initial = {title: '', author: '', content: '', url: ''}
const newBlogReducer = (state = initial, action) => {
  switch(action.type){
    case 'TITLE':
      return {...state, title: action.data}
    case 'AUTHOR':
      return {...state, author: action.data}
    case 'CONTENT':
      return {...state, content: action.data}
    case 'URL':
      return {...state, url: action.data}
    case 'CLEAR':
      return initial
    default:
      return state
  }
}

export const updateBlog = (type, content) => {
  return {
    type,
    data: content 
  }
}

export default newBlogReducer