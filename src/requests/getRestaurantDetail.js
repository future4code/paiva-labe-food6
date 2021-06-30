import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurantsDetails = () => {
    const token = localStorage.getItem("token")
    const [restaurantDetail, setRestaurantDetail] = useState({})


    const restaurantDetails = (id) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        console.log(res.data)
        setRestaurantDetail(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
    return{restaurantDetail, restaurantDetails}
}