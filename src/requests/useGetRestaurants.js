import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurants = () => {
    const token = localStorage.getItem("token")
    const [restaurants, setRestaurants] = useState({})

    const getRestaurants = () => {
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        console.log(res.data)
        setRestaurants(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
    return {restaurants, getRestaurants}
}