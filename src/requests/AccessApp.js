import { BASE_URL } from '../constants/constants';
import axios from 'axios';

import { gotoAddress, goToHomePage } from '../router/cordination';


export function LoginRequest(body, clear, history) {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToHomePage(history)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export function SignUpRequest(body, clear, history, values) {
    console.log(body)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            gotoAddress(history)
            clear()
            values()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}