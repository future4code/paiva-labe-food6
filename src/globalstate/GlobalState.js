import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"

import { BASE_URL } from "../constants/constants"
import { CardText } from '../components/Card/style'
import { fireEvent } from '@testing-library/react'

function GlobalState(props) {
    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([{}])
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [deleted,setDeleted] = useState(false)



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
            setRestaurantDetail(res.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })

    }
    //ADICIONA OBJETOS AO CARRINHO //////////////////////////////////////////////////////////
    const makeCart = (product,qntd,resID) => {

        const cartProduct = {}

        cartProduct.product = product
        cartProduct.qnt = qntd
        cartProduct.resID = resID


        setCart([...cart, cartProduct])

    }

    //REMOVE DO CARRINHO/////////////////////////////////////////////////////////////
    const removeCart = (id) => {
        let novaLista = [...cart]
        setDeleted(true)
        for(let i = 0;i < novaLista.length; i++){   
            if(novaLista[i].product.id === id){
                if(novaLista.length === 1){
                    setCart([])
                    localStorage.removeItem('cart')
                }
                    novaLista.splice(i,1)
                    setCart(novaLista)
            }
        }

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

        <GlobalStateContext.Provider value={{ restaurants, restaurantDetail,cart,deleted, getRestaurants, getRestaurantDetails, makeCart,removeCart }}>

            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
