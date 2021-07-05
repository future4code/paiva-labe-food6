import React, { useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../globalstate/GlobalStateContext'
import { DeliveryArea,ResDetails } from './style'

function RestaurantCart(props) {
    const {getRestaurantDetails,restaurantDetail} = useContext(GlobalStateContext)
    useEffect(() => {
        getRestaurantDetails(props.id)
    }, [])

    if(restaurantDetail.restaurant){
        props.shippingPrice(restaurantDetail.restaurant.shipping)
    }

    return (
        
        <div>
            {restaurantDetail.restaurant && (
                <ResDetails>
                    <h3>{restaurantDetail.restaurant.name}</h3>
                    <DeliveryArea>
                        <p>{restaurantDetail.restaurant.deliveryTime} min</p>
                        <p>Frete R${restaurantDetail.restaurant.shipping}</p>
                    </DeliveryArea>
                    <p>{restaurantDetail.restaurant.address}</p>
                </ResDetails>
            ) }

        </div>
    )
}

export default RestaurantCart
