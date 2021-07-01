import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/Card/CardProduto';
import { useGetRestaurantsDetails } from '../../requests/getRestaurantDetail';
import useProtectedPage from '../../hooks/useProtectedPage';

function RestaurantPage() {
    useProtectedPage()
    const params = useParams()
    const { restaurantDetail, getRestaurantDetails } = useGetRestaurantsDetails()

    useEffect(() => {
        getRestaurantDetails(params.id)
    }, [])

    const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
        return (
            <CardProduto
                product={product}
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