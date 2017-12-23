import {combineReducers} from "redux";
import moviesReducers  from "./moviesReducers";
import moviesFilter from "./moviesFilter"
import paginationReducer from "./paginationReducer"
export default combineReducers({
    moviesReducers,
    moviesFilter,
    paginationReducer
})