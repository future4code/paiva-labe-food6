import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useUpdateProfile = () => {
    const token = localStorage.getItem("token")
    const [userData, setUserData] = useState({})

    const setProfile = (body, history) => {
        console.log(body)
        axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                console.log(res.data.user)
                alert("Dados alterados com sucesso !")
                setUserData(res.data.user)
                history.push("/perfil")
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    return { userData, setProfile }
}