import fetch from 'cross-fetch';
import { baseUrl } from "./constant";
import {DO_LOGIN,REQUEST_POST} from "./actionTypes"

// const headers = {
//     "Content-Type": "application/json; charset=UTF-8"
// };


// 发起请求
const requestPosts = () => {
    return {
        type: REQUEST_POST,
    }

};


//通知 reducer 请求成功的 action
const receviePostOn = (data) => {
    return {
        type: DO_LOGIN,
        data: data
    }
}

//action fun xhr查询。
export const getUser = (username, password)=> {
     
    return (dispatch) => {
        let url = baseUrl + "/user/login/" + username + "/" + password;
        // let url = "/user/login/" + username + "/" + password;
        dispatch(requestPosts());
        fetch(url,{
            method:"Get"
            // ,// 使用代理进行访问
            // mode:"cors"
        }).then(rs => {
            dispatch(receviePostOn(rs));
        })
    }
}



