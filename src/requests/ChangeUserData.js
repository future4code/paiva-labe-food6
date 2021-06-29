import { BASE_URL } from '../constants/constants';
import axios from 'axios';

export const setAddress = (body) => {
    const token = localStorage.getItem("token")

    axios.put(`${BASE_URL}/address`, {
        headers: {
            auth: token
        }
    }, body)

    .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data)
    })

    .catch((err) => {
        console.log(err.response.data)
    })
}