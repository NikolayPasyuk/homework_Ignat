export type initStateType = typeof initState
type ActionType = ReturnType<typeof changeThemeC>


const initState = {
    theme: 'some'
};

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case 'THEMES_TYPES': {
            return {
                ...state,
                theme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => {
    return {
        type: 'THEMES_TYPES', theme
    } as const
};