import { LOG_IN, LOG_OUT } from "../../Types";

export const initialState = {
    loading: true,
    authData: [],
    error: '',
    isLoggedIn:false
}

export const authReducer = (state=initialState, action) =>{
    switch (action.type) {
        case LOG_IN: return{
            ...state,
             authData: action.payload,
             isLoggedIn:true,
            loading:false
        }    
        case LOG_OUT: return{
            ...state,
             authData: [],
             isLoggedIn:false,
            loading:false
        }    
        default: return state
    }
}