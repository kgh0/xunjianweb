import fetch from 'cross-fetch';
const _fetch = (url,op)=>{
    return fetch(url,op).then(rs=>rs.json()).catch(rs=>{
        let errors = {};
        errors.message = rs + "";
        errors.error_status = 1;
        return errors;
    });
}

export default _fetch;