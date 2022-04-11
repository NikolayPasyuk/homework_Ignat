export type initStateType = typeof initState

type ActionType = ReturnType<typeof loadingAC>

export const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING-INFORMATION': {
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'LOADING-INFORMATION', isLoading
    } as const
}