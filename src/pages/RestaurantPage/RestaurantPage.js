import React from 'react';
import { useEffect } from 'react';
import { useGetRestaurantsDetails } from '../../requests/getRestaurantDetail';

function RestaurantPage() {

    const {restaurantDetail,getRestaurantDetails} = useGetRestaurantsDetails()

    useEffect(() => {
        getRestaurantDetails(1)
    }, [])

    console.log(restaurantDetail.restaurant)

    const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
        return(
            <div products = {product} />
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