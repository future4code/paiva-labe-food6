import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetActiveOrder = () => {
    const token = localStorage.getItem("token")
    const [activeOrder, setActiveOrder] = useState({})


    const ActiveOrder = () => {
    axios.get(`${BASE_URL}/active-order`, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        console.log(res.data)
        setActiveOrder(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
    return{activeOrder, ActiveOrder}
}