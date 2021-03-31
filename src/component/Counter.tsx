import React, {useState} from "react";
import '../App.css'
import {useDispatch, useSelector} from "react-redux";
import {decValueAC, incValueAC, resValueAC} from "../reducers/counterReducer";

const Counter = () => {

    const dispatch = useDispatch()
    const currentValue = useSelector((state: any) => state.counter.value)

    const incValueHandler = () => {
        dispatch(incValueAC(currentValue))
    }

    const decValueHandler = () => {
        dispatch(decValueAC(currentValue))
    }
    const resValueHandler = () => {
        dispatch(resValueAC())
    }

    return <div className={'counter'}>
        <div className={'value'}>
            Current value : {currentValue}
        </div>
        <button className={'inc'}
                onClick={() => incValueHandler()}
        >
            inc
        </button>
        <button className={'dec'}
                onClick={() => decValueHandler()}
        >
            dec
        </button>
        <button className={'res'}
                onClick={() => resValueHandler()}
        >
            res
        </button>
    </div>
}

export default Counter