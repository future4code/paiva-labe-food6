import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const UpdateProfile = (body) => {
    const token = localStorage.getItem("token")
    const [userData, setUserData] = useState({})

    const setProfile = () => {
    axios.put(`${BASE_URL}/profile`, {
        headers: {
            auth: token
        }
    }, body)
    .then((res) => {
        console.log(res.data)
        setUserData(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

    return{userData, setProfile}
}