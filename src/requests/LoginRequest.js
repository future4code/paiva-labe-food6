import {BASE_URL} from "../constants"
import axios from 'axios'

export const login = (body, clear) => {
    
        axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log(res.data)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

}