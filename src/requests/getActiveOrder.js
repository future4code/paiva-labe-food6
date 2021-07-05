import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetActiveOrder = () => {
    const token = localStorage.getItem("token")
    const [activeOrder, setActiveOrder] = useState({})


    const getActiveOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setActiveOrder(res.data.order)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return { activeOrder, getActiveOrder }
}