import {combineReducers} from 'redux'
import { authReducer } from './Auth'
import { numberReducer } from './NUMBER/numberReducer'


export const rootReducer = combineReducers({
    auth: authReducer,
    number: numberReducer
})