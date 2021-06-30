import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { gotoHome } from '../router/cordination';

export function LoginRequest(body, clear, history) {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data)
            console.log(res.data)
            gotoHome(history)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export function SignUpRequest(body) {

    axios.get(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
            alert(err.response.data)
        })
}