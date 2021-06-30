import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetOrderHistory = () => {
    const token = localStorage.getItem("token")
    const [orderHistory, setOrderHistory] = useState({})


    const OrderHistory = () => {
    axios.get(`${BASE_URL}/active-order`, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        console.log(res.data)
        setOrderHistory(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
    return{orderHistory, OrderHistory}
}