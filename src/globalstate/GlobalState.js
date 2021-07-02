import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"

import { BASE_URL } from "../constants/constants"
import { CardText } from '../components/Card/style'

function GlobalState(props) {
    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([{}])
    const [restaurantDetail, setRestaurantDetail] = useState({})



    //RESGATA LISTA DE RESTAURANTES//////////////////////////////////////////////////////////
    const getRestaurants = () => {
        const token = localStorage.getItem("token")

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
    //RESGATA DETALHES DO RESTAURANTE/////////////////////////////////////////////////////
    const getRestaurantDetails = (id) => {
        const token = localStorage.getItem("token")
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
    //ADICIONA OBJETOS AO CARRINHO //////////////////////////////////////////////////////////
    const makeCart = (product, qntd) => {
        const cartProduct = {}

        cartProduct.product = product
        cartProduct.qnt = qntd


        setCart([...cart, cartProduct])

    }

    useEffect(() => {
        if (cart && cart.length > 0) { //Caso Cart tenha conteudo, envia para localStorage

            localStorage.setItem("cart", JSON.stringify(cart))

        } else if (cart.length <= 0 && localStorage.getItem("cart")
            && localStorage.getItem("cart").length) {//Caso esteja vazio e exista cart no localStorage, recebe o que está no localstorage

            setCart(JSON.parse(localStorage.getItem("cart")))
        }

    }, [cart])


    return (

        <GlobalStateContext.Provider value={{ restaurants, restaurantDetail, getRestaurants, getRestaurantDetails, makeCart }}>

            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
