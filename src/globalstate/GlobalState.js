import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"
import {BASE_URL} from "../constants/constants"
import { CardText } from '../components/Card/style'

function GlobalState(props) {
    const [cart, setCart] = useState([])
    const [restaurants,setRestaurants] = useState([{}])
    const [restaurantDetail, setRestaurantDetail] = useState({})

    const token = localStorage.getItem("token")

    const getRestaurants = () => {
        
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: token
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

    const getRestaurantDetails = (id) => {
        axios.get(`${BASE_URL}/restaurants/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
            setRestaurantDetail(res.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })

    }

    const makeCart = (product,qntd) => {
        const cartProduct = {}

        cartProduct.product = product
        cartProduct.qnt = qntd

        setCart([...cart,cartProduct])

    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    
    return (
        <GlobalStateContext.Provider value={{restaurants,restaurantDetail, getRestaurants,getRestaurantDetails,makeCart}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
