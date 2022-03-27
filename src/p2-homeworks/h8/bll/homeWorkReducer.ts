import {UsersType} from '../HW8';

type sortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type sortCheckType = {
    type: 'check'
    payload: number
}

type ActionsTypes = sortType | sortCheckType

export const homeWorkReducer = (state: UsersType, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case 'sort': {
            const newSortArray = state.map(el => {
                return {
                    ...el
                }
            })
            return action.payload === 'up' ? newSortArray.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
                : newSortArray.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
        }
        case 'check': {
            return state.filter(el => {
                if (el.age >= action.payload) {
                    return {
                        ...el
                    }
                }
            })
        }
        default:
            return state
    }
}
