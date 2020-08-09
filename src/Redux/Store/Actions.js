import {Action_FIRST, Action_SECOND} from './Reducers'

export const changeFirstName = (newFirstName) =>{

    return{
        type: Action_FIRST,
        payload: newFirstName,
    }
}

export const changeSecondName = (newSecondName) =>{
    return{
        type: Action_SECOND,
        payload: newSecondName,
    }
}
