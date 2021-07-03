import React from 'react';
import {FooterContainer,Button} from './style'
import {gotoHome,gotoCart,gotoProfile} from "../../router/cordination"

function Footer(props) {
    return (
        
            <FooterContainer>
                
                <Button onClick = {() => gotoHome(props.history)}>
                    <p>&#8962;</p>
                </Button>

                <Button onClick = {() => gotoCart(props.history)}>
                    <p>&#128722;</p>
                </Button>   

                <Button onClick = {() => gotoProfile(props.history)}>
                    <p>&#128100;</p>
                </Button>              
            </FooterContainer>
       

    )
}

export default Footer
