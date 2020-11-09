import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {removeBlog} from '../../reducers/blogReducer'

const RemoveButton = ({blog}) => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    return (
        <div>
            {blog.user.username === user.username
                ? <button onClick={ () => dispatch(removeBlog(blog.id)) }>Remove</button>
                : <></>
            }
        </div>

    )
}

export default RemoveButton