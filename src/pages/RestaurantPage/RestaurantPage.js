import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/Card/CardProduto';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';


function RestaurantPage() {

    useProtectedPage()

    const params = useParams()
    const { restaurantDetail, getRestaurantDetails } = useContext(GlobalStateContext)

    useEffect(() => {
        getRestaurantDetails(params.id)
    }, [])


    const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
        return (
            <CardProduto
                product= {product}
                restaurantId = {params.id}
            />
        )
    })

    return (
        <div>
            <h1>Oi eu sou a RestaurantPage</h1>
            {productsList && productsList}
        </div>
    )
}
export default RestaurantPage;