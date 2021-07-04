import React from 'react';
import {FooterContainer, DivHome, DivCart, DivPerfil} from '../../pages/CartPage/styled'

function FooterCart() {
    return (
        
            <FooterContainer>
                
                <DivHome>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/E19FE52B-98DD-45E2-BC10-5EA201EBC89F.svg" alt="home" />
                </DivHome>

                <DivCart>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/F417BFE0-2FAC-40CE-A3EC-F2C83EC6CBDC.svg" alt="cart" />
                </DivCart>   

                <DivPerfil>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/9DC8C6F4-3577-43D7-BE27-C5D11085CD43.svg" alt="avatar" />
                </DivPerfil>              
            </FooterContainer>
       

    )
}

export default FooterCart
