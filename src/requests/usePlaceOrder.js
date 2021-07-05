import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const usePlaceOrder = (body) => {
    const token = localStorage.getItem("token")
    const [order, setOrder] = useState([])


    const getPlaceOrder = (id) => {
    axios.post(`${BASE_URL}/restaurants/${id}/order`, {
        headers: {
            auth: token
        }
    }, body)
    .then((res) => {
        setOrder(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}
    return{order, getPlaceOrder}
}