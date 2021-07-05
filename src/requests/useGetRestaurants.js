import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurants = () => {
    const token = localStorage.getItem("token")
    const [restaurants, setRestaurants] = useState({})
    const header= {
        headers: {
            auth: token
        }
    }
    const getRestaurants = () => {
    axios.get(`${BASE_URL}/restaurants`, header)
    .then((res) => {
        setRestaurants(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
    return {restaurants, getRestaurants}
}