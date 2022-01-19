import {combineReducers} from 'redux'
import { storytextReducer} from './storytextReducer'
import { storytextsReducer} from './storytextsReducer'
import { usersReducer} from './UsersReducer'
import {userReducer} from './UserReducer'
import {LoginFormReducer} from './LoginFormReducer'
import {signupReducer} from './signupReducer'
import {categoriesReducer} from './CategoriesReducer'




export const rootReducer = combineReducers({
users: usersReducer,
categories: categoriesReducer,
signup: signupReducer,
storytext: storytextReducer,
storytexts: storytextsReducer,
user: userReducer,
LoginFormReducer
})