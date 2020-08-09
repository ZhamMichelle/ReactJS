// import {Action_NAME, Action_PHONE, Action_TITLE} from '../App'
import TotalFunc from './TotalFunc.js';

export const Action_NAME = 'Action_NAME';
export const Action_PHONE = 'Action_PHONE';
export const Action_TITLE = 'Action_TITLE';

 export const initialState = {
    Name: "Spange Bob",
    Phone: "87771818688",
    Title: "Заполните заявку",
}

export const rootReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case Action_NAME : return{ ...state, Name: action.payload};
        case Action_PHONE: return{ ...state, Phone: action.payload};
        case Action_TITLE: return{ ...state, Title: action.payload};
        default:
        // do nothing
    }
return state;
}