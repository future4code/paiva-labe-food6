import axios from "axios";
import { BASE_URL } from "../constants/constants"
import { goToHome } from "../router/cordination"


export const addAdress = (body, clear, history) => {

    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToHome(history)
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const changeAdress = (body, clear, history) => {

    axios.put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert("endereço alterado com sucesso")
            history.push("/perfil")
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

