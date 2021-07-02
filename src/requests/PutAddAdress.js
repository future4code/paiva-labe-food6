import axios from "axios";
import { BASE_URL } from "../constants/constants"
import { gotoHome } from "../router/cordination"


export const addAdress = (body, clear, history) => {
    console.log(body)

    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log(res.data)
            gotoHome(history)
            clear()
        })
        .catch((err) => {
            console.log(err)
        })
}