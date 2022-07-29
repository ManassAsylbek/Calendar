import {combineReducers, legacy_createStore} from "redux";

let reducers = combineReducers({
header:headerReducer
})


let store = legacy_createStore(reducers);//создаем сторе

window.store=store;

export default store