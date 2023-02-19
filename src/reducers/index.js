import {combineReducers} from 'redux'
import {reducerPost} from './posts'
import { reducerAuth } from './auth'

export default combineReducers({
    posts: reducerPost,
    auth: reducerAuth
})