import { REQUEST_POST, GET_MENU, Side_Collapse } from "../action/actionTypes";


const MainReducer = (state = { isFetching: false, collapsed: false }, action) => {

    switch (action.type) {
        case REQUEST_POST:
            return {
                ...state,
                isFetching: true
            };
        case GET_MENU:
            debugger;
            return {
                ...state,
                isFetching: false,
                data: action.data,
                error: action.error
            }
        case Side_Collapse:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state;
    }
}
export default MainReducer;