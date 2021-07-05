import React, { useContext, useEffect, useState } from 'react'
import Modal from "@material-ui/core/Modal";
import ModalComponent from "../Modal/Modal"
import { CardProduct,ProcutImg,
        ProductDetail,AddProduct,AddButton,
        Price,Description,TituloQnt,Qntd,
        Title,ResNote} from './style'

import { GlobalStateContext } from '../../globalstate/GlobalStateContext';

const CardProduto = ({product,qntd,restaurantId}) => {
    const {name,description,photoUrl,price,id} = product
    const [open,setOpen] = useState(false)
 
    const {cart,removeCart,activeOrder,getActiveOrder} = useContext(GlobalStateContext)

    const closeButton = () => {
        setOpen(false)
    }

    useEffect(() => {
        getActiveOrder()

    }, [cart])

    function checkCartRes(){
        if(cart[0] &&  restaurantId && cart[0].resID !== restaurantId){
            return(false)
        }else if (cart[0] && cart[0].resID === restaurantId){
            return(true)
        }
        return(true)
    }

    function inCart(){
        const valor = cart.length
        for (let i = 0;i < valor; i++){
            if(cart[i].product.id === id){
                return(true)
            }else if (cart[i] && cart[i].product.id === restaurantId){
               return(false)
            }
        }

    }

    return (
        <div>
            <CardProduct>
                <div>
                    <ProcutImg src = {photoUrl}/>
                </div>
                
                <ProductDetail>
                    <TituloQnt>
                        <Title>{name}</Title>
                        {qntd && (<Qntd><p>{qntd}</p></Qntd>)}
                    </TituloQnt>
                    <Description>{description}</Description>

                    <AddProduct>
                        <Price>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>

                        <div>
                            {checkCartRes() ? (

                                <AddButton inCart = {inCart()} onClick = 
                                
                                { () => { !inCart() ? ( activeOrder?  alert("Aguarde seu ultimo pedido ser finalizado"):setOpen(true)) :removeCart(id) }}>
                                    
                                    {!inCart()? "Adicionar":"Remover"}
                                
                                </AddButton>
                            ): 
                                <ResNote>Um restaurante por pedido</ResNote>
                            }
                        </div>

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
