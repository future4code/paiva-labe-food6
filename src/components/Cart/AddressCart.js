import React from 'react';
import {MainEndereco, DivTituloEndereco, DivEndereco} from '../../pages/CartPage/styled'

function AddressCart({profile}) {
    const {address} = profile
    return (
        
            <MainEndereco>
                <DivTituloEndereco>
                    Endereço de entrega
                </DivTituloEndereco>

                <DivEndereco>
                    {address}
                </DivEndereco>                
            </MainEndereco>
       

    )
}

export default AddressCart

