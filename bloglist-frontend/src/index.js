import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import notif from './reducers/notificationReducer'
import blogs from './reducers/blogReducer'
import user from './reducers/userReducer'
import comments from './reducers/commentReducer'

const reducer = combineReducers({
  notif,
  blogs,
  user,
  comments
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'))