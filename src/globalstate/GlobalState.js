import React, { useEffect, useState } from 'react'
import { GlobalStateContext } from "./GlobalStateContext"
import axios from "axios"

import { BASE_URL } from "../constants/constants"


function GlobalState(props) {
    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([{}])
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [userProfile, setUserProfile] = useState([])
    const [activeOrder, setActiveOrder] = useState({})

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

    //RESGATA PROFILE/////////////////////////////////////////////////

    const getProfile = () => {
        const token = localStorage.getItem("token")
        axios
        .get(`${BASE_URL}/profile`, {
            headers:{
                auth:token
            }
        })
        .then((res) => {
            setUserProfile(res.data.user)
        })
        .catch((err) => {
            console.log(err.response)
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

    //RECEBE PEDIDO ATIVO////////////////////////////////////////////////////////////
    
    const getActiveOrder = () => {
        const token = localStorage.getItem("token")

        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setActiveOrder(res.data.order)
            })
            .catch((err) => {
               console.log(err.response)
            })
    }

    //REMOVE DO CARRINHO/////////////////////////////////////////////////////////////
    const removeCart = (id) => {
        let novaLista = [...cart]
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
        } else if (cart.length <= 0 && localStorage.getItem("cart") && localStorage.getItem("cart").length) {
            //Caso esteja vazio e exista cart no localStorage, recebe o que está no localstorage
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    }, [cart])


    return (

        <GlobalStateContext.Provider value={{ activeOrder,userProfile,restaurants, restaurantDetail,cart, getRestaurants,getActiveOrder, getRestaurantDetails,getProfile,makeCart,removeCart }}>

            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
