import axios from 'axios';


type CheckboxType = {
    errorText: string,
    info: string,
    yourBody: { success: boolean },
    yourQuery: {}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/'
})

export const requestsAPI = {
    createCheckbox(success: boolean) {
        return instance.post<CheckboxType>('test', {success})
    }
}