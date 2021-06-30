import {BASE_URL} from "../constants"
import axios from 'axios'

export const getRestaurants = () => {
    
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                Authorization: localStorage.getItem("token")
              }
        })
        .then((res) => {
            console.log(res.data)
        
        })
        .catch((err) => {
            console.log(err.data)
        })

}