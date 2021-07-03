import React from 'react';
import './ordercard.scss';

function OrderCard({ userProfile }) {
    console.log(userProfile)

    return (
        <div id="orderContainer">
            <div className="orderCard">
                <h2>Bullguer Vila Madalena</h2>
                <p>23 de outubro 2019</p>
                <h3><strong>SUBTOTAL R$99,90</strong></h3>
            </div>
        </div>
    )
}
export default OrderCard;
