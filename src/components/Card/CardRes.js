import React from 'react'
import {CardRes,CardText,DeliverySpace,ResImg,DetailsArea} from "./style"

const CardRestaurant = ({restaurants}) => {
    const {name,logoUrl,deliveryTime,shipping} = restaurants

    return (
        <CardRes>

            <div>
                <ResImg src = {logoUrl}/>
            </div>

            <DetailsArea>
                <CardText titulo>{name}</CardText>

                <DeliverySpace>
                    <CardText>{deliveryTime} min</CardText>
                    <CardText>{shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</CardText>
                </DeliverySpace>
            </DetailsArea>


        </CardRes>
    )
}

export default CardRestaurant
