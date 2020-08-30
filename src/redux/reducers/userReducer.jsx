import  { FETCH_USER_SUCCESS,FETCH_USER_REQUEST, FETCH_USER_FAILURE } from '../action'




 const initialState = {
    users: [],
    loading:false,
    error: []
}

export const UserState = (state=initialState, action) =>{


switch (action.type) {
    case FETCH_USER_REQUEST:
        return {
            ...state, loading: true
        }

        case FETCH_USER_SUCCESS: 
        return {
            ...state, users:action.payload
        }

        case FETCH_USER_FAILURE :
            return {
                ...state, error: action.payload
            }
       

    default: return state;
        
}

}