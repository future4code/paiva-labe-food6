import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetOrderHistory = () => {
    const token = localStorage.getItem("token")
    const [orderHistory, setOrderHistory] = useState([])


    const getOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setOrderHistory([res.data.order])
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    return { orderHistory, getOrder }
}