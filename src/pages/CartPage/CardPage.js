import React, { useContext } from 'react';
import { GlobalStateContext } from '../../globalstate/GlobalStateContext';
import CardCart from "../../components/Card/CardCart"
import CartPage from '../../components/Cart/Cart';
import TituloPage from '../../components/Cart/TituloPage'
import AddressCart from '../../components/Cart/AddressCart'
import { Button } from '../../components/Button/Button';
import FooterCart from '../../components/Cart/Footer';

function CardPage() {
  //const {carrinho} = useContext()

  //const cartList = carrinho.map((cart) => {
  //return(
  //{<CardCart}
  // cartProducts = {cart}
  //   />
  //      )
  //  })

  return (
    <div>
      <TituloPage />
      <AddressCart />
      <CartPage />
      <Button>Confirmar</Button>
      <FooterCart />

    </div>


  )
}
export default CardPage;