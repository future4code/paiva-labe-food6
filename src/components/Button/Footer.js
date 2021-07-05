import React from 'react';
import { FooterContainer, IconImg } from './style'
import { gotoProfile, goToHome, gotoCart } from "../../router/cordination";
import { useHistory } from "react-router-dom";
import home from '../../Assets/home_cinza.svg'
import cart from '../../Assets/cart_cinza.svg'
import avatar from '../../Assets/avatar_cinza.svg'
import homeGreen from '../../Assets/home_verde.svg'
import cartGreen from '../../Assets/cart_verde.svg'
import avatarGreen from '../../Assets/avatar_verde.svg'




function Footer() {
    const history = useHistory();

    return (


        <FooterContainer>

            <IconImg src={history.location.pathname === "/pagina-inicial" ? homeGreen : home}
                alt="home"
                onClick={() => goToHome(history)} />

            <IconImg src={history.location.pathname === "/carrinho" ? cartGreen : cart }
                alt="cart"
                onClick={() => gotoCart(history)} />

            <IconImg src={history.location.pathname === "/perfil" ? avatarGreen : avatar}
                alt="avatar"
                onClick={() => gotoProfile(history)} />

        </FooterContainer>
        
            


    )
}

export default Footer
