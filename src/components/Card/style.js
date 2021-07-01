import styled from "styled-components"

export const CardRes = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 10px;

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
    width: 100%;
`

export const CardProduct = styled.div`
    display:flex;
    height:10rem;
    margin: 1rem;

    border-radius: 10px;
    border: 1px solid #b8b8b8;

    h3{
        color:#5cb646;
    }

`
export const ProcutImg = styled.img`
    height:100%;
    width:112px;
    object-fit:cover;

    -webkit-border-top-left-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

`

export const ProductDetail = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    padding-left: 1rem;
    padding-top:1rem;
`

export const Description = styled.p`
    color: #b8b8b8;
`

export const Price = styled.p`
    font-weight: bold;
    color:black;
`

export const AddProduct = styled.div`
    display:flex;
    justify-content: space-between;

`

export const AddButton = styled.button`
    background: none;
    color: #5cb646;
    padding:0.5rem 1rem;
    margin:none;
    border: 1px solid #5cb646;
    -webkit-border-top-left-radius: 10px;
    -webkit-border-bottom-right-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-bottomright: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

