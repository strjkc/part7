import blogServices from '../services/blogs'


const commentReducer = (state=[], action) => {
    switch(action.type){
        case 'INIT_COMMENTS':
            return action.data
        case 'POST_COMMENT':
            return state.concat(action.data)
        default: 
        return state
    }
}

export const initComments = (content) => {
    return {
        type: 'INIT_COMMENTS',
        data: content
    }
}


export const postComments = (content, id) => {
    return async dispatch => {
        const resp = await blogServices.postComment(content, id)
        dispatch(
            {
                type: 'POST_COMMENT',
                data: resp
            }
        )
    }
}

export default commentReducer