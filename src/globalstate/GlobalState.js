import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import { useGetProfile } from '../requests/useGetProfile'
import { useGetRestaurants } from '../requests/useGetRestaurants'
import { useGetActiveOrder } from '../requests/getActiveOrder'

function GlobalState(props) {
    const [carrinho, setCarrinho] = useState([{}])

    const { userProfile, getProfile } = useGetProfile({})
    const { restaurants, getRestaurants } = useGetRestaurants([{}])
    const { activeOrder, ActiveOrder } = useGetActiveOrder([{}])

useEffect(()=>{
    // getRestaurants()
}, [])

    return (
        <GlobalStateContext.Provider value={userProfile, restaurants, getRestaurants, activeOrder}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
