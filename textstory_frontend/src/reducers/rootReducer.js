import {combineReducers} from 'redux'
import { storytextReducer} from './storytextReducer'
import { usersReducer} from './UsersReducer'
import {userReducer} from './UserReducer'
import {LoginFormReducer} from './LoginFormReducer'



export const rootReducer = combineReducers({
userReducer,
users: usersReducer,
storytexts: storytextReducer,
user: userReducer,
LoginFormReducer
})