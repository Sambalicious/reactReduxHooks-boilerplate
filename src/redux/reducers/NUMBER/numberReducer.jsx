
import { ADD_NUMBER, SUBSTRACT_NUMBER } from '../../Types';

export const initialstate = {
    number: 10
}
export const numberReducer = (state=initialstate, action)=>{
    switch (action.type) {
        case ADD_NUMBER : return {
            ...state, number: state.number + 1
        }
        case SUBSTRACT_NUMBER : return {
            ...state, number: state.number - 1
        }
         default: return state
    }
}