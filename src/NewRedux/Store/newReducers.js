export const Action_FIRST = 'Action_FIRST';
export const Action_SECOND = 'Action_SECOND';

const initialState = {
    firstName: "Tom",
    secondName: "Jerry",
}

export const rootReducer = (state = initialState, action) =>{

    switch(action.type){
        case Action_FIRST : return{ ...state, firstName: action.payload};
        case Action_SECOND: return{ ...state, secondName: action.payload};
    }
    
return state;
}