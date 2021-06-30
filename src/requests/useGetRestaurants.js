import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { useState } from 'react';

export const useGetRestaurants = () => {
    const [restaurants, setRestaurants] = useState({})
    const header= {
        headers: {
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMwOTkxNjh9.GNN7SQnv-WqZCnrh6q1UobUcb4jBkugtFpa50cdFQcE"
        }
    }
    const getRestaurants = () => {
    axios.get(`${BASE_URL}/restaurants`, header)
    .then((res) => {
        console.log(res.data)
        setRestaurants(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
        console.log(header)
    })
}
    return {restaurants, getRestaurants}
}