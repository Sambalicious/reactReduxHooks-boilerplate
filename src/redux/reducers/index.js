import {combineReducers} from 'redux'
import { authReducer } from './Auth'
import { numberReducer } from './NUMBER/numberReducer'
import { UserState } from './userReducer'


export const rootReducer = combineReducers({
    auth: authReducer,
    number: numberReducer,
    users:UserState
})