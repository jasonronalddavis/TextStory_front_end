import {combineReducers} from 'redux'
import { storytextReducer} from './storytextReducer'
import { usersReducer} from './UsersReducer'
import {userReducer} from './UserReducer'
import {LoginFormReducer} from './LoginFormReducer'
import {signupReducer} from './signupReducer'




export const rootReducer = combineReducers({
users: usersReducer,
signup: signupReducer,
storytexts: storytextReducer,
user: userReducer,
LoginFormReducer
})