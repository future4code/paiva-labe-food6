import React, { useContext, useEffect, useState } from 'react'
import Modal from "@material-ui/core/Modal";
import ModalComponent from "../Modal/Modal"
import { CardProduct,ProcutImg,
        ProductDetail,AddProduct,AddButton,
        Price,Description} from './style'
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';

const CardProduto = ({product,qntd,restaurantId}) => {
    const {name,description,photoUrl,price,id} = product
    const [open,setOpen] = useState(false)
    const [inCart,setInCart] = useState(false)

    const {cart,deleted,removeCart} = useContext(GlobalStateContext)


    let valor = price.toString().replace(".",",")

    if(valor.search(",") < 0){ //Adiciona ,00 aos valores sem decimal
        valor = valor + ",00"
    }else{
        valor = valor + "0" //Adiciona 0 aos valores com decimal
    }

    const closeButton = () => {
        setOpen(false)
    }


    useEffect(() => {
        console.log("deleted")
        for (let i = 0;i < cart.length; i++){

            if(cart[i].product.id === id){
                setInCart(true)
            }
        }
    }, [cart,deleted])



    return (
        <div>
            <CardProduct>
                <div>
                    <ProcutImg src = {photoUrl}/>
                </div>
                
                <ProductDetail>
                    <h3>{name}</h3>
                    {qntd && (<div><p>{qntd}</p></div>)}
                    <Description>{description}</Description>

                    <AddProduct>
                        <Price>R${valor}</Price>
                        <AddButton inCart = {inCart} onClick = { () => { !inCart ? setOpen(true):removeCart(id) }}>{!inCart? "Adicionar":"Remover"}</AddButton>
                    </AddProduct>
                </ProductDetail>

            </CardProduct>
            
            <Modal //MODAL
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{padding:"1rem",display:"flex",
                        alignItems:'center',justifyContent:'center'}}
            >

                <ModalComponent
                    product = {product}
                    resID = {restaurantId}
                    close = {() => closeButton(false)}
                />
            </Modal>
        </div>
    )
}

export default CardProduto
