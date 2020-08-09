import {Action_NAME, Action_PHONE, Action_TITLE} from './ReducersSFunc'

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

export const changeTitle = () => {
    return{
        type: Action_TITLE,
        payload: "Заявка заполнена",
    }
}