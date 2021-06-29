import {BASE_URL} from "../constants"
import axios from 'axios'

export const login = (body, clear) => {
    
        axios.post(BASE_URL, body)
        .then((res) => {
            console.log(res.data)
            clear()
        })
        .catch((err) => {
            console.log(err.data)
        })

}