import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {removeBlog} from '../../reducers/blogReducer'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const RemoveButton = ({blog}) => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const deleteBlog = () => {
        dispatch(removeBlog(blog.id))
        history.push('/')
    }

    return (
        <div>
            {blog.user.username === user.username
                ? <Button variant='danger' onClick={deleteBlog}>Remove</Button>
                : <></>
            }
        </div>

    )
}

export default RemoveButton