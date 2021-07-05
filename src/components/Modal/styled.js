import styled from "styled-components"

export const ModalBody = styled.div`
    background-color: white;    

    display:flex;
    flex-direction: column;
    align-items: center;

    height:30vh;
`

export const ContentModal = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`

export const SelectModal = styled.select`
    width:100%;
    height:2rem;
    margin: 1rem 0;

`

export const CloseArea = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem;
`

export const CloseButton = styled.button`
    background:none;
    font-size: x-large;
    border:none;
`

export const BuyButton = styled.button`
    background:none;
    color: #5cb646;
    border:none;
    font-weight: bolder;

    display: flex;
    flex-direction: row-reverse;
`