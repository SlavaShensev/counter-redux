import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className="App">
            {value}
            <button onClick={() => {
                incHandler()
            }}>
                inc
            </button>
        </div>
    );
}

export default App;
