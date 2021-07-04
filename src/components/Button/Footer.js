import React from 'react';
import {FooterContainer,Button} from './style'
import {goToHome,gotoCart,gotoProfile} from "../../router/cordination"

function Footer(props) {
    return (
        
            <FooterContainer>
                
                <Button onClick = {() => goToHome(props.history)}>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/E19FE52B-98DD-45E2-BC10-5EA201EBC89F.svg" alt="home" />
                </Button>

                <Button onClick = {() => gotoCart(props.history)}>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/F417BFE0-2FAC-40CE-A3EC-F2C83EC6CBDC.svg" alt="cart" />
                </Button>   

                <Button onClick = {() => gotoProfile(props.history)}>
                <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/9DC8C6F4-3577-43D7-BE27-C5D11085CD43.svg" alt="avatar" />
                </Button>              
            </FooterContainer>
       

    )
}

export default Footer
