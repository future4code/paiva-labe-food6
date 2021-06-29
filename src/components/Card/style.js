import styled from "styled-components"

export const CardProduto = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 10%;

    img{
        object-fit:contain
    }

`

export const CardText = styled.h5`
    color: ${props => props.titulo ? "#5cb646":"#b8b8b8"};
`

export const DeliverySpace = styled.div`
    display:flex;
    justify-content: space-between;
`