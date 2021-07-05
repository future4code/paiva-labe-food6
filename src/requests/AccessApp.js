import { BASE_URL } from '../constants/constants';
import axios from 'axios';

import { gotoAddress, goToHome } from '../router/cordination';


export function LoginRequest(body, clear, history) {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToHome(history)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export function SignUpRequest(body, history) {
    console.log(body)
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert("Conta criada com sucesso!");
            gotoAddress(history)
        })
        .catch((err) => {
            console.log(err)
        })
}