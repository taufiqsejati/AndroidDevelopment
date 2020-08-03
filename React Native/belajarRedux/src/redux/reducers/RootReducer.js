import {combineReducers} from 'redux'
import {userReducer} from './UserReducer'

// root reducer
export const rootReducer = combineReducers({
    userReducer,
})