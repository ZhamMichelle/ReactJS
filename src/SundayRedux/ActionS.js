import {Action_NAME, Action_PHONE} from '../App'

export const changeName = (newName) =>{
    return{
        type: Action_NAME,
        payload: newName,
    }
}

export const changePhone = (newPhone) =>{
    return{
        type: Action_PHONE,
        payload: newPhone,
    }
}