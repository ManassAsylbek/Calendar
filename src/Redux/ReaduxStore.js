import {combineReducers, legacy_createStore} from "redux";
import mainReducer from "./Reducer/mainReducer";

let reducers = combineReducers({
    mainPage: mainReducer
})


let store = legacy_createStore(reducers);//создаем сторе

window.store = store;

export default store