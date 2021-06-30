import React, { useContext } from 'react';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import CardCart from "../../components/Card/CardCart"

function CardPage() {
    const {carrinho} = useContext()

    const cartList = carrinho.map((cart) => {
        return(
            <CardCart
                cartProducts = {cart}
            />
        )
    })

    return(
        <div>
            <h1>Oi eu sou a CardPage</h1>
            
        </div>
    )
}
export default CardPage;