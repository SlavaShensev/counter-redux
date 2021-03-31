const INC_VALUE = 'INC_VALUE'
const DEC_VALUE = 'DEC_VALUE'
const RES_VALUE = 'RES_VALUE'

const initionState = {

    value: 0

}

export const counterReducer = (state = initionState, action: any) => {

    switch (action.type) {
        case INC_VALUE:
            return {
                ...state,
                value: ++action.payload

            }
        case DEC_VALUE:
            return {
                ...state,
                value: --action.payload
            }
        case RES_VALUE:
            return {
                ...state,
                value:  0
            }

        default:
            return state
    }
}


export const incValueAC = (value: number) => ({type: INC_VALUE, payload: value})
export const decValueAC = (value: number) => ({type: DEC_VALUE, payload: value})
export const resValueAC = () => ({type: RES_VALUE})