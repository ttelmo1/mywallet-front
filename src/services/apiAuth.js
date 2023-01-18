import axios from "axios";



function login(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/login`, body);
    return promise;
}

function signUp(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
    return promise;
}

const apiAuth = { login, signUp };
export default apiAuth;