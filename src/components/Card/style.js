import styled from "styled-components"

export const CardRes = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    margin:1rem;
    height:15rem;
`

export const ResImg = styled.img`
    height: 150px;
    width: 100%;
    object-fit: cover;

    -webkit-border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-topright: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const DetailsArea = styled.div`
    padding:1rem;
`

export const CardText = styled.p`
    color: ${props => props.titulo ? "#5cb646":"#b8b8b8"};
    font-weight: 500;
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
    color:${props => props.inCart ? "#e02020":"#5cb646"} ;


    padding:0.5rem 1rem;
    margin:none;
    border: 1px solid ${props => props.inCart ? "#e02020":"#5cb646"};
    -webkit-border-top-left-radius: 10px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-bottomright: 8px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 8px;
`

