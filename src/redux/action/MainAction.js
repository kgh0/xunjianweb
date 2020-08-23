import { baseUrl } from "./constant";
import { REQUEST_POST, GET_MENU,Side_Collapse } from "./actionTypes"
import fetch from "../../utils/fetch.js";

// 发起请求
const requestPosts = () => {
    return {
        type: REQUEST_POST
    }
};


//通知 reducer 请求成功的 action
const receviePost = (data) => {
    return {
        type: GET_MENU,
        data
    }
}

export const getMenus = (username) => {
    return (dispatch) => {
        let url =baseUrl +"/menu/getMenus/";
        // let url = "/menu/getMenus/";
        dispatch(requestPosts());
        fetch(url, {
            method: "Get"
        }).then(rs => {
            debugger;
            if(rs.error_status){
                dispatch(receviePost(0));
            }else{
                dispatch(receviePost(rs));
            }
        })
    }
}


export const SideCollapse = () => {
    return {
        type: Side_Collapse
    }
}
