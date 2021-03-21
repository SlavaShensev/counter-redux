import {createStore, combineReducers} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let preloadedState

const persistedTodoString = localStorage.getItem('app-state')
if(persistedTodoString) {
    preloadedState = JSON.parse(persistedTodoString)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(()=> {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

type AppStoreType = typeof store