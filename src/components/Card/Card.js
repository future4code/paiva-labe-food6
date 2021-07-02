import React from 'react'
import {CardRes,CardText,DeliverySpace} from "./style"

const Card = ({restaurants}) => {
    return (
        <CardRes>

            <figure>
                <img src = ""/>
            </figure>

            <CardText titulo>Nome Produto</CardText>

            <DeliverySpace>
                <CardText>Tempo de Entrega</CardText>
                <CardText>Frete R$5,00</CardText>
            </DeliverySpace>

        </CardRes>
    )
}

export default Card
