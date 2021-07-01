import React from 'react';
import { useEffect } from 'react';
import CardProduto from '../../components/Card/CardProduto';
import { useGetRestaurantsDetails } from '../../requests/getRestaurantDetail';


function RestaurantPage() {

    const {restaurantDetail,getRestaurantDetails} = useGetRestaurantsDetails()

    useEffect(() => {
        getRestaurantDetails(1)
    }, [])

    const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
        return(
            <CardProduto
                product = {product}
            />
        )
    })

    return(
        <div>
            <h1>Oi eu sou a RestaurantPage</h1>
            {productsList && productsList}
        </div>
    )
}
export default RestaurantPage;