// import {Action_FIRST, Action_SECOND} from './../../App'

export const Action_FIRST = 'Action_FIRST';
export const Action_SECOND = 'Action_SECOND';
// export const Action_TITLE = 'Action_TITLE';

const initialState = {
    firstName: "Zhami",
    secondName: "Kettebek",
    // title: "Expression",
}

export const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case Action_FIRST : return{ ...state, firstName: action.payload};
        case Action_SECOND: return{ ...state, secondName: action.payload};
        // case Action_TITLE: return{ ...state, title: action.payload};
    }
    
return state;
}