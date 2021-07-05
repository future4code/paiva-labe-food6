import axios from "axios";
import { BASE_URL } from "../constants/constants"
import { goToHome } from "../router/cordination"


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
            goToHome(history)
            clear()
        })
        .catch((err) => {
            console.log(err)
        })
}

export const changeAdress = (body, clear) => {
    console.log(body)

    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log(res.data)
            alert("endereço alterado com sucesso")
            clear()
        })
        .catch((err) => {
            console.log(err)
        })
}