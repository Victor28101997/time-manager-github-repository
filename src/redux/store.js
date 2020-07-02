import {createStore} from "redux";
import {activities} from "./reducers";
import {combineReducers} from 'redux'

let store = createStore(combineReducers({activities}))

export default store;