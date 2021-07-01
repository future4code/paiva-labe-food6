import React from 'react'

const CardProduto = ({product}) => {
    const {name,description,id,photoUrl,price} = product

    return (
        <div>
            <img src = {photoUrl}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>R${price}</p>
        </div>
    )
}

export default CardProduto
