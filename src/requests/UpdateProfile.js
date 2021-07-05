import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useUpdateProfile = () => {
    const token = localStorage.getItem("token")
    const [userData, setUserData] = useState({})

    const setProfile = (body, history) => {
        axios.put(`${BASE_URL}/profile`, body, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                alert("Dados alterados com sucesso !")
                setUserData(res.data.user)
                history.push("/perfil")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return { userData, setProfile }
}