import React from 'react';

import { FooterContainer, IconImg } from './style'
import { gotoProfile, gotoHome, gotoCart } from "../../router/cordination"
import { useHistory } from "react-router-dom";
import home from '../../Assets/home_cinza.svg'
import cart from '../../Assets/cart_cinza.svg'
import avatar from '../../Assets/avatar_cinza.svg'
import homeGreen from '../../Assets/home_verde.svg'
import cartGreen from '../../Assets/cart_verde.svg'
import avatarGreen from '../../Assets/avatar_verde.svg'


function Footer() {
    const history = useHistory();

import {FooterContainer,Button} from './style'
import {goToHome,gotoCart,gotoProfile} from "../../router/cordination"


    return (


        <FooterContainer>

            <IconImg src={history.location.pathname === "/" ? homeGreen : home}
                alt="home"
                onClick={() => gotoHome(history)} />

            <IconImg src={history.location.pathname === "/carrinho" ? cartGreen : cart }
                alt="cart"
                onClick={() => gotoCart(history)} />

            <IconImg src={history.location.pathname === "/perfil" ? avatarGreen : avatar}
                alt="avatar"
                onClick={() => gotoProfile(history)} />

        </FooterContainer>


        
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
