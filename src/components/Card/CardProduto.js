import React, { useState } from 'react'
import Modal from "@material-ui/core/Modal";
import ModalComponent from "../Modal/Modal"
import { CardProduct,ProcutImg,
        ProductDetail,AddProduct,AddButton,
        Price,Description} from './style'

const CardProduto = ({product}) => {
    const {name,description,id,photoUrl,price} = product
    const [open,setOpen] = useState(false)

    console.log(product)

    let valor = price.toString().replace(".",",")

    if(valor.search(",") < 0){ //Adiciona ,00 aos valores sem decimal
        valor = valor + ",00"
    }else{
        valor = valor + "0" //Adiciona 0 aos valores com decimal
    }

    const closeButton = () => {
        setOpen(false)
    }


    return (
        <div>
            <CardProduct>
                <div>
                    <ProcutImg src = {photoUrl}/>
                </div>
                
                <ProductDetail>
                    <h3>{name}</h3>
                    <Description>{description}</Description>

                    <AddProduct>
                        <Price>R${valor}</Price>
                        <AddButton onClick = {() =>setOpen(true)}>Adicionar</AddButton>
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
                    close = {() => closeButton(false)}
                />
            </Modal>
        </div>
    )
}

export default CardProduto
