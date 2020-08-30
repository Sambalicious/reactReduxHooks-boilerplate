import { ADD_NUMBER, SUBSTRACT_NUMBER,  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./Types"


export const addNumber = (number=1)=>{
    return {
        type: ADD_NUMBER,
        payload: number
    }
}


export const SubstractNumber = (number=1) =>{
    return {
        type: SUBSTRACT_NUMBER,
        payload: number
    }
}



//////to make an action return a function, use Redux-Thunk eg

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const fetchUserSucess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUsers = () => {
    return (dispatch) =>{
        dispatch(fetchUserRequest)
        axios.get('https://jsonPlaceholder.typicode.com')
        .then(response=> dispatch(fetchUserSucess(response.data)) )
        .catch(error =>dispatch(fetchUserFailure(error.message)))
    }
}