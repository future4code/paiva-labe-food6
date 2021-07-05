import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurantsDetails = () => {
    const token = localStorage.getItem("token")
    const [restaurantDetail, setRestaurantDetail] = useState({})


    const getRestaurantDetails = (id) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        setRestaurantDetail(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
    return{restaurantDetail, getRestaurantDetails}
}