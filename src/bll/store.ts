import {createStore, combineReducers} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

store.subscribe(()=> {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

type AppStoreType = typeof store