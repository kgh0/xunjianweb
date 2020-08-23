// import { combineReducers } from "redux";
import {DO_LOGIN,REQUEST_POST} from "../action/actionTypes";



const LoginReduce = (state = { isFetching: false }, action) => {
    switch (action.type) {
        case REQUEST_POST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case DO_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data,
                error: action.error
            })
        default:
            return state;
    }
}

export default LoginReduce ;