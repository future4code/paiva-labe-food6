import { BASE_URL } from '../constants/constants';
import axios from 'axios';

export function LoginRequest(body) {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data)
        })
        .catch((err) => {
            alert(err.message)
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