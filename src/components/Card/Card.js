import React from 'react'
import {CardProduto,CardText,DeliverySpace} from "./style"

const Card = (props) => {
    return (
        <CardProduto>

            <figure>
                <img src = ""/>
            </figure>

            <CardText titulo>Nome Produto</CardText>

            <DeliverySpace>
                <CardText>Tempo de Entrega</CardText>
                <CardText>Frete R$5,00</CardText>
            </DeliverySpace>

        </CardProduto>
    )
}

export default Card
