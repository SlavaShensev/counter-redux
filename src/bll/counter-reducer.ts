const initialState = {
    value: 100
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }

        default:
            return state

    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({
    type: 'SET-VALUE-FROM-LOCAL-STORAGE',
    value
} as const)

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

type ActionType = IncValuesActionType | SetValueFromLocalStorageActionType