import React from 'react';
import { useEffect } from 'react';
import { getRestaurants } from '../../requests/getRestaurants';

function RestaurantPage() {

    useEffect(()=>{
        getRestaurants()
    }, [])
    return(
        <div>
            <h1>Oi eu sou a RestaurantPage</h1>
        </div>
    )
}
export default RestaurantPage;