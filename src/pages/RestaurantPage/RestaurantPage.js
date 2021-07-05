import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/Card/CardProduto';
import useProtectedPage from '../../hooks/useProtectedPage';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import { Details, DeliverySpace, ResLogo } from "./style"
import HeaderRestaurant from "../../components/Header/HeaderRestaurant"
import LoadingGif from '../../components/LoadingGif/LoadingGif';

function RestaurantPage() {

    useProtectedPage()

    const params = useParams()
    const { restaurantDetail, getRestaurantDetails, cart } = useContext(GlobalStateContext)

    useEffect(() => {
        getRestaurantDetails(params.id)
    }, [])

    const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
        return (

            <CardProduto
                product={product}
                restaurantId={params.id}
            />
        )
    })

    if (restaurantDetail.restaurant) {
        return (
            <div>
                <HeaderRestaurant />
                <Details>
                    <ResLogo src={restaurantDetail.restaurant.logoUrl} />
                    <h3>{restaurantDetail.restaurant.name}</h3>
                    <p>{restaurantDetail.restaurant.description}</p>
                    <DeliverySpace>
                        <p>{restaurantDetail.restaurant.deliveryTime} min</p>
                        <p>Frete R${restaurantDetail.restaurant.shipping}</p>
                    </DeliverySpace>
                    <p>{restaurantDetail.restaurant.address}</p>
                    {productsList && productsList}
                </Details>
            </div>
        )
    } else {
        return (
            <LoadingGif />
        )
    }


}
export default RestaurantPage;