import {Action_NAME, Action_PHONE} from '../App'

const initialState = {
    Name: "Spange Bob",
    Phone: "87771818688",
}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case Action_NAME : return{ ...state, Name: action.payload};
        case Action_PHONE: return{ ...state, Phone: action.payload};
        default:
        // do nothing
    }
return state;
}