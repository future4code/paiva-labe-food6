import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurants = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRNaWlNcnY0b3BMa2tpSUNPQjRSIiwiZW1haWwiOiJqdWxsaWFAZ21haWwuY29tLmJyIiwiaWF0IjoxNjI1MDYwNTU2fQ.W3foKXlLEarnuKN_XymoJVfRVZ2tJi2kyhnBp93h4yg"
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