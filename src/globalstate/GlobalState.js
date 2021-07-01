import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import { useGetProfile } from '../requests/useGetProfile'
import { useGetActiveOrder } from '../requests/getActiveOrder'
import axios from "axios"
import {BASE_URL} from "../constants/constants"

function GlobalState(props) {
    const [carrinho, setCarrinho] = useState([{}])
    const [restaurants,setRestaurants] = useState([{}])

    const { userProfile, getProfile } = useGetProfile({})
    const { activeOrder, ActiveOrder } = useGetActiveOrder([{}])

    const getRestaurants = () => {

        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        )
            .then((res) => {
                setRestaurants(res.data.restaurants)

            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    return (
        <GlobalStateContext.Provider value={{userProfile, restaurants, getRestaurants, activeOrder}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
