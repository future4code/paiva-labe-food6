import { BASE_URL } from '../constants/constants';
import { useState } from 'react';
import axios from 'axios';

export function useGetProfile() {
    const token = localStorage.getItem("token")
    const [userProfile, setUserProfile] = useState([])

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setUserProfile(res.data.user)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return {userProfile, getProfile}
}