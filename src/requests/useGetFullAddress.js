import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export default function useFullAddressRequest() {
    const [address, setAddress] = useState({})
    const token = localStorage.getItem("token")

    const getFullAddress = () => {

        axios.get(`${BASE_URL}/profile/address`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setAddress(res.data.address)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return [address, getFullAddress]
}