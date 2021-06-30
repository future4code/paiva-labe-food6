import React, { useEffect,useState } from 'react'
import axios from "axios"
import {GlobalStateContext} from "./GlobalStateContext"
import { useGetProfile } from '../requests/useGetProfile'
import { useGetRestaurants } from '../requests/useGetRestaurants'
import { useGetActiveOrder } from '../requests/getActiveOrder'

function GlobalState(props) {
    const [carrinho,setCarrinho] = useState([{}])

    const {userProfile,getProfile} = useGetProfile({})
    const {restaurants,getRestaurants} = useGetRestaurants([{}])
    const {activeOrder,ActiveOrder} = useGetActiveOrder([{}])

    return (
        <GlobalStateContext.Provider value = {userProfile,restaurants,activeOrder}>
        {props.children}
    </GlobalStateContext.Provider>
    )
}

export default GlobalState
