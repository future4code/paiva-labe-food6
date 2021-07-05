import React from 'react';
import './ordercard.scss';

function OrderCard({ order }) {
    const { restaurantName, totalPrice } = order

    const dateConverter = (date) => {
        let dateNowConverter = new Date(date);
        return dateNowConverter.toString().substr(4, 11)
    };

    return (
        <div id="orderContainer">
            <div className="orderCard">
                <h2>{restaurantName}</h2>
                <p>{dateConverter(order.createdAt)}</p>
                <h3><strong>SUBTOTAL {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></h3>
            </div>
        </div>
    )
}

export default OrderCard;
